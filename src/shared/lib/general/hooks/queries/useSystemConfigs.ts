import { useQuery, UseQueryOptions } from 'react-query';

import { SystemConfig } from '@/shared/lib/general/interfaces/system-config.interface';
import { getSystemConfig } from '@/shared/lib/general/services/system-config.service';

export const useSystemConfig = <T extends unknown>(
    options?: UseQueryOptions<SystemConfig, Error, T>,
) =>
    useQuery({
        queryKey: ['system-config'],
        queryFn: getSystemConfig,
        ...options,
    });
