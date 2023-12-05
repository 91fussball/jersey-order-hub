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
    const { data, isFetching, ...query } = useOrdersQuery({
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
                title: 'Nama',
                width: 250,
            },
            {
                accessor: 'phone_number',
                title: 'Nomor Telepon',
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
                title: 'Ukuran',
            },
            {
                accessor: 'jersey_type',
                title: 'Tipe Jersey',
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
