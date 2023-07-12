import 'react-native-reanimated';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainComponent from "../screens/main";
import CameraComponent from '../screens/camera';

export type rootStack = { main:undefined , camera:undefined }
const Stack = createNativeStackNavigator<rootStack>();

const App = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="main"
                screenOptions={{headerShown:false}}
            >

                <Stack.Screen name='main' component={MainComponent}/>
                <Stack.Screen name='camera' component={CameraComponent}/>

            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default App