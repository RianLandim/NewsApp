import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import styles from "./style";

export default function Home() {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View>
          <Text>Teste</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
