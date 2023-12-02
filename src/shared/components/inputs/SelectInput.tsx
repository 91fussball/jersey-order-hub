import { useState } from 'react';

import {
    CheckIcon,
    Combobox,
    Input,
    InputBase,
    ScrollArea,
    useCombobox,
} from '@mantine/core';
import { SearchOutline } from 'react-ionicons';

import { HStack } from '@/shared/components/layouts/HStack';
import { useUpdateEffect } from '@/shared/hooks/useUpdateEffect';
import { OptionOrGroup } from '@/shared/interfaces/shared.interface';

interface SelectInputProps {
    closeOnSelect?: boolean;
    description?: string;
    label?: string;
    notFoundText?: (search: string) => React.ReactNode;
    onChange(value: string): void;
    options?: OptionOrGroup<'single'>[];
    placeholder?: string;
    searchPlaceholder?: string;
    value: string;
}

export const SelectInput = ({
    closeOnSelect = true,
    description,
    label,
    notFoundText,
    onChange,
    options = [],
    placeholder,
    searchPlaceholder = 'Search...',
    value,
}: SelectInputProps) => {
    const combobox = useCombobox();

    const [search, setSearch] = useState('');
    const [valueState, setValueState] = useState(value);

    const mappedOptions = options
        .filter((item) => {
            return (
                item.value
                    .toLowerCase()
                    .includes(search.toLowerCase().trim()) ||
                item.label.toLowerCase().includes(search.toLowerCase().trim())
            );
        })
        .map((item, index) => (
            <Combobox.Option
                key={index}
                onClick={() => combobox.selectOption(index)}
                value={item.value}
            >
                <HStack justify="space-between">
                    <span>{item.label}</span>
                    {item.value === valueState && <CheckIcon size={12} />}
                </HStack>
            </Combobox.Option>
        ));

    const selectedValue =
        options.find((item) => item.value === valueState)?.label || null;

    useUpdateEffect(() => {
        if (!onChange) return;
        onChange(valueState);
    }, [valueState, onChange]);

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={(optionValue) => {
                setValueState(optionValue);
                if (closeOnSelect) combobox.closeDropdown();

                combobox.updateSelectedOptionIndex();
            }}
        >
            <Combobox.Target>
                <InputBase
                    component="button"
                    description={description}
                    label={label}
                    onClick={() => combobox.toggleDropdown()}
                    pointer
                    rightSection={<Combobox.Chevron />}
                    size="lg"
                >
                    {selectedValue || (
                        <Input.Placeholder>
                            {placeholder || 'Pick Value..'}
                        </Input.Placeholder>
                    )}
                </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Search
                    onChange={(event) => setSearch(event.currentTarget.value)}
                    onFocus={() => combobox.openDropdown()}
                    placeholder={searchPlaceholder}
                    rightSection={<SearchOutline width="18px" />}
                    rightSectionPointerEvents="none"
                    value={search}
                    onKeyDown={(event) => {
                        if (event.nativeEvent.code === 'Escape') {
                            combobox.closeDropdown();
                        }
                    }}
                    rightSectionProps={{
                        style: {
                            zIndex: 1000,
                        },
                    }}
                />

                <Combobox.Options>
                    <ScrollArea.Autosize type="scroll" mah={200}>
                        {mappedOptions.length === 0 ? (
                            <Combobox.Empty>
                                {notFoundText
                                    ? notFoundText(search)
                                    : 'No options found'}
                            </Combobox.Empty>
                        ) : (
                            mappedOptions
                        )}
                    </ScrollArea.Autosize>
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};
