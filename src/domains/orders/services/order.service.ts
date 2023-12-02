import { BasicParams, ListResponse } from '@/shared/interfaces/http.interface';
import { getRequest, parseErrorMessage } from '@/shared/lib/http';

export type OrderType = {};

export const getClientRoles = async (
    params: BasicParams,
): Promise<ListResponse<OrderType[]>> => {
    try {
        return await getRequest({
            url: `/v1/client/roles`,
            params,
        });
    } catch (error: any) {
        throw new Error(parseErrorMessage(error));
    }
};
