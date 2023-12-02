import { getRequest, parseErrorMessage } from '@/shared/lib/http';

import { SystemEnum } from '../interfaces/system-enum.interface';

export const getSystemEnums = async (): Promise<SystemEnum> => {
    try {
        const response = await getRequest({
            url: '/v1/general/system-enums',
        });

        return response;
    } catch (error) {
        throw new Error(parseErrorMessage(error));
    }
};
