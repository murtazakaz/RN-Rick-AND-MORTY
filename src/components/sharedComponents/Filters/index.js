import _ from 'lodash';
import React, {useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import colors from '../../../styles/colors';
import {genderTypes, statusTypes} from '../../../utils/constant';
import {createSearchQueryParams} from '../../../utils/helper';
import Icons from '../Icons';

import style from './style';

const Filters = ({modalVisible, setModalVisible, onFilter}) => {
  const [name, setName] = useState(null);
  const [status, setStatus] = useState(null);
  const [species, setSpecies] = useState(null);
  const [type, setType] = useState(null);
  const [gender, setGender] = useState(null);
  const {
    multiOptions,
    multiOptionsItems,
    multiOptionsLabel,
    label,
    input,
    multiOptionsContainer,
    multiOptionSelected,
    centeredView,
    modalView,
    modalText,
    button,
    buttonOpen,
    buttonClose,
    textStyle,
  } = style;

  const onClear = () => {
    setName(null);
    setGender(null);
    setSpecies(null);
    setType(null);
    setStatus(null);
  };
  const onSubmit = () => {
    let applyFilters = [];
    if (name) {
      applyFilters.push({key: 'name', value: name});
    }
    if (status) {
      applyFilters.push({key: 'status', value: status});
    }

    if (species) {
      applyFilters.push({key: 'species', value: species});
    }

    if (type) {
      applyFilters.push({key: 'type', value: type});
    }

    if (gender) {
      applyFilters.push({key: 'gender', value: gender});
    }

    onFilter(createSearchQueryParams(applyFilters));
  };

  const renderOptions = (filter, value, set) => {
    return (
      <View style={multiOptionsContainer}>
        {filter.map((item, index) => (
          <TouchableOpacity
            onPress={() => (value === item ? set(null) : set(item))}
            style={multiOptionsItems}>
            <View style={[multiOptions, value === item && multiOptionSelected]}>
              {value === item && (
                <Icons name="checkmark" size={15} color={colors.white} />
              )}
            </View>
            <Text style={multiOptionsLabel}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={centeredView}>
        <View style={modalView}>
          <Text style={modalText}>Search in Rick & Morty's World!!!</Text>

          <Text style={label}>Name</Text>
          <TextInput
            style={input}
            onChangeText={text => setName(text)}
            value={name}
          />

          <Text style={label}>Status</Text>
          {renderOptions(statusTypes, status, setStatus)}

          <Text style={label}>Species</Text>
          <TextInput
            style={input}
            onChangeText={text => setSpecies(text)}
            value={species}
          />

          <Text style={label}>Type</Text>
          <TextInput
            style={input}
            onChangeText={text => setType(text)}
            value={type}
          />

          <Text style={label}>Gender</Text>
          {renderOptions(genderTypes, gender, setGender)}

          <TouchableOpacity style={[button, buttonOpen]} onPress={onSubmit}>
            <Text style={textStyle}>Apply Filter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[button, buttonClose]} onPress={onClear}>
            <Text style={textStyle}>Clear all</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Filters;
