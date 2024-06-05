import { View, Text, FlatList } from "react-native";
import React from "react";

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(itm) => itm.id}
      renderItem={({ item }) => (
        <Text className="ext-3xl text-white">{JSON.stringify(item.id)}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
