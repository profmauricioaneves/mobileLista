import React from "react";
import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity } from "react-native";
import { style } from "./styles";

type Props = TouchableHighlightProps & {
    text: string;
    loading?: boolean;
}

export function Button({text, loading,...rest}:Props) {
    return (
        <TouchableOpacity
        style={style.button}
        activeOpacity={0.6}
        >
            {loading?<ActivityIndicator/>
            :<Text style={style.textButton}>{text}</Text> 
        }
        </TouchableOpacity>
    )

}