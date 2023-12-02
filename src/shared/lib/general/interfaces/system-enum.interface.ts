export interface SystemEnumOption {
    label: {
        en: string;
        id: string;
    };
    value: any;
}

export type SystemEnumLang = keyof SystemEnumOption['label'];

interface Option<T extends unknown> {
    label: string;
    value: T;
}

export interface SystemEnum {
    [key: string]: SystemEnumOption[];
}

export interface EnumOptions<T extends unknown = unknown> {
    [key: string]: Option<T>[];
}
