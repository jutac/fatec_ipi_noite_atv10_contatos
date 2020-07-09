import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/contacts-actions';

const ItemGrid = (props) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onLongPress={() => dispatch(deleteContact(props.item.id))}>
      <View key={props.item.key} style={styles.gridItemNaLista}>
        <Text style={props.nomeStyle}>{props.item.nome}</Text>
        <Text style={props.telefoneStyle}>{props.item.telefone}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridItemNaLista: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#666',
    },
});

export default ItemGrid;
