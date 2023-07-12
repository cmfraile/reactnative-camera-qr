import { StyleSheet, Text } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
StyleSheet

const CameraComponent = () => {
    const devices = useCameraDevices()
    const device = devices.back
  
    if (device == null) return <Text>CARGANDO CAMARA...</Text>
    return (
      <Camera
        style={[StyleSheet.absoluteFill]}
        device={device}
        isActive={true}
      />
    )
    
}

export default CameraComponent