import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const TopNavigation = ({ index, setIndex }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: '#282c35' }}>
      {index === 0 ?
        (
          <TouchableOpacity style={styles.left}>
            <Text style={{ ...styles.text, color: '#ffc107' }}>
              <MaterialCommunityIcons
                name='theme-light-dark'
                size={24}
                color='#ffc107'
              />
            </Text>
          </TouchableOpacity>
        )
        : (
          <TouchableOpacity
            style={styles.left}
            onPress={() => setIndex(index === 0 ? 1 : 0)}
          >
            <SimpleLineIcons
              name='arrow-left'
              size={15}
              color='#ffc107'
            />
            <Text style={{ ...styles.text, color: 'lightgrey' }}>Discover</Text>
          </TouchableOpacity>
        )}

      <Text style={{ ...styles.center, color: 'white' }}>
        {index ? 'All News' : 'Discover'}
      </Text>
      {index ?
        (<TouchableOpacity style={styles.right}>
          <Text style={styles.text}>
            <AntDesign name='reload1' size={24} color='#ffc107' />
          </Text>
        </TouchableOpacity>)
        : (<TouchableOpacity style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <Text style={{ ...styles.text, color: 'white' }}>
            All News
          </Text>
          <SimpleLineIcons name='arrow-right' size={15} color='#ffc107' />
        </TouchableOpacity>)}
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
  left: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80,
  },
  right: {
    alignItems: 'flex-end',
    width: 80,
  },
  text: {
    fontSize: 20,
  },
  center: {
    fontSize: 16,
    fontWeight: '700',
    borderBottomColor: '#ffc107',
    borderBottomWidth:5,
    borderRadius: 10,
    paddingBottom: 6,
  }
});

export default TopNavigation