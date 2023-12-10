import { useMemo, useState } from 'react';

import { DataTableColumn } from 'mantine-datatable';

import { useOrdersQuery } from '@/domains/orders/hooks/queries/useOrdersQuery';
import { OrderType } from '@/domains/orders/services/order.service';

import FilterableColumn from '@/shared/components/FilterableColumn';
import SearchableColumn from '@/shared/components/SearchableColumn';
import { usePagination } from '@/shared/hooks/usePagination';
import { useUpdateEffect } from '@/shared/hooks/useUpdateEffect';
import { ListResponse } from '@/shared/interfaces/http.interface';
import { parseDateToString } from '@/shared/lib/date-manipulator';
import { formatToRupiah } from '@/shared/utils/format-to-rupiah';

export type OrdersFilterType = { id?: string };

export const useOrdersDatatable = (props?: {
    initialData: ListResponse<OrderType[]>;
}) => {
    const [filter, setFilter] = useState({});
    const { page, perPage, ...pagination } = usePagination();
    const { data, isFetching, ...query } = useOrdersQuery({
        params: { page, limit: perPage, ...filter },
    });

    useUpdateEffect(() => {
        pagination.setPage(1);
    }, [filter]);

    const columns: DataTableColumn<OrderType>[] = useMemo(
        () => [
            {
                accessor: 'id',
                width: 90,
                title: (
                    <SearchableColumn
                        title="ID"
                        onChange={(id) => {
                            setFilter((prev) => ({ ...prev, id }));
                        }}
                    />
                ),
            },
            {
                accessor: 'name',
                width: 250,
                title: (
                    <SearchableColumn
                        title="Nama"
                        onChange={(name) => {
                            setFilter((prev) => ({ ...prev, name }));
                        }}
                    />
                ),
            },
            {
                accessor: 'phone_number',
                width: 200,
                title: (
                    <SearchableColumn
                        title="Nomor Telepon"
                        onChange={(phone_number) => {
                            setFilter((prev) => ({ ...prev, phone_number }));
                        }}
                    />
                ),
            },
            {
                accessor: 'created_at',
                title: 'Tanggal Order',
                width: 150,
                render: ({ created_at }) => {
                    return parseDateToString(created_at, 'DD MMMM YYYY');
                },
            },
            {
                accessor: 'back_number',
                title: 'Nomor Punggung',
            },
            {
                accessor: 'jersey_name',
                title: 'Nama Punggung',
            },
            {
                accessor: 'size',
                width: 125,
                title: (
                    <FilterableColumn
                        title="Ukuran"
                        options={[
                            { label: 'S', value: 'S' },
                            { label: 'M', value: 'M' },
                            { label: 'L', value: 'L' },
                            { label: 'XL', value: 'XL' },
                            { label: '2XL', value: '2XL' },
                        ]}
                        onChange={(size) => {
                            setFilter((prev) => ({ ...prev, size }));
                        }}
                    />
                ),
            },
            {
                accessor: 'jersey_type',
                width: 150,
                title: (
                    <FilterableColumn
                        title="Tipe Jersey"
                        options={[
                            { label: 'GK', value: 'GK' },
                            { label: 'NON-GK', value: 'NON-GK' },
                        ]}
                        onChange={(jersey_type) => {
                            setFilter((prev) => ({ ...prev, jersey_type }));
                        }}
                    />
                ),
            },
            {
                accessor: 'loongsleve',
                title: 'Lengan Panjang',
                render: ({ longsleeve }: OrderType) => {
                    return longsleeve ? '✅' : '❌';
                },
            },
            {
                accessor: 'is_paid',
                title: 'Lunas',
                render: ({ is_paid }: OrderType) => {
                    return is_paid ? '✅' : '❌';
                },
            },
            {
                accessor: 'payment',
                title: 'Pembayaran',
                render: ({ payment }: OrderType) => {
                    return formatToRupiah(payment);
                },
            },
        ],
        [],
    );

    return useMemo(() => {
        return {
            columns,
            fetching: isFetching,
            page,
            perPage,
            records: data?.data,
            totalRecords: data?.meta.total,
            ...pagination,
            ...query,
        };
    }, [pagination, data, isFetching]);
};
