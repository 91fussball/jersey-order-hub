import { useSession } from 'next-auth/react';

import { boolean, number, object, string } from 'yup';

import { useFormAdapter, useYupResolver } from '@/shared/hooks/useFormAdapter';

const schema = object({
    name: string().required('Masa mesen engga namanya bro'),
    phone_number: string().required('Nomerin donag biar bisa di kontak'),
    is_paid: boolean(),
    payment: number(),
});

export const useAddOrderForm = () => {
    const resolver = useYupResolver(schema);

    const roleForm = useFormAdapter<{
        name: string;
        is_paid: boolean;
        payment?: number;
        phone_number: string;
    }>({
        reValidateMode: 'onSubmit',
        defaultValues: {},
        resolver,
    });

    return { ...roleForm };
};
