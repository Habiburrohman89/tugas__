import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MenuBar from './src/components/MenuBar';
import Dear from './src/components/Dear';
import Jadwal from './src/components/Jadwal';

const App = () => {
  const [pencarian, setPencarian] = useState('');
  const [Kategori, setKategori] = useState([
    {namaKategori: 'Artikel'},
    {namaKategori: 'Konsultasi'},
    {namaKategori: 'Obat'},
    {namaKategori: 'Cari Dokter'},
    {namaKategori: 'Klinik Terdekat'},
    {namaKategori: 'Rumah Sakit'},
    {namaKategori: 'Resep Dokter'},
  ]);

  const [artikel, setArtikel] = useState([
    {judul : 'Resep Rahasia Agar Tetap Sehat', 
    deskripsi: 'inilah resep rahasia agar anda tetap sehat di umur 60an',
    image: require('./src/image/img.jpeg')
    },
  ])
  
  return (
    <View style={{ flex: 1,  backgroundColor:'#f4f4f4'}}>
      <View style={{ flex: 1, marginHorizontal: 20, marginTop: 10, }}>
        <Dear pencarian={pencarian} setPencarian={setPencarian}/>
        <Jadwal/>
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Text style={{color: '#0082F7' , fontWeight: 'bold'}}>Kategori</Text>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
          <Text style={{color: '#FDB436', fontWeight: 'bold'  }}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <View><FlatList data={Kategori}horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => <TouchableOpacity style={{ paddingVertical: 10, marginRight: 10, paddingHorizontal:10, backgroundColor:'#ffffff', borderRadius: 10,elevation: 3, marginBottom: 10, marginTop: 10, }}><Text style={{ color:'#bdbdbd' }}>{item.namaKategori}</Text></TouchableOpacity>}/></View>
        <View><FlatList data={artikel}horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => <TouchableOpacity style={{ paddingVertical: 10, marginRight: 10, paddingHorizontal:10, backgroundColor:'#ffffff', borderRadius: 25,elevation: 3, marginBottom: 10, marginTop: 10, }}><Image source={item.image} style={{ width: 200, height: 100, borderRadius: 20, borderColor:'#ffffff', borderWidth: 2 }}/><Text style={{ color:'#bdbdbd', fontWeight:'bold', }}>{item.judul}</Text><Text style={{ color:'#bdbdbd' }}>{item.deskripsi}</Text></TouchableOpacity>}/></View>
      </View>
      <MenuBar/>
    </View>
  );
};

export default App;