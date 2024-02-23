import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FeedScreen } from "./screens/feed";

export type MainStackParamsList = {
  Feed: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamsList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerBackButtonMenuEnabled: false,
          headerShadowVisible: false,
          headerBackVisible: false,
          contentStyle: {
            backgroundColor: "#FFFF",
          },
        }}
      >
        <MainStack.Screen
          name="Feed"
          component={FeedScreen}
          options={{ title: "Feed", headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
