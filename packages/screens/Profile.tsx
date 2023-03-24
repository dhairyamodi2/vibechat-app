import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {View, Text} from 'react-native'
import { StackParams } from "../types/types";

type ProfileProps = NativeStackScreenProps<StackParams, 'Profile'>
const Profile : React.FC<ProfileProps> = function({navigation, route} : ProfileProps){
    const {user} = route.params
    return (
        <View>
            <Text>
                {user}
            </Text>
        </View>
    )
}

export {Profile}