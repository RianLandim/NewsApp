import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        {/* SlideBox */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={{
              uri:
                "https://neilpatel.com/wp-content/uploads/2016/04/readnews.jpg",
            }}
          />
        </View>
        <View style={styles.titlePageContainer}>
          <Text style={styles.title}>Tudo sobre a Saúde publica</Text>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.touchableView}>
            <TouchableOpacity
              style={styles.newsTouchable}
              onPress={() => navigation.navigate("SignUp")}
            >
              <View style={styles.tcInternView}>
                <View style={styles.imgInternView}>
                  <Image
                    style={styles.imgNewsLogo}
                    source={{
                      uri: "https://i.imgur.com/8IvsB1Z.jpg",
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.TitleNews}>Titulo da materia</Text>
                  <Text style={styles.TextSub}>
                    Aqui deve ser inserido uma previa do que será abordado na
                    materia!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.newsTouchable}
              onPress={() => navigation.navigate("Login")}
            >
              <View style={styles.tcInternView}>
                <View style={styles.imgInternView}>
                  <Image
                    style={styles.imgNewsLogo}
                    source={{
                      uri: "https://i.imgur.com/8IvsB1Z.jpg",
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.TitleNews}>Titulo da materia</Text>
                  <Text style={styles.TextSub}>
                    Aqui deve ser inserido uma previa do que será abordado na
                    materia!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsTouchable}>
              <View style={styles.tcInternView}>
                <View style={styles.imgInternView}>
                  <Image
                    style={styles.imgNewsLogo}
                    source={{
                      uri: "https://i.imgur.com/8IvsB1Z.jpg",
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.TitleNews}>Titulo da materia</Text>
                  <Text style={styles.TextSub}>
                    Aqui deve ser inserido uma previa do que será abordado na
                    materia!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsTouchable}>
              <View style={styles.tcInternView}>
                <View style={styles.imgInternView}>
                  <Image
                    style={styles.imgNewsLogo}
                    source={{
                      uri: "https://i.imgur.com/8IvsB1Z.jpg",
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.TitleNews}>Titulo da materia</Text>
                  <Text style={styles.TextSub}>
                    Aqui deve ser inserido uma previa do que será abordado na
                    materia!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsTouchable}>
              <View style={styles.tcInternView}>
                <View style={styles.imgInternView}>
                  <Image
                    style={styles.imgNewsLogo}
                    source={{
                      uri: "https://i.imgur.com/8IvsB1Z.jpg",
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.TitleNews}>Titulo da materia</Text>
                  <Text style={styles.TextSub}>
                    Aqui deve ser inserido uma previa do que será abordado na
                    materia!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsTouchable}>
              <View style={styles.tcInternView}>
                <View style={styles.imgInternView}>
                  <Image
                    style={styles.imgNewsLogo}
                    source={{
                      uri: "https://i.imgur.com/8IvsB1Z.jpg",
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.TitleNews}>Titulo da materia</Text>
                  <Text style={styles.TextSub}>
                    Aqui deve ser inserido uma previa do que será abordado na
                    materia!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
