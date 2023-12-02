import { ReactNode } from 'react';

import {
    DataTableProps,
    DataTable as MantineDatatable,
} from 'mantine-datatable';

export const Datatable = <T,>(props: DataTableProps<T>) => {
    return (
        <MantineDatatable<T>
            borderRadius="sm"
            fz="sm"
            highlightOnHover
            horizontalSpacing="sm"
            minHeight={200}
            striped
            verticalSpacing="md"
            withColumnBorders
            withTableBorder
            paginationText={
                (({ from, to, totalRecords }: any): ReactNode =>
                    `Showing ${from} - ${to} of ${totalRecords}`) as any
            }
            {...props}
        />
    );
};
