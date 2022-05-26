import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import Context, { NewsContext } from './API/Context';
import InshortTabs from './components/InshortTabs';

function App() {

  const { darkTheme } = useContext(NewsContext);

  return (
    <View style={{ ...styles.container, backgroundColor: darkTheme ? '#282c35' : 'white' }}>
      <InshortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
}