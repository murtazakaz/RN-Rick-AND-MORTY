import {Image, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import Lists from '../sharedComponents/Lists';
import colors from '../../styles/colors';
import Header from '../sharedComponents/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import Icons from '../sharedComponents/Icons';

const Details = ({navigation, route}) => {
  const data = route.params.item;
  const {
    name,
    image,
    species,
    origin,
    episode,
    gender,
    location,
    status,
    isFavourite,
  } = data;
  const {
    content,
    imageStyle,
    title,
    col3,
    statusContainer,
    statusIcon,
    statusAlive,
    statusDead,
    statusText,
    label,
    value,
    details,
    row,
  } = style;

  const {container} = style;

  const getStatusStyle = status => {
    switch (status) {
      case 'Alive':
        return statusAlive;
      case 'Dead':
        return statusDead;
      default:
        return;
    }
  };
  return (
    <View style={container}>
      <Header title={'Back'} navigation={navigation} back />
      <ScrollView>
        <Image source={{uri: image}} style={imageStyle} />
        <View style={content}>
          <View style={row}>
            <Text style={title}>{name}</Text>
            <View style={col3}>
              <Icons
                name={isFavourite ? 'bookmark' : 'bookmark-outline'}
                size={20}
                color={colors.white}
              />
            </View>
          </View>

          <View style={statusContainer}>
            <View style={[statusIcon, getStatusStyle(status)]} />
            <Text style={statusText}>{`${status} - ${species}`}</Text>
          </View>
          <View style={details}>
            <Text style={label}>Gender</Text>
            <Text style={value}>{gender}</Text>
          </View>

          <View style={details}>
            <Text style={label}>Origin</Text>
            <Text style={value}>{origin.name}</Text>
          </View>

          <Text style={label}>Last known location</Text>
          <Text style={value}>{location.name}</Text>
        </View>
        <View style={content}>
          <Text style={label}>Seen in episodes</Text>
          {episode.map(item => (
            <Text style={value}>{item}</Text>
          ))}
        </View>
        {/* <View style={col3}>
        <Icons
          name={isFavourite ? 'bookmark' : 'bookmark-outline'}
          size={20}
          color={colors.white}
        />
      </View> */}
      </ScrollView>
    </View>
  );
};

export default Details;
