import React, { forwardRef, Fragment } from "react";
import { TextInput, TextInputProps, View, Text, TouchableOpacity } from "react-native";
import {MaterialIcons, FontAwesome, Octicons  } from "@expo/vector-icons"
import {style} from "./styles";
import { themas } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;   

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}
export const Input = forwardRef<TextInput, Props> ((props, ref) => {

    const {IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, ...rest} = props;
    
    const calculateSizeWidth = () => {
    if (IconLeft && IconRight) {
        return '80%'
    } else if (IconLeft || IconRight) {
        return '90%'
    } else { 
        return '100%'
    }        
}
     
    return (

        <Fragment>
        <Text style={style.titleInput}>{title}</Text>
         <View style={style.boxInput}>
        
        {IconLeft && iconLeftName &&(
        <TouchableOpacity style={style.icon} onPress={onIconLeftPress}>
            <IconLeft name={iconLeftName as any} size={20} color={themas.colors.gray} style={style.icon} />
        </TouchableOpacity>
        )}

        <TextInput
        style={style.input}
        {...rest}
         />

        {IconRight && iconRightName && (
        <TouchableOpacity style={style.icon} onPress={onIconRightPress}>
            <IconRight name={iconRightName as any} size={20} color={themas.colors.gray} style={style.icon} />
        </TouchableOpacity>  
        )}
        

   
        </View>
    </Fragment>
    )
});