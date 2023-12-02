export type BloodTypeUnion = 'a' | 'b' | 'ab' | 'o';
export type GenderTypeUnion = 'male' | 'female';
export type SalaryCalculationTypeUnion = 'fixed_rate' | 'prorate' | 'daily';
export type BankKycStatusUnion =
    | 'waiting_to_process'
    | 'pending'
    | 'success'
    | 'not_found'
    | 'not_match'
    | 'verified'
    | 'unverified'
    | 'active'
    | 'inactive';
export type MaritalStatusTypeUnion =
    | 'never_married'
    | 'married'
    | 'divorced'
    | 'widowed';
export type ReligionTypeUnion =
    | 'islam'
    | 'protestantism'
    | 'catholicism'
    | 'hinduism'
    | 'buddhism'
    | 'confucianism'
    | 'other';

export type BaseOption = {
    label: string;
    value: string;
    disabled?: boolean;
};

export interface BaseOptionGroup {
    group: string;
    items: BaseOption[];
}

export type BaseOptions = BaseOption[] | BaseOptionGroup[];

export type OptionOrGroup<T extends 'single' | 'multiple'> = T extends 'single'
    ? BaseOption
    : BaseOptionGroup;
