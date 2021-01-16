import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

interface CategoryScreenProps {
  navigation: NavigationStackProp<any, any>;
}

const CategoriesScreen = ({ navigation }: CategoryScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title='hii'
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
