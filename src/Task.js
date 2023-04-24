import { Text, View } from "react-native";

const Task = ({ text }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <View
          style={{
            width: 24,
            height: 24,
            backgroundColor: "#55BCF6",
            opacity: 0.4,
            borderRadius: 5,
            marginRight: 15,
          }}
        ></View>
        <Text
          style={{
            maxWidth: "80%",
            color: "#000",
          }}
        >{text}</Text>
      </View>
      <View
        style={{
          width: 12,
          height: 12,
          borderColor: "#55BCF6",
          borderWidth: 2,
          borderRadius: 5,
        }}
      ></View>
    </View>
  );
};


export default Task;
