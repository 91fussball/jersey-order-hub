import { useMemo, useState } from 'react';

export const usePagination = (defaultPerPage = 10) => {
    const [perPage, setPerPage] = useState(defaultPerPage);
    const [page, setPage] = useState(1);

    return useMemo(
        () => ({
            page,
            limit: perPage,
            perPage,
            setPage,
            setPerPage,
            skip: (page - 1) * perPage,
        }),
        [perPage, page],
    );
};
