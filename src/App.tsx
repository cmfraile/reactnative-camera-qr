import { useEffect, useState } from "react"
import { SafeAreaView, StyleSheet , Text , Button, PermissionsAndroid } from "react-native"
import { Camera, CameraPermissionStatus } from "react-native-vision-camera"

const App = () => {

  const [ permissions , setPermissions ] = useState<{camera:CameraPermissionStatus|undefined,micro:CameraPermissionStatus|undefined}>({camera:undefined,micro:undefined});

  const requestPermissions = async() => {
    console.log('CLICK')
    await Camera.requestCameraPermission();
    await Camera.requestMicrophonePermission();
  }

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(resp => setPermissions(v => ({...v,camera:resp})));
    Camera.getMicrophonePermissionStatus().then(resp => setPermissions(v => ({...v,micro:resp})));
  },[])

  const goToCamera = () => console.log('CLICK')

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

export default App