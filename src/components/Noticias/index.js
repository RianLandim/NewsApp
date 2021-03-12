import axios from "axios";
import React from "react";
import { Text, View } from "react-native";

axios.get("http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=77d1c7a9ffef4ec2bf23b2ec633f2537")

export default function Noticias(){


    return(
        <View>
            <Text>Teste</Text>
        </View>
    )
}







