import {View} from 'react-native';
import React from 'react';
import Lists from '../sharedComponents/Lists';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {markFavoriteCharacter} from '../../store/actions/characterActions';
import Header from '../sharedComponents/Header';

const Favorites = ({navigation}) => {
  const dispatch = useDispatch();
  const favoritesData = useSelector(state => state.character.favorites);
  const favorites = Object.keys(favoritesData).map(key => favoritesData[key]);

  const episodes = useSelector(state => state.episodes);
  const {container, content} = style;

  const markFavorite = character => {
    dispatch(markFavoriteCharacter(character));
  };
  return (
    <View style={container}>
      <Header title={'Favorites'} back navigation={navigation} />

      <View style={content}>
        <Lists
          data={favorites || []}
          navigation={navigation}
          episodes={episodes.data}
          markFavorite={markFavorite}
          favorites={favoritesData}
          isFavorite
        />
      </View>
    </View>
  );
};

export default Favorites;
