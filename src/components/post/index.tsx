import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

type CardPropsTypes = {
  imageURL: string;
  title: string;
};

export const PostCard = ({ imageURL, title }: CardPropsTypes) => {
  return (
    <TouchableOpacity>
      <View
        style={{ flexDirection: "row", marginTop: 24, alignItems: "center" }}
      >
        <Image
          resizeMode="cover"
          source={{ uri: imageURL }}
          style={{ width: 110, height: 90, borderRadius: 4 }}
        />
        <View style={{ flexDirection: "column", marginHorizontal: 18 }}>
          <Text style={{ fontSize: 18, width: 210 }} numberOfLines={2}>
            {title}...
          </Text>
          <View>
            <Text style={{ fontSize: 15, marginTop: 8 }}>
              Read this article
            </Text>
            <View style={{ borderWidth: 1, width: 60, marginTop: 4 }} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
