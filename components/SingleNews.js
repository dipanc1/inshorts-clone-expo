import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { NewsContext } from '../API/Context';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


const SingleNews = ({ item, index }) => {
    
    const { darkTheme } = React.useContext(NewsContext);

    return (
        <View style={{
            width: windowWidth,
            height: windowHeight,
            transform: [{ scaleY: -1 }],
        }}>
            <Image
                source={{ uri: item.urlToImage }}
                style={{
                    width: windowWidth,
                    height: '45%',
                    resizeMode: 'cover',
                }}
            />
            <View style={{
                ...styles.description,
                backgroundColor: darkTheme ?'#282c35': 'white',
            }}>
                <Text style={{ ...styles.title, color: darkTheme ? 'white' : 'black' }}>{item.title}</Text>
                <Text style={{ ...styles.content, color: darkTheme ? 'white' : 'black' }}>{item.description}</Text>
                <Text style={{ color: darkTheme ? 'white' : 'black' }}>
                    Short by:
                    <Text>
                        {item.author ?? "unknown"}
                    </Text>
                </Text>
                <ImageBackground
                    blurRadius={30}
                    source={{ uri: item.urlToImage }}
                    style={styles.footer}
                >
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL(item.url);
                        }}
                    >
                        <Text style={{ ...styles.button, color: darkTheme ? 'white' : 'black' }}>
                            '{item?.content?.slice(0, 45)}...'
                        </Text>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: 'bold', color: darkTheme ? 'white' : 'black'
                        }}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 15,
        paddingBottom: 10,
    },
    button: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    footer: {
        width: windowWidth,
        height: 80,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
    },
    description: {
        padding: 15,
        flex: 1,
    }
})

export default SingleNews