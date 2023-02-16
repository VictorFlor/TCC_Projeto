import react, { useEffect, useState }  from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps'
import Slider from "@react-native-community/slider";

export default function Mapa(){

    const navigation = useNavigation();

    const [dist, setdist] = useState(0);

    return(
        <View style={styles.container}>
            <MapView
            style={styles.map}
            region={{
                latitude:-3.10719,
                longitude:-60.0261,
                latitudeDelta:0.0922,
                longitudeDelta:0.0421,
            }}
            showsUserLocation
            />
            <Slider
            minimumValue={100}
            maximumValue={1000}
            value={dist}
            style={styles.slider}
            />
        </View>

        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent:'center',
    },
    map:{
        flex:1
    },
    slider:{
        height: 20,
        width: "90%",
        marginLeft: 10,
        paddingTop: 30
    }
});