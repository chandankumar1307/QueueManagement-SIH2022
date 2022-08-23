import { StyleSheet, Text, Pressable } from "react-native";

export default function QueueType( { RenderIcon, text, available, selected } ) {

    return (
        <Pressable 
            style={
                available ? 
                    selected ? styles.containerSelected : styles.container
                    : styles.containerUnavailable
            }
            disabled={!available}
            onPress={() => console.log("Not implemented.")}
            
        >

                <RenderIcon />
                <Text>{available ? text : "Unavailable"}</Text>

        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 15,
        aspectRatio: 1.3,
        borderColor: "black",
        borderWidth: 1.5,
        marginHorizontal: 5,
        backgroundColor: "#EEE9E9",
    },

    containerUnavailable: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 15,
        aspectRatio: 1.3,
        borderColor: "black",
        borderWidth: 0.3,
        marginHorizontal: 5,
        backgroundColor: "#EAEAEA", 
    },

    containerSelected: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 15,
        aspectRatio: 1.3,
        borderColor: "#7CCD7C",
        borderWidth: 2.5,
        marginHorizontal: 5,
        backgroundColor: "#EEE9E9",
    },
});