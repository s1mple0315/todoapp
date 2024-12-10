import { Stack } from "expo-router";
import { Text, StyleSheet } from 'react-native';

export default function RootLayout() {
  return <Stack screenOptions={{ header: () => <Text style={styles.pageTitle}>React Native Speech to text</Text> }}/>;
}

const styles = StyleSheet.create({
    pageTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 10,
        marginBottom: 10
    }
})