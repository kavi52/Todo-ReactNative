import { StyleSheet, Text, View, Button } from 'react-native'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

export default function Todo({ navigation }) {
    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Button title="Go Back" onPress={pressHandler} />

            <AddTodo></AddTodo>
            <ListTodo></ListTodo>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddd',
        alignItems: 'center',
        paddingBottom: 150
        // justifyContent: 'center',
    },
});