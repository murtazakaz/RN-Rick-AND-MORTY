import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../../styles/colors';
import Icons from '../Icons';
import style from './style';

const Header = ({title, favourite, navigation, back}) => {
  const {container, headerTitle, headerBack} = style;
  return (
    <View style={container}>
      {back ? (
        <TouchableOpacity
          style={headerBack}
          onPress={() => navigation.goBack()}>
          <Icons
            name="chevron-back"
            size={normalize(20)}
            color={colors.white}
          />
          <Text style={headerTitle}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={headerTitle}>{title}</Text>
      )}

      {favourite && (
        <View>
          <Icons
            name="bookmarks-outline"
            size={normalize(20)}
            color={colors.white}
          />
        </View>
      )}
    </View>
  );
};

export default Header;
