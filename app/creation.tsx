import { StyleSheet, Text, View } from "react-native";

const Creation = () => {
  return (
    <View style={style.container}>
      <Text>Creation</Text>
    </View>
  );
};

export default Creation;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
