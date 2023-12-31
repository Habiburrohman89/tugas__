import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const MenuBar = () => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#ffffff', elevation: 3, paddingTop: 7, paddingBottom: 7, marginHorizontal: 20, marginBottom: 10, borderRadius: 5 }}>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="home" size={23} color="#0082F7" />
        <Text style={{ color: '#bdbdbd', fontSize: 12}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="chatbubbles" size={23} color="#bdbdbd" />
        <Text style={{ color: '#bdbdbd', fontSize: 12}}>Jadwal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="chatbubbles" size={23} color="#bdbdbd" />
        <Text style={{ color: '#bdbdbd', fontSize: 12}}>Pesan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="person" size={23} color="#bdbdbd" />
        <Text style={{ color: '#bdbdbd', fontSize: 12}}>User</Text>
      </TouchableOpacity>
    </View>
    );
}

export default MenuBar;
