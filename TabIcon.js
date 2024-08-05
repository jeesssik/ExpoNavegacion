
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const TabIcon = ({ route, color, size }) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = 'ios-home';
  } else if (route.name === 'More') {
    iconName = 'ios-list';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export default TabIcon;
