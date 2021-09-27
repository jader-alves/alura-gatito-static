import * as React from 'react';
import {SafeAreaView, RefreshControl, View, StyleSheet, Button, Text, BackHandler, NavigationActions, useEffect,Alert, CommonActions  } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import {  StackActions, useIsFocused     } from '@react-navigation/native';
import { HomeScreen } from '../Home';
import { LOCATION_FOREGROUND } from 'expo-permissions';

export default function VideoBook({navigation, route}) {

  const isFocused = useIsFocused();
  //console.log('Focus', isFocused);  
  //console.log('VideoBook', navigation, route);
  const [text, setText] = React.useState('');
  const hasUnsavedChanges = true;

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        video.current.pauseAsync() 
        //navigation.replace('Home')
        navigation.dispatch(e.data.action)
        // Prompt the user before leaving the screen       
      }),
    [navigation, hasUnsavedChanges]
  );
 
 

  const video = React.useRef(null);
  const endereco = route?.params?.endereco ? route?.params?.endereco : "" ;    

  //console.log(endereco);
  const [status, setStatus] = React.useState({});

  
  if (!isFocused)
      video.current.pauseAsync() 

  const toca_video = ()=>{      
    //navigation.setParams({gohome: true})
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
  }

  return (
    
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: endereco,
        }}
        useNativeControls
        resizeMode="contain"        
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        
      />
      
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={toca_video}    
        />
      
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
