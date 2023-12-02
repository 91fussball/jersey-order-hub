import {
    QueryKey,
    useQuery,
    UseQueryOptions,
    UseQueryResult,
} from 'react-query';

import { getOrders, OrderType } from '@/domains/orders/services/order.service';

import { ListResponse } from '@/shared/interfaces/http.interface';

export type UseOrderQueryType = {
    params: Record<string, any>;
    queryOpts?: Omit<
        UseQueryOptions<
            ListResponse<OrderType[]>,
            Error,
            ListResponse<OrderType[]>,
            QueryKey
        >,
        'queryKey' | 'queryFn'
    >;
};

export const useOrdersQuery = ({
    params,
    queryOpts,
}: UseOrderQueryType): UseQueryResult<ListResponse<OrderType[]>, Error> => {
    return useQuery(
        ['order-list', { ...params }],
        () => getOrders(params),
        queryOpts,
    );
};
