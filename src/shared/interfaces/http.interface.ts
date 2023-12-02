import { QueryKey, UseQueryOptions } from 'react-query';

export type BasicParams = {
    filter?: string;
    limit?: number;
    q?: string;
    skip?: number;
};

export type ListResponse<T> = {
    data: T;
    limit: null | number;
    offset: number;
    total: number;
};

export type ErrorWithResponseKey = {
    status: string;
    error: string;
    [key: string]: any;
};

export type BasicErrorResponse = {
    details: {
        loc: string[];
        msg: string;
        type: string;
    };
};
