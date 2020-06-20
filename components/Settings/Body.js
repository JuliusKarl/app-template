import React from 'react';
import { 
   View, 
   Text, 
   StyleSheet 
} from 'react-native';


const Body = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.bodyText}>
                Settings Body
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        width: '100%'
    },
    bodyText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Questrial'
    }
})

export default Body;