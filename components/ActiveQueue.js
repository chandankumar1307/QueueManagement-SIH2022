import { View, ScrollView, StyleSheet, Text, Image } from "react-native";

import QueueCard from "./QueueCard";

export default function ActiveQueues ( {queueState} ) {
    return (
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.view}>
                    <Text>Your Active Queues: </Text>
                </View>
                {
                    queueState.map((item, index) => {
                        return <QueueCard name={item.name} number={item.number} />
                    })
                }
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },

    scrollView: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        maxWidth: '95%',
    },

    text: {
        color: 'black',
        textTransform: 'uppercase',
        fontSize: 15,
        textAlign: 'center',
    },

    emptyBox: {
        paddingTop: 140,
        alignItems: 'center',
    },

    emptyIcon: {
        height: 80,
        width: 80,
        opacity: 0.5,
    }
});