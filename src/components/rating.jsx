import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mainColor } from '../common/colors';

export const Rating = ({number}) => {
const stars = [];
  
  for (let index = 0; index < 5; index++) {
    const starColor = index < number ? mainColor : undefined;

    stars.push(<Star key={index} color={starColor} />);
  }

  return <>{stars}</>;
};

export const Star = ({color}= {}) =>{
  return <MaterialCommunityIcons name="star-outline" color={color} />;
}
