/* eslint-disable react-hooks/exhaustive-deps */
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../styles/colors';
import Header from '../sharedComponents/Header';
import style from './style';
import Icons from '../sharedComponents/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {markFavoriteCharacter} from '../../store/actions/characterActions';
import {getEpisodeNumber} from '../../utils/helper';
import _ from 'lodash';
import {getEpisode} from '../../store/actions/episodeActions';

const Details = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state.character);
  const episodes = useSelector(state => state.episodes.data);
  const data = route.params.item;
  const {name, image, species, origin, episode, gender, location, status, id} =
    data;
  const [readMore, setReadMore] = useState(episode?.length > 5 ? false : true);
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
    container,
    epsNo,
    epsTitle,
    episodeContainer,
    epsDate,
  } = style;

  useEffect(() => {
    let allEpisodeIDs = [];
    for (let i in episode) {
      allEpisodeIDs.push(getEpisodeNumber(episode[i]));
    }
    allEpisodeIDs = _.uniq(allEpisodeIDs).join();
    if (allEpisodeIDs) {
      dispatch(getEpisode(allEpisodeIDs));
    }
  }, []);

  const markFavorite = character => {
    dispatch(markFavoriteCharacter(character));
  };

  const EpisodeAppearance = () => {
    let allEpisodes = readMore ? episode : episode.slice(0, 5);
    return allEpisodes.map(item => {
      const eps = episodes[getEpisodeNumber(item)];
      if (!eps) {
        return null;
      }
      return (
        <View style={episodeContainer}>
          <Text style={epsNo}>{eps.episode}</Text>
          <Text style={epsTitle}>{eps.name}</Text>
          <Text style={epsDate}>{eps.air_date}</Text>
        </View>
      );
    });
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
  return (
    <View style={container}>
      <Header title={'Back'} navigation={navigation} back />
      <ScrollView>
        <Image source={{uri: image}} style={imageStyle} />
        <View style={content}>
          <View style={row}>
            <Text style={title}>{name}</Text>
            <TouchableOpacity onPress={() => markFavorite(data)} style={col3}>
              <Icons
                name={favorites[id] ? 'bookmark' : 'bookmark-outline'}
                size={20}
                color={favorites[id] ? colors.orange : colors.white}
              />
            </TouchableOpacity>
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
          <Text style={label}>Seen in episodes ({episode.length})</Text>
          <EpisodeAppearance />
          {episode?.length < 5 ? null : (
            <TouchableOpacity onPress={() => setReadMore(!readMore)}>
              {readMore ? (
                <Text style={label}>See less...</Text>
              ) : (
                <Text style={label}>Read more...</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
