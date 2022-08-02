import React from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Icons = ({name, size, color}) => {
  return <Icon name={`${Platform.OS}-${name}`} size={size} color={color} />;
};

export default Icons;
