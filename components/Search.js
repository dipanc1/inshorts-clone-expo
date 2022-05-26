import { View, TextInput, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { NewsContext } from '../API/Context'
import { Entypo } from '@expo/vector-icons'
import SingleNews from './SingleNews';

const Search = () => {

    const {
        news: { articles },
        darkTheme
    } = React.useContext(NewsContext);

    const [searchResults, setSearchResults] = React.useState([]);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [currentNews, setCurrentNews] = React.useState();

    const handleModal = (n) => {
        setModalVisible(true);
        setCurrentNews(n);
    }

    const handleSearch = (text) => {
        if (!text) {
            setSearchResults([]);
            return;
        }
        const results = articles.filter(article => article.title.toLowerCase().includes(text.toLowerCase()));
        setSearchResults(results);
    }


    return (
        <View style={{ width: "100%", position: "relative" }}>
            <TextInput
                style={{
                    ...styles.search,
                    backgroundColor: darkTheme ? "black" : "lightgrey",
                    color: darkTheme ? "white" : "black"
                }}
                placeholder="Search"
                onChangeText={(text) => {
                    handleSearch(text)
                }}
                placeholderTextColor={darkTheme ? "white" : "grey"}
            />


            <View style={styles.searchResults}>
                {searchResults.slice(0, 10).map((m) => (
                    <TouchableOpacity
                        key={m.title}
                        activeOpacity={0.8}
                        onPress={() => {
                            handleModal(m)
                        }}
                    >
                        <Text style={{ ...styles.singleResult, color: darkTheme ? "white" : "black", backgroundColor: darkTheme ? "black" : "lightgrey" }}>{m.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        right: 0,
                        zIndex: 1,
                        marginTop: 50,
                    }}
                    onPress={() => {
                        setModalVisible(false);
                    }}
                >
                    <Entypo name="circle-with-cross" size={24} color="white" />
                    <View style={{
                        height: "100%",
                        transform: [{ scaleY: -1 }],
                    }}>
                        <SingleNews item={currentNews} />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 15,
    },
    searchResults: {
        position: "absolute",
        top: 50,
        zIndex: 1,
    },
    singleResult: {
        padding: 10,
        borderRadius: 5,
        margin: 0.5,
        shadowColor: "#000",
        elevation: 5,
    }
})

export default Search