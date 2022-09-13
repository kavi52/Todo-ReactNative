import React, { useState } from 'react'
import { Alert, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { deleteToDo, editTodo } from '../../redux/slices/todoSlice';
import { useToast } from "react-native-toast-notifications";
import { AntDesign } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function ListTodo() {
    const { todoList } = useSelector((state) => state?.todo);
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [content, setContent] = useState('')
    const [id, setId] = useState('')
    const toast = useToast();

    const handleEdit = () => {
        if (!content) {
            Alert.alert(
                'OPPS!!', 'Task Can Not Be Empty', [
                { text: 'Understood', onPress: () => console.log('closed') }
            ])

            return;
        }

        dispatch((editTodo({ content, id })));
        setModalVisible(false)
        toast.show("Task Edited successfully!!!", {
            type: "success",
            placement: "top",
            duration: 4000,
            offset: 30,
            animationType: "slide-in",
        });
    }

    const handleEditOpen = (id, content) => {
        setContent(content)
        setId(id)
        setModalVisible(true)
    }

    const handleDelete = (id) => {
        dispatch(deleteToDo(id))
        toast.show("Task deleted successfully!!!", {
            type: "success",
            placement: "top",
            duration: 4000,
            offset: 30,
            animationType: "slide-in",
        });
    }

    return (
        <View style={styles.taskList}>
            {todoList?.length ?
                <FlatList
                    data={todoList}
                    keyExtractor={(item, index) => { item.id }}
                    renderItem={({ index, item }) => (
                        <View key={item.id} style={styles?.container}>

                            <View>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="green"
                                    unfillColor="#FFFFFF"
                                    text={item?.content ?? ""}
                                    iconStyle={{ borderColor: "red" }}
                                    innerIconStyle={{ borderWidth: 2 }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                                    onPress={(isChecked) => {
                                        if(isChecked){
                                            toast.show("Task Marked as Complete!!!", {
                                                type: "success",
                                                placement: "top",
                                                duration: 4000,
                                                offset: 30,
                                                animationType: "slide-in",
                                            });
                                        }else{
                                            toast.show("Task Marked as Incomplete!!!", {
                                                type: "Warning",
                                                placement: "top",
                                                duration: 4000,
                                                offset: 30,
                                                animationType: "slide-in",
                                            });
                                        }

                                    }}
                                />

                            </View>



                            <View style={styles?.action}>
                                <TouchableOpacity
                                    onPress={() => handleEditOpen(item.id, item.content)}
                                    style={styles.button}
                                >
                                    <AntDesign name="edit" size={20} color="blue" />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => handleDelete(item?.id)}
                                    style={styles.button}
                                >
                                    <AntDesign name="delete" size={20} color="red" />
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                /> :
                <View>
                    <Text >Task Not Found!!!!</Text>
                </View>
            }

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Edit Task List!</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setContent(text)}
                            value={content}
                            name="content"
                        />

                        <View style={styles?.container}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                }}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={handleEdit}
                            >
                                <Text style={styles.textStyle}>Done</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "90%"

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 6,
        borderColor: "gray"
    },
    error: {
        color: "red",
        margin: 20,
    },
    button: {
        height: 40,
        backgroundColor: "#DDDDDD",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 2
    },
    task: {
        width: 80,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "#abc0d5",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 350,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 250
    },
    taskList: {
        margin: 40,
        textAlign: "center",
        borderRadius: 20,
    },
    action: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',

    },
    modalText: {
        marginBottom: 30,
        fontSize: 28
    }
});