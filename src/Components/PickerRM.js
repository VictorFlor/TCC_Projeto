import react, {Component} from 'react';
import {View} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default class PickerRM extends Component{

    constructor(props){
        super(props);
        this.state = {
            ringerMode:'',
        }
    }

    render(){
        return(
            <View>
                <Picker
                selectedValue={this.state.ringerMode}
                onValueChange={(ItemValue, ItemIndex ) => this.setState({ringerMode: ItemValue})}
                >
                    <Picker.Item value={0} label="Selecione" />
                    <Picker.Item key={2} value={2} label="Tocar" />
                    <Picker.Item key={3} value={3} label="Silencioso" />
                    <Picker.Item key={4} value={4} label="Não Pertube" />
                </Picker>
            </View>
        );
    }
} 

