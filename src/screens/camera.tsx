import { StyleSheet, Text } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import useIsForeground from "../hooks/IsAppForeground.hook";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

const CameraComponent = () => {

    const devices = useCameraDevices();
    const device = devices.back;
    const IsAppForeground = useIsForeground()
    const isFocused = useIsFocused()
  
    if (device == null) return <Text>CARGANDO CAMARA...</Text>
    return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Camera
        style={[StyleSheet.absoluteFill]}
        device={device}
        isActive={(IsAppForeground && isFocused)}
      />
      <Text>Lorem ipsum DOLOR</Text>
    </View>
    )

}

export default CameraComponent