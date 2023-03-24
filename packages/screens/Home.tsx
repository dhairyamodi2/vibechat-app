import React from "react";
import { View, Text, Pressable } from "react-native";
import {useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../types/types";


type NavProps = NativeStackScreenProps<StackParams, 'Home'>
const Home : React.FC<NavProps> = function({route, navigation} : NavProps){
    function handlePress(){
        console.log('working');
        navigation.navigate('Profile', {
            user: "this is id"
        })
    }
    return (
        <View>
            <Text>Random SHit</Text>
            <Pressable onPress={handlePress}>
                <Text>going to profile view
                </Text>
                </Pressable>
        </View>
    )
}
export {Home}