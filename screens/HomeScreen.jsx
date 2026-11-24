import {
  ScrollView,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
  Pressable,
  TextInput,
  Switch,
  Image,
  ImageBackground,
  FlatList,
  SectionList,
  ActivityIndicator,
  Modal,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
} from "react-native";
import { useEffect,useState } from "react";

export default function HomeScreen() {
  const [enabled, setEnabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const items = [
    { id: "1", name: "Apple" },
    { id: "2", name: "Banana" },
    { id: "3", name: "Orange" },
  ];

  const sections = [
    { title: "Fruits", data: ["Apple", "Banana"] },
    { title: "Vegetables", data: ["Carrot", "Potato"] },
  ];
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView   style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >

      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
            <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
                setRefreshing(true);
                setTimeout(() => setRefreshing(false), 1000);
            }}
            />
        }
        >
        <Text style={styles.title}>Welcome 👋</Text>
        <Text style={styles.subtitle}>My first React Native app</Text>

        {/* Original Buttons */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Hello from React Native!")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <Button title="Press me" onPress={() => alert("Button pressed!")} />

        {/* Layout Components */}
        <Text style={styles.heading}>Layout Components</Text>

        <View style={styles.item}>
          <Text style={styles.name}>View</Text>
          <View style={styles.box} />
        </View>

        <View style={styles.item}>
          <Text style={styles.name}>ScrollView</Text>
          <Text>Scrollable content</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.name}>SafeAreaView</Text>
          <Text>Safe area container</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.name}>KeyboardAvoidingView</Text>
          <Text>Keyboard layout handler</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.name}>Modal</Text>
          <Button title="Open Modal" onPress={() => setModalVisible(true)} />
        </View>

        {/* Text Components */}
        <Text style={styles.heading}>Text Components</Text>

        <View style={styles.item}>
          <Text style={styles.name}>Text</Text>
          <Text>Hello World</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.name}>TextInput</Text>
          <TextInput placeholder="Enter your name" style={styles.input} />
        </View>

        {/* Interaction Components */}
        <Text style={styles.heading}>Interaction Components</Text>

        <View style={styles.item}>
          <Text style={styles.name}>Button</Text>
          <Button title="Click me" onPress={() => alert("Clicked!")} />
        </View>

        <View style={styles.item}>
          <Text style={styles.name}>Pressable</Text>
          <Pressable
            style={styles.smallButton}
            onPress={() => alert("Pressed!")}
          >
            <Text style={styles.buttonText}>Press me</Text>
          </Pressable>
        </View>

        <View style={styles.item}>
          <Text style={styles.name}>TouchableOpacity</Text>
          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.buttonText}>Touch me</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Text style={styles.name}>Switch</Text>
          <Switch value={enabled} onValueChange={setEnabled} />
        </View>

        {/* Image Components */}
        <Text style={styles.heading}>Image Components</Text>

        <View style={styles.item}>
          <Text style={styles.name}>Image</Text>
          <Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={styles.image}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.name}>ImageBackground</Text>
          <ImageBackground
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={styles.image}
          />
        </View>

        {/* List Components */}
        <Text style={styles.heading}>List Components</Text>

        <View style={styles.item}>
          <Text style={styles.name}>FlatList</Text>
          <FlatList
            data={items}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={styles.listItem}>{item.name}</Text>
            )}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.name}>SectionList</Text>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <Text style={styles.listItem}>{item}</Text>
            )}
            renderSectionHeader={({ section }) => (
              <Text style={styles.name}>{section.title}</Text>
            )}
          />
        </View>

        {/* Feedback Components */}
        <Text style={styles.heading}>Feedback Components</Text>

        <View style={styles.item}>
          <Text style={styles.name}>ActivityIndicator</Text>
          <ActivityIndicator size="large" color="#2563eb" />
        </View>

        <View style={styles.item}>
          <Text style={styles.name}>RefreshControl</Text>
          <Text>Pull down to refresh the screen</Text>
        </View>

        {/* System Components */}
        <Text style={styles.heading}>System Components</Text>

        <View style={styles.item}>
          <Text style={styles.name}>Platform</Text>
          <Text>{Platform.OS}</Text>
        </View>

        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.heading}>Modal Component</Text>
              <Text>This is a modal example!</Text>
              <Button
                title="Close Modal"
                onPress={() => setModalVisible(false)}
                />
            </View>
          </View>
        </Modal>
      </ScrollView>
</KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
},
content: {
      backgroundColor: "#000000",
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#505050",
  },
  subtitle: {
    fontSize: 16,
    color: "#2c6ecb",
    marginBottom: 16,
  },
  heading: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#1e293b",
    marginTop: 16,
  },
  item: {
    minHeight: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 12,
    gap: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  smallButton: {
    backgroundColor: "#2563eb",
    padding: 10,
    borderRadius: 8,
  },
  box: {
    width: 40,
    height: 30,
    backgroundColor: "#2563eb",
    borderRadius: 6,
  },
  input: {
    backgroundColor: "#f1f5f9",
    padding: 10,
    borderRadius: 8,
    width: 150,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  listItem: {
    padding: 8,
    color: "#2563eb",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 16,
    gap: 16,
    width: "85%",
  },
});
