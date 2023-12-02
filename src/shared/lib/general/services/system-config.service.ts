import { getRequest, parseErrorMessage } from '@/shared/lib/http';

import { SystemConfig } from '../interfaces/system-config.interface';

export const getSystemConfig = async (): Promise<SystemConfig> => {
    try {
        const response = await getRequest({
            url: 'v1/general/system-config',
        });

        return response.data;
    } catch (error) {
        throw new Error(parseErrorMessage(error));
    }
};
