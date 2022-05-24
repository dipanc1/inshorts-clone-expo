import { StatusBar, StyleSheet, Text, View } from 'react-native';
import InshortTabs from './components/InshortTabs';

export default function App() {
  return (
    <View style={{...styles.container,backgroundColor:'#282c35'}}>
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
