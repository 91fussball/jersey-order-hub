import { useCallback, useEffect, useMemo, useState } from 'react';

import { useUpdateEffect } from '@/shared/hooks/useUpdateEffect';
import {
    generateFilterQueryString,
    SCIMFilterQuery,
} from '@/shared/utils/generate-filter-query';

type UseSCIMFilter = {
    defaultFilter?: SCIMFilterQuery[];
    onChange?: (stringify: string, raw: SCIMFilterQuery[]) => void;
};

type UpdateProps = {
    groupOperator?: string;
    name: string | string[];
    operator?: string;
    value?: string | string[] | null;
};

export const useSCIMFilter = ({
    defaultFilter = [],
    onChange,
}: UseSCIMFilter) => {
    const [filterState, setFilterState] = useState<SCIMFilterQuery[]>([]);

    useEffect(() => {
        if (Array.isArray(defaultFilter) && defaultFilter.length) {
            setFilterState(defaultFilter);
            return;
        }
    }, [defaultFilter]);

    const add = useCallback(
        (filter: SCIMFilterQuery) => {
            setFilterState([...filterState, filter]);
        },
        [filterState],
    );

    const getRaw = useCallback(
        (name: string) => {
            return filterState.find((filter) => filter.name === name);
        },
        [filterState],
    );

    const getValue = useCallback(
        (name: string) => {
            const raw = getRaw(name);

            return raw?.value || '';
        },
        [getRaw],
    );

    const remove = useCallback(
        (name: string) => {
            const newSCIMFilter = filterState.filter(
                (filter) => filter.name !== name,
            );

            setFilterState(newSCIMFilter);
        },
        [filterState],
    );

    const reset = () => {
        setFilterState([]);
    };

    const update = useCallback(
        ({ name, operator = 'eq', groupOperator, value }: UpdateProps) => {
            if (!value) {
                return remove(Array.isArray(name) ? name[0] : (name as string));
            }

            if (
                filterState.findIndex((filter) => filter.name === name) === -1
            ) {
                return add({
                    name,
                    value,
                    operator,
                    groupOperator,
                });
            }

            const newSCIMFilter = filterState.map((filter) => {
                if (filter.name === name) {
                    return {
                        ...filter,
                        value,
                    };
                }

                return filter;
            });

            setFilterState(newSCIMFilter);
        },
        [add, filterState, remove],
    );

    useUpdateEffect(() => {
        const stringify = generateFilterQueryString(filterState);

        onChange && onChange(stringify, filterState);
    }, [filterState]);

    return useMemo(() => {
        return {
            add,
            filterState,
            getRaw,
            getValue,
            remove,
            reset,
            update,
        };
    }, [filterState, update, add, remove, getRaw, getValue]);
};
