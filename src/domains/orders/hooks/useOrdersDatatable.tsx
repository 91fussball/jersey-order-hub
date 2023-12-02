import { useMemo } from 'react';

import { DataTableColumn } from 'mantine-datatable';

import { useOrdersQuery } from '@/domains/orders/hooks/queries/useOrdersQuery';
import { OrderType } from '@/domains/orders/services/order.service';

import { usePagination } from '@/shared/hooks/usePagination';
import { ListResponse } from '@/shared/interfaces/http.interface';
import { formatToRupiah } from '@/shared/utils/format-to-rupiah';

export const useOrdersDatatable = (props?: {
    initialData: ListResponse<OrderType[]>;
}) => {
    const { page, perPage, ...pagination } = usePagination();
    const { data, isFetching } = useOrdersQuery({
        params: { page, limit: perPage },
    });

    const columns: DataTableColumn<OrderType>[] = useMemo(
        () => [
            {
                accessor: 'id',
                title: 'Code',
            },
            {
                accessor: 'name',
                title: 'Name',
                width: 250,
            },
            {
                accessor: 'phone_number',
                title: 'Phone Number',
            },
            {
                accessor: 'back_number',
                title: 'Jersey Number',
            },
            {
                accessor: 'jersey_name',
                title: 'Jersey Name',
            },
            {
                accessor: 'size',
                title: 'Size',
            },
            {
                accessor: 'jersey_type',
                title: 'Jersey Type',
            },
            {
                accessor: 'loongsleve',
                title: 'Longsleeve',
                render: ({ longsleeve }: OrderType) => {
                    return longsleeve ? '✅' : '❌';
                },
            },
            {
                accessor: 'is_paid',
                title: 'Paid',
                render: ({ is_paid }: OrderType) => {
                    return is_paid ? '✅' : '❌';
                },
            },
            {
                accessor: 'payment',
                title: 'Payment',
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
        };
    }, [pagination, data, isFetching]);
};
