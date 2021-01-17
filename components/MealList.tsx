import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ listData, navigation }) => {
  const renderMealItem = (itemData: any) => (
    <MealItem
      title={itemData.item.title}
      onSelectMeal={() => {
        navigation.navigate({
          routeName: "MealDetail",
          params: {
            mealId: itemData.item.id,
          },
        });
      }}
      duration={itemData.item.duration}
      affordablity={itemData.item.affordablity}
      complexity={itemData.item.complexity}
      image={itemData.item.imageUrl}
    />
  );

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
