import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Lists from '../sharedComponents/Lists';
import Header from '../sharedComponents/Header';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCharacters,
  markFavoriteCharacter,
} from '../../store/actions/characterActions';
import {getURLParams} from '../../utils/helper';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {info, data, favorites} = useSelector(state => state.character);
  const episodes = useSelector(state => state.episodes);
  const [page, setPage] = useState(1);
  const [filterQuery, setFilterQuery] = useState(null);

  useEffect(() => {
    dispatch(getCharacters({page, filterQuery}));
  }, []);

  useEffect(() => {
    setPage(1);
    dispatch(getCharacters({page: 1, filterQuery}));
  }, [filterQuery]);

  const goToNextPage = () => {
    if (info.next) {
      const params = getURLParams(info.next);
      if (params.page) {
        dispatch(getCharacters({page: params.page, filterQuery}));
        setPage(params.page);
      }
    }
  };

  const goToPrevPage = () => {
    if (info.prev) {
      const params = getURLParams(info.prev);
      if (params.page) {
        dispatch(getCharacters({page: params.page, filterQuery}));
        setPage(params.page);
      }
    }
  };

  const markFavorite = character => {
    dispatch(markFavoriteCharacter(character));
  };

  const {container, content, paginationContainer} = style;
  return (
    <View style={container}>
      <Header title={'Rick & Morty'} favorites navigation={navigation} />

      <View style={content}>
        <Lists
          data={data[page] || []}
          navigation={navigation}
          episodes={episodes.data}
          markFavorite={markFavorite}
          favorites={favorites}
          filterQuery={filterQuery}
          setFilterQuery={query => setFilterQuery(query)}
          isSearch={true}
        />
      </View>

      <View style={paginationContainer}>
        <TouchableOpacity onPress={goToPrevPage}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <Text>{page}</Text>
        <TouchableOpacity onPress={goToNextPage}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
