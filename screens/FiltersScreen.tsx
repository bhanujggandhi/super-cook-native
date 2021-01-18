import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackProp } from "react-navigation-stack";

import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

type Props = {
  label: string;
  state: boolean;
  onChange: (newValue: boolean) => void;
};

const FilterSwitch = ({ label, state, onChange }: Props) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      value={state}
      onValueChange={onChange}
      trackColor={{ true: Colors.primaryColor, false: "" }}
      thumbColor={Platform.OS === "android" ? Colors.primaryColor : undefined}
    />
  </View>
);

type ScreenProps = {
  navigation: NavigationStackProp;
};

const FiltersScreen = ({ navigation }: ScreenProps) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    console.log(appliedFilters);
  }, [isVegetarian, isVegan, isGlutenFree, isLactoseFree]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/Restriction</Text>
      <FilterSwitch
        label='Gluten Free'
        state={isGlutenFree}
        onChange={(newValue: boolean) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose Free'
        state={isLactoseFree}
        onChange={(newValue: boolean) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={(newValue: boolean) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegetarian'
        state={isVegetarian}
        onChange={(newValue: boolean) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Save'
          iconName='ios-save'
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
