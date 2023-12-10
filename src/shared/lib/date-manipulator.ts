import dayjs, { Dayjs } from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import timezonePlugin from 'dayjs/plugin/timezone';
import utcPlugin from 'dayjs/plugin/utc';

dayjs.extend(customParseFormat);
dayjs.extend(timezonePlugin);
dayjs.extend(utcPlugin);
dayjs.extend(advancedFormat);

export const addDate = (
    date: Date | string | number,
    amount: number,
    unit: dayjs.ManipulateType,
): Date => {
    return dayjs(date).add(amount, unit).toDate();
};

export const endOfDate = (
    date: Date | string | number,
    unit: dayjs.OpUnitType,
): Date => {
    return dayjs(date).endOf(unit).toDate();
};

export const dateFormatter = (date: Date | string | number): Dayjs => {
    return dayjs(date);
};

export const dateFormatterWithFormat = (
    date: Date | string | number,
    format: string,
): string => {
    return dayjs(date).format(format);
};

export const dateFormatterWithTimezone = (
    date: Date | string | number,
    timezone: string,
): Dayjs => {
    return dayjs(date).tz(timezone);
};

export const dateFormatterWithTimezoneAndFormat = (
    date: Date | string | number,
    timezone: string,
    format: string,
): string => {
    return dayjs(date).tz(timezone).format(format);
};

export const diffDate = (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    unit: dayjs.OpUnitType,
): number => {
    return dayjs(date).diff(dateToCompare, unit);
};

export const getCurrentTimezone = (): string => {
    return dayjs.tz.guess();
};

export const isAfter = (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    unit: dayjs.OpUnitType,
): boolean => {
    return dayjs(date).isAfter(dateToCompare, unit);
};

export const isBefore = (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    unit: dayjs.OpUnitType,
): boolean => {
    return dayjs(date).isBefore(dateToCompare, unit);
};

export const isDateValid = (date: Date | string | number): boolean => {
    return dayjs(date).isValid();
};

export const isSame = (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    unit: dayjs.OpUnitType,
): boolean => {
    return dayjs(date).isSame(dateToCompare, unit);
};

export const parseISO = (date: string): Date => {
    return dayjs(date).toDate();
};

export const parseDateToString = (
    date: Date | string,
    format: string,
): string => {
    return dayjs(date).format(format);
};

export const parseDateToISO = (date: Date): string => {
    return dayjs(date).toISOString();
};

export const parseStringToDate = (date: string, format: string): Date => {
    return dayjs(date, format).toDate();
};

export const startOfDate = (
    date: Date | string | number,
    unit: dayjs.OpUnitType,
): Date => {
    return dayjs(date).startOf(unit).toDate();
};

export const subtractDate = (
    date: Date | string | number,
    amount: number,
    unit: dayjs.ManipulateType,
): Date => {
    return dayjs(date).subtract(amount, unit).toDate();
};
