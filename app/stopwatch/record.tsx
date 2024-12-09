import { StyleSheet, Text, View } from "react-native";

const Records = () => {
  return (
    <View style={style.container}>
      <Text>Records</Text>
    </View>
  );
};

export default Records;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
