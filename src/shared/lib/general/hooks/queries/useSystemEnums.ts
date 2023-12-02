import { useQuery, UseQueryOptions } from 'react-query';

import { SystemEnum } from '@/shared/lib/general/interfaces/system-enum.interface';
import { getSystemEnums } from '@/shared/lib/general/services/system-enum.service';

export const useGetSystemEnums = <T extends unknown>(
    options?: UseQueryOptions<SystemEnum, Error, T>,
) => {
    return useQuery<SystemEnum, Error, T>({
        queryKey: ['system-enums'],
        queryFn: getSystemEnums,
        ...options,
    });
};
