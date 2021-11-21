import React from 'react';
import {Dimensions, Image, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Deliveries from '../screens/Deliveries';
import Cart from '../screens/Cart';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('screen');

const IconW = width * 0.07;
const IconH = IconW * 1;

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#eee',
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25
        } 
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: IconW,
                height: IconH,
                tintColor: focused ? '#e76316' : '#999',
              }}
              source={require('../assets/home_icon-icons.com_73532.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Deliveries"
        component={Deliveries}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: IconW,
                height: IconH,
                tintColor: focused ? '#e76316' : '#999',
              }}
              source={require('../assets/big-cargo-truck_icon-icons.com_68588.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                position: 'absolute',
                bottom: height * 0.02,
                backgroundColor: '#eee',
                borderColor: '#fff',
                borderWidth: 5,
                padding: 20,
                borderRadius: 50,
              }}>
              <Image
                style={{
                  width: IconW,
                  height: IconH,
                  tintColor: focused ? '#e76316' : '#999',
                }}
                source={require('../assets/shopping-cart_icon-icons.com_72552.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: IconW,
                height: IconH,
                tintColor: focused ? '#e76316' : '#999',
              }}
              source={require('../assets/alert_bell_notification_ring_snooze_icon_123801.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: IconW,
                height: IconH,
                tintColor: focused ? '#e76316' : '#999',
              }}
              source={require('../assets/user_84308.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
