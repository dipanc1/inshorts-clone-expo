import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { } from 'react-native-web';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TopNavigation = ({ index, setIndex }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: '#282c35' }}>
      {index === 0 ?
        <TouchableOpacity style={styles.left}>
          <Text style={{ ...styles.text, color: '#ffc107' }}>
            <MaterialCommunityIcons
              name='theme-light-dark'
              size={30}
              color='#ffc107'
            />
          </Text>
        </TouchableOpacity>
        : <>
        </>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
  },
  left:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80,
  },
  text:{
    fontSize: 20,
  }
});

export default TopNavigation