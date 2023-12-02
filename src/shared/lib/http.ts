import axios, { AxiosRequestConfig } from 'axios';

type BaseRequestArgs = {
    url: string;
    config?: AxiosRequestConfig;
};

type GetRequestArgs = {
    params?: Record<string, any>;
} & BaseRequestArgs;

type PostRequestArgs = {
    data?: Record<string, any>;
} & BaseRequestArgs;

type PutRequestArgs = {
    data?: Record<string, any>;
} & BaseRequestArgs;

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    timeout: 10000,
    timeoutErrorMessage: 'Request timed out',
    headers: {
        'Content-type': 'application/json',
    },
});

http.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && [401, 403].includes(error.response.status)) {
            window.location.href = '/auth/signin';
        }

        return Promise.reject(error);
    },
);

export const deleteRequest = async ({ url, data, config }: PostRequestArgs) => {
    try {
        const response = await http.delete(url, {
            data,
            ...config,
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRequest = async ({ url, params, config }: GetRequestArgs) => {
    try {
        const response = await http.get(url, {
            params,
            ...config,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const parseErrorMessage = (error: any): string => {
    const message =
        typeof error?.response?.data?.message === 'string'
            ? error?.response?.data?.message
            : typeof error?.response?.data?.detail === 'string'
            ? error?.response?.data?.detail
            : error?.response?.data?.detail.find((item: any) => item.msg)
                  ?.msg ?? error.message;

    return message;
};

export const postRequest = async ({ url, data, config }: PostRequestArgs) => {
    try {
        const response = await http.post(url, data, {
            ...config,
        });
        return response.data;
    } catch (error: any) {
        throw error;
    }
};

export const putRequest = async ({ url, data, config }: PutRequestArgs) => {
    try {
        const response = await http.put(url, data, {
            ...config,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default http;
