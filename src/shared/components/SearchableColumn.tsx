import React, { useState } from 'react';

import { SearchOutline } from 'react-ionicons';

import { Box } from '@/shared/components/displays/Box';
import { TextInput } from '@/shared/components/inputs/TextInput';
import { HStack } from '@/shared/components/layouts/HStack';
import { Popover } from '@/shared/components/overlays/Popover';
import { Typography } from '@/shared/components/typography/Typography';
import { useDebounce } from '@/shared/hooks//useDebounce';
import { useUpdateEffect } from '@/shared/hooks//useUpdateEffect';

export type SearchableColumnProps = {
    onChange: (value: string) => void;
    title: string;
};

const SearchableColumn = ({ onChange, title }: SearchableColumnProps) => {
    const [keyword, setKeyword] = useState<string>('');
    const debouncedKeyword = useDebounce(keyword, 500);

    useUpdateEffect(() => {
        onChange(debouncedKeyword);
    }, [debouncedKeyword]);

    return (
        <HStack justify="space-between" align="center">
            <Typography fontWeight="bold">{title}</Typography>

            <Popover
                withArrow
                position="bottom-end"
                content={
                    <Box>
                        <TextInput
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder={`Search ${title.toLowerCase()}`}
                            value={keyword}
                        />
                    </Box>
                }
            >
                <div>
                    <SearchOutline />
                </div>
            </Popover>
        </HStack>
    );
};

export default SearchableColumn;
