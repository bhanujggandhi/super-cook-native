import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";

interface MealDetailsScreen {
  navigation: NavigationStackProp<any, any>;
}

const MealDetailsScreen = ({ navigation }: MealDetailsScreen) => {
  const mealId = navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  MEALS;
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
    </View>
  );
};

MealDetailsScreen.navigationOptions = (navigationData: any) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal?.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => {
            console.log("Fav");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailsScreen;
