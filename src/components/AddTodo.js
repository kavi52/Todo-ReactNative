import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/slices/todoSlice";
import { useToast } from "react-native-toast-notifications";

export default function AddTodo() {

    const dispatch = useDispatch();
    const [todo, setTodo] = useState('')
    const toast = useToast();

    const handleChange = (inputText) => {
        setTodo(inputText)
    }

    const add = () => {
        if (!todo) {
            Alert.alert(
                'OPPS!!', 'Task Can Not Be Empty',[
                    {text: 'Understood', onPress:()=>console.log('closed')}
                ]
            )
            return;
        }
        dispatch(addToDo({ newContent: todo }));
        setTodo('')
        toast.show("Task Added successfully!!!", {
            type: "success",
            placement: "top",
            duration: 4000,
            offset: 30,
            animationType: "slide-in",
        });
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.header}>Plan for Today!!!!!!!</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange}
                    value={todo}
                    name="content"
                    placeholder="Please Enter Your Task"
                />
                <TouchableOpacity
                    onPress={add}
                    style={styles.button}
                >
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor: "#B4C7EE",
        color: "white",
        width: "100%",
        paddingTop: 100,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    button: {
        height: 40,
        backgroundColor: "orange",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5
    },
    header:{
        fontSize: 30,
        display: "flex",
        justifyContent:"center",
        alignItems:'center',
        color:"#3A3938",
        textAlign:"center",
        fontWeight: "bold"
    }
});

