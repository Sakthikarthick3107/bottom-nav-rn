import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons , FontAwesome  } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {
  const[active , setActive] = useState('Home');
  const[iconType , setIconType] = useState('home-sharp');

  const icons = [
    {
      name : 'Home',
      iconType : 'home-sharp' ,
      iconActiveType : 'home-outline'
    },
    {
      name : 'Calendar',
      iconType : 'calendar' ,
      iconActiveType : 'calendar-outline'
    }
    ,
    {
      name : 'Explore',
      iconType : 'compass' ,
      iconActiveType : 'compass-outline'
    },
    {
      name : 'Mail',
      iconType : 'mail-open' ,
      iconActiveType : 'mail-open-outline'
    }
  ]

  const handleActiveIcon = (name, iconType) =>{
    setActive(name);
    setIconType(iconType);
  }

  return ( 
    <View tw="flex-1 items-center justify-center bg-slate-200">
      <Text tw='text-xl font-bold'>Bottom Navigation Bar Setup</Text>
      <View tw='bg-blue-200 h-[70] w-[100vw] absolute bottom-16 flex flex-row items-center justify-around'>
       
        {[...Array(4)].map((_ , index) =>(
          <TouchableOpacity key={index} tw='flex items-center justify-center  rounded-b-2xl p-1'>
            <Ionicons name={iconType} size={30} color="black"/>
            
          </TouchableOpacity>
        ))}
        </View>
      <View tw='absolute sticky bottom-0 w-[100vw] h-[70] bg-white flex flex-row items-start justify-around'>
        
        {icons.map((icon , index) => (
          <TouchableOpacity onPress={() => handleActiveIcon(icon.name  , icon.iconType)} key={index} tw={`${active === icon.name && 'bg-blue-200'} flex items-center justify-center w-[18%] rounded-b-2xl p-1`}>
            <Ionicons name={active === icon.name ? icon.iconActiveType : icon.iconType} size={30} color="black" />
            <Text>{icon.name}</Text>
          </TouchableOpacity>
          
        ))}
        
           
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

