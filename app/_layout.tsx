import { Stack } from "expo-router";

import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

// const Layout = () => {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ title: "Todo App" }} />
//       <Stack.Screen
//         name="stopwatch"
//         options={{ title: "StopWatch App", headerShown: false }}
//       />
//       <Stack.Screen
//         name="creation"
//         options={{
//           title: "Student App",
//           presentation: "modal",
//           animation: "slide_from_bottom",
//         }}
//       />
//     </Stack>
//   );
// };

// export default Layout;

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: "#0B192C",
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todo App",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stopwatch"
        options={{
          title: "StopWatch App",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clockcircleo" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="creation"
        options={{
          title: "Create",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="addfolder" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
