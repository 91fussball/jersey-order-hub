import React, { useState } from 'react';

import { CaretDownOutline } from 'react-ionicons';

import { Box } from '@/shared/components/displays/Box';
import { SelectInput } from '@/shared/components/inputs/SelectInput';
import { HStack } from '@/shared/components/layouts/HStack';
import { Popover } from '@/shared/components/overlays/Popover';
import { Typography } from '@/shared/components/typography/Typography';
import { useUpdateEffect } from '@/shared/hooks//useUpdateEffect';

export type FilterableColumnProps = {
    onChange: (value: string) => void;
    title: string;
    options: { label: string; value: string }[];
};

const FilterableColumn = ({
    onChange,
    options,
    title,
}: FilterableColumnProps) => {
    const [selectedOpts, setSelectedOpts] = useState<string>('');

    useUpdateEffect(() => {
        onChange(selectedOpts);
    }, [selectedOpts]);

    return (
        <HStack justify="space-between" align="center">
            <Typography fontWeight="bold">{title}</Typography>

            <Popover
                withArrow
                position="bottom-end"
                content={
                    <Box>
                        <SelectInput
                            onChange={(val) => setSelectedOpts(val)}
                            value={selectedOpts}
                            options={options}
                            placeholder={`Pilih ${title.toLowerCase()}`}
                        />
                    </Box>
                }
            >
                <div>
                    <CaretDownOutline />
                </div>
            </Popover>
        </HStack>
    );
};

export default FilterableColumn;
