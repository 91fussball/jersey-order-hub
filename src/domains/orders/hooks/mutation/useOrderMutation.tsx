import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import {
    addOrder,
    AddOrderArgsType,
} from '@/domains/orders/services/order.service';

export const useAddOrderMutation = (
    options?: UseMutationOptions<any, Error, AddOrderArgsType>,
) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['create-role-mutation'],
        mutationFn: (args: AddOrderArgsType) => {
            return addOrder(args);
        },
        onSettled: (__, error) => {
            queryClient.invalidateQueries('role-list');
            queryClient.invalidateQueries('role');

            if (error) {
                toast.error('Gagal membuat pesanan: ' + error.message);
                return;
            }

            toast.success('Pesanan Baru Ditambahkan!');
        },
        ...options,
    });
};
