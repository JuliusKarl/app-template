import React from 'react';
import { 
   View, 
   Text, 
   StyleSheet 
} from 'react-native';

const Header = () => {
    return (
        <View>
            <Text style={styles.title}>Habt</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        paddingTop: 30,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#076b00',
        fontFamily: 'Questrial'
    }
})

export default Header;