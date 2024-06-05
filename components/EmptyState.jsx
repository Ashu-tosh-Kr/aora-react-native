import { View, Text, Image } from "react-native";
import React from "react";
import images from "../constants/images";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="px-4 justify-center items-center">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-white text-xl font-psemibold text-center mt-2">
        {title}
      </Text>
      <Text className="text-gray-100 text-sm font-pmedium">{subtitle}</Text>
      <CustomButton
        containerStyles="my-5 w-full"
        title={"Create Video"}
        handlePress={() => router.push("/create")}
      />
    </View>
  );
};

export default EmptyState;
