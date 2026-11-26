import { StyleSheet } from "react-native";
import theme from "./theme";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.large,
   
  },
colors:{
    primary:"#0F172A"
},
appContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  text: {
    color: "#",
    fontSize: 30
  },

  title: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.large,
    fontWeight: "bold",
  },
});

export default globalStyles;
