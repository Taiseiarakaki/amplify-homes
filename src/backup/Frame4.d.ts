/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame4OverridesProps = {
    Frame4?: PrimitiveOverrideProps<ViewProps>;
    "Frame 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    stock_input_button?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "\u5728\u5EAB\u78BA\u8A8D"?: PrimitiveOverrideProps<TextProps>;
    stock_confirm_button?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<IconProps>;
    "\u5728\u5EAB\u5165\u529B"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame4OverridesProps | undefined | null;
}>;
export default function Frame4(props: Frame4Props): React.ReactElement;
