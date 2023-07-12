import { useState , useEffect } from "react";
import { CameraPermissionStatus } from "react-native-vision-camera";
import { Camera } from "react-native-vision-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text , Button } from "react-native";
import { StyleSheet } from "react-native";
import { NativeStackNavigatorProps, NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { rootStack } from "../routes/app.routes";

interface mainComponentProps extends NativeStackScreenProps<rootStack,'main'>{}
const MainComponent = ({navigation:{navigate}}:mainComponentProps) => {

    const [ permissions , setPermissions ] = useState<{camera:CameraPermissionStatus|undefined,micro:CameraPermissionStatus|undefined}>({camera:undefined,micro:undefined});
  
    const requestPermissions = async() => {
      await Camera.requestCameraPermission();
      await Camera.requestMicrophonePermission();
    }
  
    useEffect(() => {
      Camera.getCameraPermissionStatus().then(resp => {console.log(resp);setPermissions(v => ({...v,camera:resp}))});
      Camera.getMicrophonePermissionStatus().then(resp => {console.log(resp);setPermissions(v => ({...v,micro:resp}))});
    },[])
  
    const goToCamera = () => navigate('camera')
  
    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Trasteo con cámara </Text>
        <Text style={styles.text}> {JSON.stringify(permissions)} </Text>
  
        { 
          (permissions.camera == 'authorized' && permissions.camera == 'authorized') 
          ? <Button title="acceder a cámara" onPress={goToCamera}/>
          : <Button title="solicitar permisos" onPress={requestPermissions} />
        }
  
      </SafeAreaView>
    )
  
}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    text:{fontSize:15,flexWrap:'wrap'}
  })

export default MainComponent

