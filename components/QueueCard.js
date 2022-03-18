import {useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";

function QueueCardPopUp({name, number, visible, onPress}) {
    return (
        <Modal 
        animationType="slide" 
        transparent={true} 
        visible={visible}>

            <View style={styles.modal}>

                <View style={styles.modalBar}>
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.square}>
                            <Text>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Text>{name}</Text>
                <Text>Queue number: {number}</Text>
                <Text>Queue Desicription and Other Deatils:</Text>
            </View>
        </Modal>
    );
}

export default function QueueCard( {name, number} ) {
    const [modalVisible, setModalVisible] = useState(false);
    const onPress = () => modalVisible ? setModalVisible(false) : setModalVisible(true);

    return (
        <TouchableOpacity onPress={onPress}>
            <QueueCardPopUp visible={modalVisible} name={name} number={number} onPress={onPress} />

            <View style={styles.view}>

                <View style={styles.viewLeft}>
                    {/* Square box containing the queue number */}
                    <View style={styles.square}>
                        <Text>{number}</Text>
                    </View>
                </View>
                
          

                <View style={styles.viewRight}>
                    <Text style={styles.text}>{name}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
   
        backgroundColor: '#EDEDED',
        padding: 15,
        borderRadius: 8,
        marginBottom: 14,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,  
        elevation: 5,

        width: 350,
        height: 80,
        maxWidth: '80%'
    
    },

    square: {
        width: 32,
        height: 32,
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        position: 'absolute',
        left: 20,
    },

    viewRight: {
        maxWidth: '95%',
        justifyContent: 'flex-end',
        paddingLeft: 65,
    },

    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    modal: {
        width: '80%',
        height: '50%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#E8E8E8',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 200
    },

    modalBar: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        paddingHorizontal: 5,
        paddingVertical: 5,
    }
});