import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import base64 from 'react-native-base64'
import { Camera } from 'expo-camera';
import {  StackActions , NavigationContainer,  useNavigationContainerRef, NavigationActions, useIsFocused , useFocusEffect, TabActions    } from '@react-navigation/native';
import vuforia from 'vuforiajs'

let camera;

export default function Principal({ navigation, route }) {

  //console.log('Camera', navigation, route)  ;
  
  //console.log(navigation.dangerouslyGetParent().state.routes);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);  

  const __startCamera = ()=>{__takePicture().catch(err=>{ 
       
    console.log('error na camera2');
    navigation.navigate('Home');

  });}

  let camera = Camera;

  const MD5 = (d) => {var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
 
  const submitToVulforia = async (image) => {
    

        // load module
    var vuforia = require('vuforiajs');

    // init client with valid credentials
    var client = vuforia.client({
        // Server access key (used for Vuforia Web Services API)
        'accessKey': 'fca7ecb8e331ffabf8c603b62c0d9d0f66d391d6',

        // Server secret key (used for Vuforia Web Services API)
        'secretKey': '1414023813d8f6cafb8e04f170073bfcdea742cb',
        // Client access key (used for Vuforia Cloud Recognition API)
        'clientAccessKey': 'ccf11095e8df3ba2605b017d9d3ad37eed26e673',

        // Client secret key (used for Vuforia Cloud Recognition API)
        'clientSecretKey': '269a32581fa68e00b8f29a66986bf28b65fef7af',
    });

    // util for base64 encoding and decoding
    var util = vuforia.util();

    //var filename = __dirname + '/test.jpg'; // image file that will be send to Cloud Recognition
    var max_num_results = 5; // return only 5 matches
  
    let r = ""

    client.cloudRecoQuery(image, max_num_results, function (error, result) {

         console.log(result)        
         // result from cloud recognition API
        /*
        { 
            result_code: 'Success',
            transaction_id: 'b66bef31ba394c86a7ea2ab7e35c93d1',
            results: 
            [ 
                'eacbb1487c584dbb8741fb5a28b4228f' 
            ] 
        }
        */
    });

    /*
    const raw = JSON.stringify({
  
      "user_app_id": {
            "user_id": "oh7i30b4818r",
            "app_id": "6bb41a14f9564cea9e6a633b3fb6a816"
        },
      "searches": [
        {
          "query": {
          "ranks": [
              {
              "annotation": {
                  "data": {
                  "image": {
                    "base64":  image
                  }
                }
              }
            }
          ]
          }
        }
      ]
    });

    */
  
  
    /*
    var data = new Date().toUTCString();
    const access_key= ""    
    const url = `https://cloudreco.vuforia.com/v1/query`
    const content_type = 'multipart/form-data'
    const string_to_sign = "POST"+"\n"+MD5("")+"\n"+content_type+"\n"+date+"\n"+url
    const access_key = "fca7ecb8e331ffabf8c603b62c0d9d0f66d391d6"
    const secret_key = "1414023813d8f6cafb8e04f170073bfcdea742cb"
    const signature = base64()
    */
    
    /*
    var hmacsha1 = require('hmacsha1');
    var contentType = "application/json";
    var hexDigest = "d41d8cd98f00b204e9800998ecf8427e";
    var accessKey = "fca7ecb8e331ffabf8c603b62c0d9d0f66d391d6";
    var secretKey = "1414023813d8f6cafb8e04f170073bfcdea742cb";
    var date = new Date().toUTCString();
    var url = `cloudreco.vuforia.com/v1/query`;
    var dateValue = date;
    var requestPath = url;
    var newLine = '\n';
    var toDigest = `POST${newLine}${hexDigest}${newLine}${contentType}${newLine}${dateValue}${newLine}${requestPath}`;
    var shaHashed = hmacsha1(secretKey, toDigest);
    var signature = base64.encode(shaHashed);

    const config = {
        headers: {
        'Date': `${date}`,
        'Authorization': `VWS ${accessKey}:${signature}`
      }
    }
  
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `VWS ${accessKey}:${signature}`,
        'Content-Type': contentType,
        'Accept': 'application/json',
        'Date': `${date}`,        
      },
        body: raw
    };
    
    fetch("https://"+url, requestOptions)
      .then(response => response.text())
      .then(result => abreVideo(result))
      .catch(error => console.log('error', error));
      
      */


        
  };

  const submitToClarifai = async (image) => {
    
  const raw = JSON.stringify({

    "user_app_id": {
          "user_id": "oh7i30b4818r",
          "app_id": "6bb41a14f9564cea9e6a633b3fb6a816"
      },
    "searches": [
      {
        "query": {
        "ranks": [
            {
            "annotation": {
                "data": {
                "image": {
                  "base64":  image
                }
              }
            }
          }
        ]
        }
      }
    ]
  });
    
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key 486460d8d4fa4436aae51f40a15e5e7d'
    },
      body: raw
  };
  
    fetch(`https://api.clarifai.com/v2/annotations/searches`, requestOptions)
      .then(response => response.text())
      .then(result => abreVideo(result))
      .catch(error => console.log('error', error));      
    
    //abreVideo("");
      
    };

   const abreVideo =(result)=>{  
    
     const response =  JSON.parse(result);     
     let url = "";   
     for (var i = 0; response.hits.length; i++ ){                 
        if (response.hits[i].score>0.5){
            console.log('passou score', response.hits[i].score);
        }
        //response.hits[i].input.data.metadata     
      }      
      console.log(result);
      
      const jumpToAction = TabActions.jumpTo('VideoBook', { endereco: 'https://booklife1.websiteseguro.com/booklife_contratos/turmateste/thais.mp4' });      
      navigation.dispatch(jumpToAction)
  

      /*
      navigation.setParams({
        gohome: true,
      });

      console.log('atualizacao', route.params.gohome)
      */

      //avigation.navigate('VideoBook', { endereco: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' } );
     
  
      /*
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
      
      
      this.props.navigation.dispatch(navigateAction);
      */

   };

    const __takePicture = async () => {
        
      /*
        if (!camera) return     
        const photo = await camera.takePictureAsync({base64: true})
        const tam = photo.base64.split(",");
        let foto = photo.base64;
        if (tam.length>1 )        
          foto = tam[1];  
      */
          foto = "";
                      
          submitToClarifai(foto);
      
      }

    useEffect(() => {    
      (async () => {
        const { status } = await Camera.requestPermissionsAsync().catch(err=>{ console.log('error na permissao') });      
        setHasPermission(status === 'granted');        
      })();
    }, []);
    
    if (hasPermission === null) {
      return <Text>Erro</Text>;;
    }
    if (hasPermission === false) {
      return <Text>Sem acesso a Câmera</Text>;
    }

    
  //if (route.params.gohome==undefined)
      //return <HomeScreen/>

  return (
    <View style={styles.container}>
      <Camera
      
        ref={(r) => {camera = r }}      
        style={styles.camera}      
        type={type}
        >          
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}                 
            onPress={__startCamera}>      
            <Text style={styles.text}>Captura</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    alignItems: 'center',
  },
});


