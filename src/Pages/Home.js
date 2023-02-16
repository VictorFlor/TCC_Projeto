import react, {useState, useEffect} from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Async from '@react-native-async-storage/async-storage'

import PickerRM from "../Components/PickerRM.js";

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            {/* Area do campo quando estamos fora de uma Area Programada */}
            <View style={styles.areaOutRange}>
                <Text style={{textAlign:"center", marginBottom: 5, fontWeight:"bold"}}>Fora da Area</Text>
                <View style={styles.caixaOutRange}>
                    <PickerRM/>
                </View>     
            </View>

            {/* Area do campo para Area de cadastro e areas cadastradas */}

            <View style={{borderWidth:1, width:"90%"}} />

            <View style={styles.areaInRange}>
                <Text style={{textAlign:"center", marginBottom: 5, fontWeight:"bold"}}>Areas</Text>
                <View style={styles.caixasInRange}>

                    <View style={styles.areaInRangeCadastroInf}>
                        <TextInput
                        style={{width:"100%"}}
                        placeholder="Nome do Ponto"
                        textAlign="center"
                        />
                        <View style={{borderWidth:1, width:"90%", margin:"2%"}} />
                        <PickerRM/>
                    </View>

                    <View style={styles.areaInRangeCadastroBtn}>
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('Mapa')} 
                        style={[styles.btnMapa, {flexDirection:"column",}]}
                        >
                            <FontAwesome name="map" size={20} color="#000" />
                            <Text>Mapa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btnMapa, 
                            {flexDirection:"column",borderWidth:0.7, borderRadius:12, backgroundColor: "white", padding: 5 }]}
                            /*onPress */
                            >
                            <Text>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*Area Flatlist */}

                <View style={styles.caixasInRange}>

                <View style={styles.areaInRangeCadastroInf}>
                        <Text style={{textAlign:"center", padding: 5, fontWeight:"bold"}}>Casa</Text>
                        <View style={{borderWidth:1, width:"90%", margin:"2%"}} />
                        <Text style={{textAlign:"center", padding: 5, paddingTop: 10, fontWeight:"bold"}}>Silencioso</Text>
                    </View>

                    <View style={styles.areaInRangeCadastroBtn}>
                        <TouchableOpacity 
                        style={[styles.btnMapa, {flexDirection:"column",}]}
                        >
                            <FontAwesome name="trash" size={25} color="#000" />
                            <Text>Deletar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btnMapa, {flexDirection:"column"}]}
                            /*onPress */
                            >
                            <FontAwesome name="pencil" size={25} color="#000" />
                            <Text>Editar</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignContent: "center",
        alignItems: "center"
    },
    areaOutRange:{
        marginHorizontal:20,
        marginVertical: 10,
        width: "90%",
        padding: 10,
        height: 90,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        borderWidth: 0.7,
        shadowOpacity: 0.5,
        borderRadius:10,
        backgroundColor: "#94FD9E",
    },
    caixaOutRange:{
        flex:1,
        height: 60,
        backgroundColor: "#6AE876",
        borderWidth: 0.7,
        borderRadius:20,
        width: "60%",
        alignContent:"center",
        justifyContent: "center"
    },
    areaInRange:{
        marginHorizontal:20,
        marginVertical:10,
        padding: 10,
        flex:1,
        width: "90%",
        borderWidth: 0.7,
        borderRadius: 10,
        shadowOpacity: 0.5,
        flexDirection: "column",
        backgroundColor: "#A2FCF3",
    },
    caixasInRange:{
        alignContent:"center",
        justifyContent:"space-between",
        flexDirection: "row",
        height: 100,
        padding: 10,
        marginBottom:10,
        borderWidth: 0.7,
        borderRadius: 30,
        elevation: 5,
        backgroundColor: "#78E7DB"
    },
    areaInRangeCadastroInf:{
        width:"60%"
    },
    areaInRangeCadastroBtn:{
        flexDirection: "row"
    },
    btnMapa:{
        alignItems:"center",
        justifyContent:"center",
        height: 40,
        margin:5,
        marginTop: 20,
    },
    areaInRangeFlatlist:{
        flex:3,
    }
});