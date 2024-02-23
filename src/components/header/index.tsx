import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Gravatar from "@krosben/react-native-gravatar";

type HeaderPropsTypes = {
  email: string;
  name: string;
};
export const Header = ({ name, email }: HeaderPropsTypes) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#121212", fontSize: 22, fontWeight: "400" }}>
          News App
        </Text>
        <Gravatar email={email} style={styles.roundedProfileImage} />
      </View>
      <View style={{ marginRight: "30%", marginTop: 30 }}>
        <Text
          style={{
            color: "#616161",
            fontSize: 18,
            fontWeight: "400",
          }}
        >
          Hey, {name}
        </Text>
        <Text
          style={{
            fontSize: 36,
            fontWeight: "700",
            marginTop: 10,
            marginBottom: 50,
          }}
        >
          Find the Latest Updates
        </Text>
      </View>

      <Text style={{ fontSize: 22, fontWeight: "700", marginLeft: 20 }}>
        Feature Stories
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  roundedProfileImage: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#616161",
    borderRadius: 30,
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 16,
  },
});
