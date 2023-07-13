/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame3OverridesProps = {
    Frame3?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "mdi:gas-tank-outline"?: PrimitiveOverrideProps<ViewProps>;
    "mdi:gas-tank"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<IconProps>;
    Vector161?: PrimitiveOverrideProps<IconProps>;
    Vector162?: PrimitiveOverrideProps<IconProps>;
    part_number4643?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24644"?: PrimitiveOverrideProps<ViewProps>;
    "\u54C1\u756A"?: PrimitiveOverrideProps<TextProps>;
    "\u5728\u5EAB\u6570"?: PrimitiveOverrideProps<TextProps>;
    "\u623B\u308B"?: PrimitiveOverrideProps<TextProps>;
    inventory?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24638"?: PrimitiveOverrideProps<ViewProps>;
    part_number4641?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24642"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Frame3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame3OverridesProps | undefined | null;
}>;
export default function Frame3(props: Frame3Props): React.ReactElement;
