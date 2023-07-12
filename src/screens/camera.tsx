import { StyleSheet, Text } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import useIsForeground from "../hooks/IsAppForeground.hook";
import { useIsFocused } from "@react-navigation/native";
import { View } from "react-native";
useScanBarcodes
import 'react-native-reanimated'
import { useScanBarcodes , BarcodeFormat } from "vision-camera-code-scanner";
import { useEffect } from "react";

const CameraOverlay = ({children}:{children:JSX.Element}) => {

    const devices = useCameraDevices();
    const device = devices.back;
    const IsAppForeground = useIsForeground()
    const isFocused = useIsFocused()

    const [ frameProcessor , barcodes ] = useScanBarcodes([BarcodeFormat.QR_CODE], { checkInverted: true });

    useEffect(() => console.log(barcodes),[barcodes]);

    return(
        (device == null)
        ?   <Text>CARGANDO CAMARA...</Text>
        :   <View style={[StyleSheet.absoluteFill]}>
                <Camera
                    style={[StyleSheet.absoluteFill]}
                    device={device}
                    isActive={(IsAppForeground && isFocused)}
                    frameProcessor={frameProcessor}
                    frameProcessorFps={3}
                />
                {children}
            </View>
    )

}

const CameraComponent = () => {

    return(
        <CameraOverlay>
            <View style={styles.container}><Text>LOREM IPSUM DOLOR</Text></View>
        </CameraOverlay>
    )

}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    barcodeTextURL: {fontSize: 20,color: 'white',fontWeight: 'bold'},
})

export default CameraComponent