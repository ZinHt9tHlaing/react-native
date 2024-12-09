import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const StopWatch = () => {
  const router = useRouter();

  const goToOwnApp = () => {
    console.log("Let go to own app");
    router.navigate("/creation");
  };

  return (
    <View style={style.container}>
      <Text>StopWatch</Text>
      <TouchableOpacity onPress={goToOwnApp}>
        <Text>Go to own app</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StopWatch;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
