import { useCallback } from 'react';

import {
    Control,
    Controller,
    ControllerFieldState,
    ControllerRenderProps,
    FieldPath,
    FieldValues,
    FormProvider,
    Resolver,
    DefaultValues as RHFDefaultValues,
    SubmitErrorHandler as RHFSubmitErrorHandler,
    SubmitHandler as RHFSubmitHandler,
    useForm,
    useFormContext,
    UseFormStateReturn,
} from 'react-hook-form';
import { Schema } from 'yup';

export type SubmitHandler<T extends FieldValues> = RHFSubmitHandler<T>;
export type SubmitErrorHandler<T extends FieldValues> =
    RHFSubmitErrorHandler<T>;

export type RevalidateMode = 'onBlur' | 'onChange' | 'onSubmit' | undefined;

type AsyncDefaultValues<TFieldValues> = (
    payload?: unknown,
) => Promise<TFieldValues>;

export type DefaultValues<T = unknown> =
    | AsyncDefaultValues<T>
    | RHFDefaultValues<T>
    | undefined;

export type UseFormAdapter<FormValue extends FieldValues> = {
    reValidateMode?: RevalidateMode;
    defaultValues?: DefaultValues<FormValue>;
    shouldFocusError?: boolean;
    resolver?: Resolver<FormValue>;
    mode?: 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | undefined;
};

export type RenderProps<T extends FieldValues, N extends FieldPath<T>> = {
    field: ControllerRenderProps<T, N> & { error?: string };
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<T>;
};

export type WrapWithControllerProps<
    T extends FieldValues,
    N extends FieldPath<T>,
> = {
    control: Control<T>;
    name: N;
    render: (props: RenderProps<T, N>) => JSX.Element;
};

export const useFormAdapter = <FormValue extends FieldValues>({
    reValidateMode = 'onSubmit',
    defaultValues,
    shouldFocusError,
    resolver,
    mode,
}: UseFormAdapter<FormValue>) => {
    const form = useForm<FormValue>({
        reValidateMode,
        shouldFocusError,
        defaultValues,
        resolver,
        mode,
    });
    const { formState, watch } = form;
    const { isLoading, isSubmitting, isValid } = formState;

    const wrapWithController = <T extends FieldValues, N extends FieldPath<T>>({
        control,
        name,
        render,
    }: WrapWithControllerProps<T, N>) => {
        return (
            <Controller
                control={control}
                name={name}
                render={(args) => {
                    const { error } = args.fieldState;

                    return render({
                        ...args,
                        field: { ...args.field, error: error?.message },
                    });
                }}
            />
        );
    };

    return {
        FormProvider,
        useFormContext,
        wrapWithController,
        form: {
            isLoading,
            isSubmitting,
            isValid,
            values: watch,
            ...form,
        },
    };
};

export const useYupResolver = (validationSchema: Schema) =>
    useCallback(
        async (data: any) => {
            try {
                const values = await validationSchema.validate(data, {
                    abortEarly: false,
                });

                return {
                    values,
                    errors: {},
                };
            } catch (errors: any) {
                return {
                    values: {},
                    errors: errors.inner.reduce(
                        (allErrors: any, currentError: any) => ({
                            ...allErrors,
                            [currentError.path]: {
                                type: currentError.type ?? 'validation',
                                message: currentError.message,
                            },
                        }),
                        {},
                    ),
                };
            }
        },
        [validationSchema],
    );
