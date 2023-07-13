/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Rectangle5OverridesProps = {
    Rectangle5?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    stock_number_input4654?: PrimitiveOverrideProps<ViewProps>;
    stock_number_input4655?: PrimitiveOverrideProps<ViewProps>;
    "\u9069\u6B63\u5728\u5EAB\u6570"?: PrimitiveOverrideProps<TextProps>;
    "\u5728\u5EAB\u6570\u5165\u529B"?: PrimitiveOverrideProps<TextProps>;
    "\u54C1\u756A"?: PrimitiveOverrideProps<TextProps>;
    "\u623B\u308B"?: PrimitiveOverrideProps<TextProps>;
    stock_number_input4648?: PrimitiveOverrideProps<ViewProps>;
    stock_number_input4649?: PrimitiveOverrideProps<ViewProps>;
    stock_number_input11710?: PrimitiveOverrideProps<ViewProps>;
    stock_input?: PrimitiveOverrideProps<ViewProps>;
    part_number_input?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Rectangle5Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Rectangle5OverridesProps | undefined | null;
}>;
export default function Rectangle5(props: Rectangle5Props): React.ReactElement;
