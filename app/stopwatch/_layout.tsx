import { Link, Stack } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";
import { Pressable } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Stopwatch App",

          headerRight: () => (
            <Link href={"/stopwatch/record"} asChild>
              <Pressable hitSlop={20}>
                <Octicons name="history" size={24} color={"black"} />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="record"
        options={{
          title: "Records",
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
};

export default Layout;
