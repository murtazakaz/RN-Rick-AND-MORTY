import React from 'react';
import {Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../../styles/colors';
import Icons from '../Icons';
import style from './style';

const Header = ({title, favourite}) => {
  const {container, headerTitle} = style;
  return (
    <View style={container}>
      <Text style={headerTitle}>{title}</Text>
      {favourite && (
        <View>
          <Icons
            name="bookmarks-outline"
            size={normalize(18)}
            color={colors.white}
          />
        </View>
      )}
    </View>
  );
};

export default Header;
