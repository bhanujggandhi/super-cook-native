import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

interface CategoryMealsScreenProps {
  navigation: NavigationStackProp<any, any>;
}

const CategoryMealScreen = ({ navigation }: CategoryMealsScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Screen!</Text>
      <Button
        title='Go to details'
        onPress={() => {
          navigation.navigate("MealDetail");
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

export default CategoryMealScreen;
