import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import { CATEGORIES } from "../data/dummy-data";

interface CategoriesScreenProps {
  navigation: NavigationStackProp<any, any>;
}

const renderGridItem = (itemData: any) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
