
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const tokens = {
  surface: "rgba(255,255,255,0.14)",
  surfaceSelected: "#ffffff",
  textMuted: "rgba(255,255,255,0.72)",
  textSelected: "#1c2a3d",
  line: "rgba(255,255,255,0.22)",
  fontSize: 14,
  radius: 999,
};

const ButtonStack = ({ options = [], selected, onSelect }) => {
  const [internal, setInternal] = useState(options[0]);

  // Parent controls selection if selected is provided
  const isControlled = selected !== undefined;
  const current = isControlled ? selected : internal;

  const handlePress = (option) => {
    if (!isControlled) {
      setInternal(option);
    }

    onSelect?.(option);
  };

  return (
    <View style={styles.container} accessibilityRole="radiogroup">
      {options.map((option) => {
        const isActive = option === current;

        return (
          <Pressable
            key={option}
            onPress={() => handlePress(option)}
            accessibilityRole="radio"
            accessibilityState={{ selected: isActive }}
            style={({ pressed }) => [
              styles.button,
              isActive && styles.buttonActive,
              pressed && !isActive && styles.buttonPressed,
            ]}
          >
            <Text
              style={[
                styles.text,
                isActive && styles.textActive,
              ]}
            >
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
  },

  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    borderRadius: tokens.radius,
    backgroundColor: "transparent",
  },

  buttonActive: {
    backgroundColor: tokens.surface,
  },

  buttonPressed: {
    backgroundColor: tokens.line,
  },

  text: {
    color: tokens.textMuted,
    fontSize: tokens.fontSize,
    fontWeight: "400",
  },

  textActive: {
    color: "#ffffff",
    fontWeight: "500",
  },
});

export default ButtonStack;
