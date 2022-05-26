import { useWindowDimensions } from 'react-native'
import React, { useContext } from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen'
import NewsScreen from '../Screens/NewsScreen'
import TopNavigation from './TopNavigation';
import { NewsContext } from '../API/Context';

const InshortTabs = () => {

    const layout = useWindowDimensions()

    const { index, setIndex, darkTheme } = useContext(NewsContext)

    const [routes] = React.useState([
        { key: 'first', title: 'Discover' },
        { key: 'second', title: 'News' },
    ]);

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() =>
                <TopNavigation
                    index={index}
                    setIndex={setIndex}
                />}
        />
    )
}

export default InshortTabs