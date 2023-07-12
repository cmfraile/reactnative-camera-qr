import { StyleSheet, Text } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import useIsForeground from "../hooks/IsAppForeground.hook";
import { useIsFocused } from "@react-navigation/native";
import { View } from "react-native";
import 'react-native-reanimated'

const CameraOverlay = ({children}:{children:JSX.Element}) => {

    const devices = useCameraDevices();
    const device = devices.back;
    const IsAppForeground = useIsForeground()
    const isFocused = useIsFocused()

    return(
        (device == null)
        ?   <Text>CARGANDO CAMARA...</Text>
        :   <View style={[StyleSheet.absoluteFill]}>
                <Camera
                style={[StyleSheet.absoluteFill]}
                device={device}
                isActive={(IsAppForeground && isFocused)}
                />
                {children}
            </View>
    )

}

const CameraComponent = () => {

    return(
        <CameraOverlay>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>LOREM IPSUM DOLOR</Text></View>
        </CameraOverlay>
    )

}

export default CameraComponent