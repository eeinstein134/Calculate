import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const GameHeader = () => {
    const [score, lives, setScore, setLives] = useState(0)

    return(
        <>
        <Button title={'x'} buttonStyle={styles.button}/>
            <Icon name='heart' size={20} color={'red'} style={styles.icon}></Icon>
            <Icon name='heart' size={20} color={'red'} style={styles.icon}></Icon>
            <Icon name='heart' size={20} color={'red'} style={styles.icon}></Icon>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '10%'
    },
    icon: {
        padding: 2,
        textAlign: 'right',
        flexDirection: 'row'
    }

})

export default GameHeader