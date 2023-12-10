import React from 'react';
import { GetServerSideProps } from 'next';

import { useAddOrderMutation } from '@/domains/orders/hooks/mutation/useOrderMutation';
import { useAddOrderForm } from '@/domains/orders/hooks/useAddOrderForm';
import { useOrdersDatatable } from '@/domains/orders/hooks/useOrdersDatatable';
import {
    AddOrderArgsType,
    getOrders,
    OrderType,
} from '@/domains/orders/services/order.service';

import { Button } from '@/shared/components/buttons/Button';
import { Datatable } from '@/shared/components/datas/Datatable';
import { Box } from '@/shared/components/displays/Box';
import { NumberInput } from '@/shared/components/inputs/NumberInput';
import { Switch } from '@/shared/components/inputs/Switch';
import { TextInput } from '@/shared/components/inputs/TextInput';
import { HStack } from '@/shared/components/layouts/HStack';
import { VStack } from '@/shared/components/layouts/VStack';
import { BaseModal } from '@/shared/components/overlays/BaseModal';
import { Typography } from '@/shared/components/typography/Typography';
import { useToggle } from '@/shared/hooks/useToggle';
import { ListResponse } from '@/shared/interfaces/http.interface';

export type AdminOrderPageProps = { orders: ListResponse<OrderType[]> };

const AdminOrdersPage = ({ orders }: AdminOrderPageProps) => {
    const { FormProvider, form, wrapWithController } = useAddOrderForm();
    const {
        value: addModalShow,
        setTrue: showAddModal,
        setFalse: hideAddModal,
    } = useToggle(false);

    const { mutate, isLoading } = useAddOrderMutation({
        onSuccess: () => {
            hideAddModal();
            refetch();
        },
    });
    const {
        columns,
        fetching,
        page,
        perPage,
        records,
        refetch,
        setPage,
        totalRecords,
    } = useOrdersDatatable({ initialData: orders });

    const order = async () => {
        const formValid = await form.trigger();
        if (!formValid) return;

        const values = form.getValues();
        values.payment = values.is_paid ? 250000 : 150000;
        values.phone_number = `+62${values.phone_number}`;

        mutate(values as AddOrderArgsType);
    };

    return (
        <Box h="100vh" w="100vw" bg="white" p="3rem">
            <VStack>
                <HStack justify="space-between" align="center">
                    <Typography as="h1">91Fussball Jersey List</Typography>
                    <Button onClick={showAddModal}>Tambah Pesanan</Button>
                </HStack>

                <Datatable
                    columns={columns}
                    fetching={fetching}
                    records={records}
                    totalRecords={totalRecords}
                    recordsPerPage={perPage}
                    page={page}
                    onPageChange={(page) => setPage(page)}
                />

                <BaseModal
                    opened={addModalShow}
                    onOk={order}
                    title="Add Order"
                    okButtonProps={{ loading: isLoading }}
                    onClose={() => {
                        hideAddModal();
                        form.clearErrors();
                    }}
                >
                    <FormProvider {...form}>
                        <VStack>
                            {wrapWithController({
                                control: form.control,
                                name: 'name',
                                render: ({ field, fieldState: { error } }) => {
                                    return (
                                        <TextInput
                                            placeholder="Denindra Asthyfal"
                                            required
                                            label="Nama"
                                            size="sm"
                                            w="100%"
                                            {...field}
                                        />
                                    );
                                },
                            })}
                            {wrapWithController({
                                control: form.control,
                                name: 'phone_number',
                                render: ({ field, fieldState: { error } }) => {
                                    return (
                                        <NumberInput
                                            label="Nomor Telepon"
                                            placeholder="8595xxxxxx"
                                            leftSection="+62"
                                            required
                                            rightSection={<></>}
                                            size="sm"
                                            w="100%"
                                            {...field}
                                        />
                                    );
                                },
                            })}

                            {wrapWithController({
                                control: form.control,
                                name: 'is_paid',
                                render: ({ field }) => {
                                    return (
                                        <VStack gap={0}>
                                            <Switch
                                                {...field}
                                                onText="Lunas"
                                                offText="DP"
                                                value=""
                                                checked={field.value}
                                                onChange={(e: any) => {
                                                    const checked =
                                                        e.target.checked;

                                                    field.onChange(checked);
                                                }}
                                            />
                                        </VStack>
                                    );
                                },
                            })}
                        </VStack>
                    </FormProvider>
                </BaseModal>
            </VStack>
        </Box>
    );
};

export default AdminOrdersPage;

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const response = await getOrders({ page: 1, limit: 10 });

        return {
            props: { orders: response },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {},
        };
    }
};
