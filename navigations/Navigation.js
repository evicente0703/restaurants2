import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantStack from './TopRestaurantStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOption = (route, color) => {
    let iconName
    switch (route.name) {
        case "restaurants":
            iconName = "compass-outline"
            break;
        case "favorites":
            iconName = "heart-outline"
            break;
        case "toprestaurants":
            iconName = "star-outline"
            break;
        case "search":
            iconName = "magnify"
            break;
        case "account":
            iconName = "home-outline"
            break;
    }
    return(
        <Icon
            type="material-community"
            name={iconName}
            size={22}
            color={color}
        />
    )
}


    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="restaurants"
                tabBarOptions={{ 
                    inactiveTintColor: "#a17bc3",
                    initialRouteName: "#442484"
                 }}
                 screenOptions={({ route }) => ({ 
                     tabBarIcon: ({ color }) => screenOption (route, color)
                  })}
            >
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{title:"Restaurantes"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{title:"Favoritos"}}
                />
                <Tab.Screen
                    name="toprestaurants"
                    component={TopRestaurantStack}
                    options={{title:"Top 5"}}
                />
                <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{title:"Buscar"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{title:"Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
