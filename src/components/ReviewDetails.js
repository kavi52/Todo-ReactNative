import { StyleSheet, Text, View, Button } from 'react-native'

export default function ReviewDetails({ navigation }) {

    const pressHandler = () => { 
        // navigation.navigate('Todo')
        navigation.push('Todo')
     }

    return (
        <View>
            <Text>Welcome To Todo Management</Text>
            <Button title="Go To Task" onPress={pressHandler} />
        </View>
    )
}
