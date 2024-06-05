import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full relative h-16 px-4 bg-black-100 flex-row rounded-2xl border focus:border-secondary items-center">
        <TextInput
          className="flex-1 h-full text-white font-psemibold"
          placeholder={placeholder}
          value={value}
          placeholderTextColor={"#7b7b8b"}
          onChange={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword((prev) => !prev)}
            className=""
          >
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
