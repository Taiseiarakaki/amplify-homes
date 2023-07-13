/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Home } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HomeUpdateFormInputValues = {
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
export declare type HomeUpdateFormValidationValues = {
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
export declare type HomeUpdateFormOverridesProps = {
    HomeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type HomeUpdateFormProps = React.PropsWithChildren<{
    overrides?: HomeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    home?: Home;
    onSubmit?: (fields: HomeUpdateFormInputValues) => HomeUpdateFormInputValues;
    onSuccess?: (fields: HomeUpdateFormInputValues) => void;
    onError?: (fields: HomeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomeUpdateFormInputValues) => HomeUpdateFormInputValues;
    onValidate?: HomeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HomeUpdateForm(props: HomeUpdateFormProps): React.ReactElement;
