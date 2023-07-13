/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Frame4(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1728px"
      height="1117px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Frame4")}
      {...rest}
    >
      <View
        width="1728px"
        height="1117px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 3")}
      >
        <View
          width="1728px"
          height="1117px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundImage="linear-gradient(0deg, rgba(9,30,58,1), rgba(47,128,237,1), rgba(45,158,224,1))"
          {...getOverrideProps(overrides, "Rectangle 4")}
        ></View>
        <View
          width="908.07px"
          height="245.14px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="32.25%"
          bottom="45.8%"
          left="23.65%"
          right="23.8%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "stock_input_button")}
        >
          <View
            width="908.07px"
            height="245.14px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "Rectangle 5")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="48px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="62.39999771118164px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="584.9px"
            height="117.24px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="38.26%"
            bottom="13.91%"
            left="17.94%"
            right="17.65%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="在庫確認"
            {...getOverrideProps(overrides, "\u5728\u5EAB\u78BA\u8A8D")}
          ></Text>
        </View>
        <View
          width="908.07px"
          height="245.14px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="70.8%"
          bottom="7.25%"
          left="23.65%"
          right="23.8%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "stock_confirm_button")}
        >
          <Icon
            width="908.07px"
            height="245.14px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 908.0679931640625,
              height: 245.14312744140625,
            }}
            paths={[
              {
                d: "M0 0L908.068 0L908.068 245.143L0 245.143L0 0Z",
                fill: "rgba(217,217,217,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Rectangle 6")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="48px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="62.39999771118164px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="632.98px"
            height="83.14px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="36.09%"
            bottom="30%"
            left="14.85%"
            right="15.44%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="在庫入力"
            {...getOverrideProps(overrides, "\u5728\u5EAB\u5165\u529B")}
          ></Text>
        </View>
      </View>
    </View>
  );
}
