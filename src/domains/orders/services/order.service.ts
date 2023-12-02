import { ENVS } from '@/shared/constants/envs';
import { BasicParams, ListResponse } from '@/shared/interfaces/http.interface';
import { getRequest, parseErrorMessage } from '@/shared/lib/http';

export type OrderType = {
    back_number: number;
    created_at: string;
    id: string;
    is_paid: boolean;
    jersey_type: string;
    longsleeve: boolean;
    name: string;
    payment: number;
    phone_number: string;
    size: string;
    updated_at: string;
};

export const getOrders = async (
    params: BasicParams,
): Promise<ListResponse<OrderType[]>> => {
    try {
        const response = await getRequest({
            url: `${ENVS.API_BASE}/api/v1/orders`,
            params,
        });

        return response.data;
    } catch (error: any) {
        throw new Error(parseErrorMessage(error));
    }
};
