import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import style from './style';
import Icons from '../Icons';
import colors from '../../../styles/colors';
import {getEpisodeNumber} from '../../../utils/helper';
import {useDispatch, useSelector} from 'react-redux';
import {changeListViewType} from '../../../store/actions/settingActions';
import Filters from '../Filters';

const Lists = ({
  data,
  episodes,
  navigation,
  markFavorite,
  favorites,
  isFavorite,
  isSearch,
  filterQuery,
  setFilterQuery,
}) => {
  const dispatch = useDispatch();
  const listViewType = useSelector(state => state.settings.listViewType);
  const [filter, setFilter] = useState(false);

  const {
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
    gridTitle,
    row,
    header,
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
    dispatch(changeListViewType(type));
  };

  const listView = ({item, index}) => {
    const {name, image, status, species, origin, episode} = item;
    const eps = episodes[getEpisodeNumber(episode[0])];
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
          <Text style={value}>
            {eps ? `${eps.episode} - ${eps.name}` : 'N/A'}
          </Text>
        </View>
        <TouchableOpacity onPress={() => markFavorite(item)} style={col3}>
          <Icons
            name={favorites[item.id] ? 'bookmark' : 'bookmark-outline'}
            size={20}
            color={favorites[item.id] ? colors.orange : colors.white}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const gridView = ({item, index}) => {
    const {name, image, status, species, origin, episode} = item;
    const eps = episodes[getEpisodeNumber(episode[0])];
    return (
      <TouchableOpacity
        onPress={() => goToDetails(item, index)}
        style={gridItemContainer}>
        <Image source={{uri: image}} style={gridImageStyle} />

        <View style={gridCol2}>
          <View style={row}>
            <Text style={gridTitle}>{name}</Text>
            <TouchableOpacity onPress={() => markFavorite(item)}>
              <Icons
                name={favorites[item.id] ? 'bookmark' : 'bookmark-outline'}
                size={20}
                color={favorites[item.id] ? colors.orange : colors.white}
              />
            </TouchableOpacity>
          </View>

          <View style={statusContainer}>
            <View style={[statusIcon, getStatusStyle(status)]} />
            <Text style={statusText}>{`${status} - ${species}`}</Text>
          </View>
          <View style={details}>
            <Text style={label}>Origin</Text>
            <Text style={value}>{origin.name}</Text>
          </View>
          <Text style={label}>First seen in</Text>
          <Text style={value}>
            {eps ? `${eps.episode} - ${eps.name}` : 'N/A'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItems = ({item, index}) => {
    if (listViewType === 'grid') {
      return gridView({item, index});
    }
    return listView({item, index});
  };

  return (
    <>
      <View style={header}>
        <View style={listOptionContainer}>
          <TouchableOpacity
            onPress={() => changeListType('list')}
            style={[listOption, listViewType !== 'grid' && listOptionList]}>
            <Icons name="list-outline" size={20} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeListType('grid')}
            style={[listOption, listViewType === 'grid' && listOptionGrid]}>
            <Icons name="grid-outline" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>

        {isSearch && (
          <View style={listOptionContainer}>
            <TouchableOpacity
              onPress={() => setFilter(true)}
              style={[listOption, filterQuery && listOptionGrid]}>
              <Icons name="search-outline" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <FlatList
        style={!isFavorite && listContainer}
        numColumns={listViewType === 'grid' ? 2 : 1}
        key={listViewType === 'grid' ? 2 : 1}
        data={data}
        renderItem={renderItems}
      />
      {isSearch && (
        <Filters
          modalVisible={filter}
          setModalVisible={value => setFilter(value)}
          onFilter={data => {
            setFilter(false);
            setFilterQuery(data);
          }}
        />
      )}
    </>
  );
};

export default Lists;
