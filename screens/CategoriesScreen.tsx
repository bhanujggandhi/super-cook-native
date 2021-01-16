import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

interface CategoriesScreenProps {
  navigation: NavigationStackProp<any, any>;
}

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title='Go to meals'
        onPress={() => {
          navigation.navigate("CategoryMeals");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
