import React from "react";
import { Image, Text, View } from "react-native";



export default function Noticias({news}){


    return(
        <View>
            <View>
                <Image source={{uri: news.urlToImage}}  />
            </View>
            <View>
                <Text>{news.publishedAt}</Text>
            </View>
        </View>
    )
}







