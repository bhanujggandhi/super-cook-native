import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

interface CategoriesScreenProps {
  navigation: NavigationStackProp<any, any>;
}

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderGridItem = (itemData: any) => (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => {
        navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: itemData.item.id,
          },
        });
      }}
    />
  );

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

export default CategoriesScreen;
