import axios from "axios";
import React, { createContext } from "react";
import { getNewsAPI, getSourceAPI } from "./api";


export const NewsContext = createContext();

const Context = ({ children }) => {
    const [news, setNews] = React.useState([]);
    const [category, setCategory] = React.useState("general");
    const [index, setIndex] = React.useState(1);
    const [source, setSource] = React.useState();
    const [darkTheme, setDarkTheme] = React.useState(false);

    const fetchNews = async (reset = category) => {
        const { data } = await axios.get(getNewsAPI(reset))
        setNews(data);
        setIndex(1);
    }

    const fetchNewsBySource = async () => {
        try {
            const { data } = await axios.get(getSourceAPI(source))
            setNews(data);
            setIndex(1);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        fetchNews();
    }, [category])

    React.useEffect(() => {
        fetchNewsBySource();
    }, [source])


    return (
        <NewsContext.Provider value={{ darkTheme, setDarkTheme, news, index, setIndex, fetchNews, setCategory, setSource }}>
            {children}
        </NewsContext.Provider>
    );
};

export default Context;