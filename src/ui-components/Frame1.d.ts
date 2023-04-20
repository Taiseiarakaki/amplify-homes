/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Home } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1OverridesProps = {
    Frame1?: PrimitiveOverrideProps<ViewProps>;
    "onepiece11_arlong 1"?: PrimitiveOverrideProps<ImageProps>;
    "\u8A95\u751F\u65E524"?: PrimitiveOverrideProps<TextProps>;
    "\u540D\u524D25"?: PrimitiveOverrideProps<TextProps>;
    "\u61F8\u8CDE\u91D126"?: PrimitiveOverrideProps<TextProps>;
    "\u540D\u524D68"?: PrimitiveOverrideProps<TextProps>;
    "\u61F8\u8CDE\u91D169"?: PrimitiveOverrideProps<TextProps>;
    "\u8A95\u751F\u65E5611"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame1Props = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: Frame1OverridesProps | undefined | null;
}>;
export default function Frame1(props: Frame1Props): React.ReactElement;
