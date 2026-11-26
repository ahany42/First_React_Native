import { Text, View, StyleSheet } from "react-native";
import globalStyles from "../../styles/global";
import theme from "../../styles/theme";
import { Ionicons } from "@expo/vector-icons";
import {useState} from "react";
import ButtonStack from "./ButtonStack"
const Banner = () => {
  const [selectedUnit,setSelectedUnit]=useState("C");
  return (
      <View style={styles.banner}>
        <View>
          <ButtonStack options={["C","F"]} selected={selectedUnit} onSelect={setSelectedUnit}/>
          </View>
        <View style={styles.weather}>
          <Ionicons name="sunny" size={60} color="orange" />
          <Text style={styles.sunny}>Sunny</Text>
        </View>

        <View style={styles.temperature}>
          <Text style={styles.temperatureText}>29 {selectedUnit}</Text>
          <Text style={styles.degree}>°</Text>
        </View>
          <Text>High 32° Low 19°</Text>
      
      </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    marginBottom:theme.spacing.small,
    backgroundColor:theme.colors.primary,
    padding:globalStyles.container.padding,
  },

  weather: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  sunny: {
    ...globalStyles.title,
  },

  temperature: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  temperatureText: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.temperature,
  },

  degree: {
    color: theme.colors.text,
    fontSize: 50,
    marginTop: 5,
  },
});

export default Banner;