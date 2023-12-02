export interface SCIMFilterQuery {
    name: string | string[];
    operator: string | string[];
    value: string | string[];
    groupOperator?: string;
}

export function generateFilterQueryString(
    filterQueries: SCIMFilterQuery[],
): string {
    let filterQueryString = '';

    filterQueries.forEach((filterQuery, index) => {
        if (index > 0) {
            filterQueryString += ' and ';
        }

        if (filterQuery.groupOperator !== undefined) {
            let filterGroup = '';

            if (Array.isArray(filterQuery.name)) {
                filterQuery.name.forEach((name, indexName) => {
                    filterGroup += '(';
                    (filterQuery.value as string[]).forEach(
                        (value, indexValue) => {
                            filterGroup += `${name} ${filterQuery.operator[indexName]} "${value}"`;

                            if (indexValue + 1 < filterQuery.value.length) {
                                filterGroup += ` ${filterQuery.groupOperator} `;
                            }
                        },
                    );

                    if (indexName + 1 < filterQuery.name.length) {
                        filterGroup += ' or ';
                    }

                    filterGroup += ')';
                });
            } else {
                filterGroup += '(';
                (filterQuery.value as string[]).forEach((value, i) => {
                    filterGroup += `${filterQuery.name} ${filterQuery.operator[i]} "${value}"`;

                    if (i + 1 < filterQuery.value.length) {
                        filterGroup += ` ${filterQuery.groupOperator} `;
                    }
                });
                filterGroup += ')';
            }
            filterQueryString += filterGroup;
        } else {
            filterQueryString += `${filterQuery.name} ${filterQuery.operator} "${filterQuery.value}"`;
        }
    });

    return filterQueryString;
}
