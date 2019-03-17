import React from 'react';
import { StyleSheet, Image} from 'react-native';

export class Background extends React.Component {
    render(){
        return(
            <Image
            style = {styles.backGround}
            source = {require('./image/wolf.jpg')}
            />
        );
    }

}
const styles = StyleSheet.create({
    backGround:{
        flex: 1
    }
});
