import {
  View,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  return (
    <View className="space-x-4 w-full relative h-16 px-4 bg-black-100 flex-row rounded-2xl border focus:border-secondary items-center">
      <TextInput
        className="text-base text-white flex-1 font-pregular my-auto"
        placeholder={"Search for a video"}
        value={query}
        placeholderTextColor={"#CDCDE0"}
        onChangeText={(e) => setQuery(e)}
        {...props}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query)
            Alert.alert("Missing Query", "Please enter a search query");
          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
