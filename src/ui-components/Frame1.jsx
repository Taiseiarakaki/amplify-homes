/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="300px"
      height="500px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame1")}
      {...rest}
    >
      <Image
        width="146px"
        height="215px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="45px"
        left="68px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.image_url}
        {...getOverrideProps(overrides, "onepiece11_arlong 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="43.568180084228516px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="123px"
        height="52px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="304px"
        left="6px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="誕生日"
        {...getOverrideProps(overrides, "\u8A95\u751F\u65E524")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="43.568180084228516px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="87px"
        height="52px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="356px"
        left="24px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="名前"
        {...getOverrideProps(overrides, "\u540D\u524D25")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="43.568180084228516px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="125px"
        height="54px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="408px"
        left="15px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="懸賞金&#xA;"
        {...getOverrideProps(overrides, "\u61F8\u8CDE\u91D126")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="43.568180084228516px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="147px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="356px"
        left="140px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.name}
        {...getOverrideProps(overrides, "\u540D\u524D68")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="43.568180084228516px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="119px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="408px"
        left="127px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.bounty}
        {...getOverrideProps(overrides, "\u61F8\u8CDE\u91D169")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="43.568180084228516px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="150px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="301px"
        left="137px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.birthday}
        {...getOverrideProps(overrides, "\u8A95\u751F\u65E5611")}
      ></Text>
    </View>
  );
}
