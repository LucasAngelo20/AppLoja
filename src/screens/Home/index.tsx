import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
  FlatList,
} from 'react-native';

import Header from '../../components/Header';

import Data from '../../services/MOCK_DATA.json';

const {height, width} = Dimensions.get('screen');

const searchInputIconW = width * 0.05;
const searchInputIconH = searchInputIconW * 1;
const deliveryIconW = width * 0.04;
const deliveryIconH = deliveryIconW * 1;
const categorieImageW = width * 0.15;
const categorieImageH = categorieImageW * 1;

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View style={styles.searchInput}>
          <Image
            style={styles.searchInputIcon}
            source={require('../../assets/searchmagnifierinterfacesymbol1_79893.png')}
          />
          <TextInput
            style={styles.searchInputText}
            placeholder="Digite o que procura..."
          />
        </View>
        <View style={styles.delivery}>
          <Image
            style={styles.deliveryIcon}
            source={require('../../assets/map-marker-point_icon-icons.com_56702.png')}
          />
          <Text style={styles.deliveryText}>Entrega em</Text>
          <Text style={styles.deliveryAdress}>São Paulo, Brasil</Text>
        </View>
        <View>
          <FlatList
            keyExtractor={item => item.id}
            data={Data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.categorieContainer}>
                <View style={styles.categorieImage}/>
                <Text>{item.categorieName}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchInput: {
    backgroundColor: '#eee',
    marginVertical: 20,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 13,
  },
  searchInputIcon: {
    height: searchInputIconH,
    width: searchInputIconW,
  },
  searchInputText: {
    width: '100%',
    paddingHorizontal: 20,
  },
  delivery: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    alignItens: 'center',
  },
  deliveryText: {
    fontSize: 12,
    marginRight: 5,
  },
  deliveryAdress: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  deliveryIcon: {
    height: deliveryIconH,
    width: deliveryIconW,
    marginRight: 3,
    tintColor: '#e76316',
  },
  categorieImage: {
    backgroundColor: 'red',
    height: categorieImageH,
    width: categorieImageW,
    borderRadius: 50
  },
  categorieContainer:{
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
