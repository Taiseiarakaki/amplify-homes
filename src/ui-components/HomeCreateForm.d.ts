/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HomeCreateFormInputValues = {
    image_url?: string;
    price?: number;
    untitledfield?: string;
    password?: string;
    number?: number;
    part_number?: string;
    inventory?: number;
    stock_input?: string;
    stock_number_input?: number;
};
export declare type HomeCreateFormValidationValues = {
    image_url?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    untitledfield?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    number?: ValidationFunction<number>;
    part_number?: ValidationFunction<string>;
    inventory?: ValidationFunction<number>;
    stock_input?: ValidationFunction<string>;
    stock_number_input?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeCreateFormOverridesProps = {
    HomeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    untitledfield?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
    part_number?: PrimitiveOverrideProps<TextFieldProps>;
    inventory?: PrimitiveOverrideProps<TextFieldProps>;
    stock_input?: PrimitiveOverrideProps<TextFieldProps>;
    stock_number_input?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HomeCreateFormProps = React.PropsWithChildren<{
    overrides?: HomeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HomeCreateFormInputValues) => HomeCreateFormInputValues;
    onSuccess?: (fields: HomeCreateFormInputValues) => void;
    onError?: (fields: HomeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomeCreateFormInputValues) => HomeCreateFormInputValues;
    onValidate?: HomeCreateFormValidationValues;
} & React.CSSProperties>;
export default function HomeCreateForm(props: HomeCreateFormProps): React.ReactElement;
