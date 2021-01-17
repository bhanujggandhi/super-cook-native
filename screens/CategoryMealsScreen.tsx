import React from "react";
import { NavigationStackProp } from "react-navigation-stack";

import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

interface CategoryMealsScreenProps {
  navigation: NavigationStackProp<any, any>;
}

const CategoryMealScreen = ({ navigation }: CategoryMealsScreenProps) => {
  const catId: string = navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData: any) => {
  const catId: string = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    title: selectedCategory?.title,
  };
};

export default CategoryMealScreen;
