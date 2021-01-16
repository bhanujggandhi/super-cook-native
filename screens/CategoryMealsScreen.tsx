import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import { CATEGORIES } from "../data/dummy-data";

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

CategoryMealScreen.navigationOptions = (navigationData: any) => {
  const catId: string = navigationData.navigation.navigationOptions.getParam(
    "categoryId"
  );
  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectCategory ? selectCategory?.title : "",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
