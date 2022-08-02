import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import style from './style';
import Icons from '../Icons';
import colors from '../../../styles/colors';
import normalize from 'react-native-normalize';

const Lists = ({data, navigation}) => {
  const [listType, setListType] = useState('list');
  const {
    container,
    gridItemContainer,
    itemContainer,
    imageStyle,
    title,
    col1,
    col2,
    col3,
    statusContainer,
    statusIcon,
    statusAlive,
    statusDead,
    statusText,
    label,
    value,
    gridImageStyle,
    gridCol2,
    listOptionContainer,
    listOptionList,
    listOptionGrid,
    listOption,
    details,
    listContainer,
  } = style;

  const goToDetails = (item, index) => {
    navigation.navigate('Details', {item, index});
  };

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

  const changeListType = type => {
    setListType(type);
  };

  const listView = ({item, index}) => {
    const {name, image, status, species, origin, episode, isFavourite} = item;
    return (
      <TouchableOpacity
        onPress={() => goToDetails(item, index)}
        style={itemContainer}>
        <View style={col1}>
          <Image source={{uri: image}} style={imageStyle} />
        </View>
        <View style={col2}>
          <Text style={title}>{name}</Text>
          <View style={statusContainer}>
            <View style={[statusIcon, getStatusStyle(status)]} />
            <Text style={statusText}>{`${status} - ${species}`}</Text>
          </View>
          <View style={details}>
            <Text style={label}>Origin</Text>
            <Text style={value}>{origin.name}</Text>
          </View>

          <Text style={label}>First seen in</Text>
          <Text style={value}>{episode.length ? episode[0] : 'N/A'}</Text>
        </View>
        <View style={col3}>
          <Icons
            name={isFavourite ? 'bookmark' : 'bookmark-outline'}
            size={20}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const gridView = ({item, index}) => {
    const {name, image, status, species, origin, episode} = item;
    return (
      <View style={gridItemContainer}>
        <View style={col1}>
          <Image source={{uri: image}} style={gridImageStyle} />
        </View>
        <View style={gridCol2}>
          <Text style={title}>{name}</Text>
          <View style={statusContainer}>
            <View style={[statusIcon, getStatusStyle(status)]} />
            <Text style={statusText}>{`${status} - ${species}`}</Text>
          </View>
          <Text style={label}>Origin</Text>
          <Text style={value}>{origin.name}</Text>
        </View>
      </View>
    );
  };

  const renderItems = ({item, index}) => {
    if (listType === 'grid') {
      return gridView({item, index});
    }
    return listView({item, index});
  };

  return (
    <>
      <View style={listOptionContainer}>
        <TouchableOpacity
          onPress={() => changeListType('list')}
          style={[listOption, listType !== 'grid' && listOptionList]}>
          <Icons name="list-outline" size={20} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeListType('grid')}
          style={[listOption, listType === 'grid' && listOptionGrid]}>
          <Icons name="grid-outline" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>

      <FlatList
        // style={{flex: 1}}
        style={listContainer}
        extraData={listType}
        numColumns={listType === 'grid' ? 2 : 1}
        key={listType === 'grid' ? 2 : 1}
        data={data}
        renderItem={renderItems}
      />
    </>
  );
};

export default Lists;
