import { StyleSheet, Text, View } from 'react-native'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

export default function Todo() {
    return (
        <View style={styles.container}>
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
        paddingBottom:150
        // justifyContent: 'center',
    },
});