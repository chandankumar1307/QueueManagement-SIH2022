import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';

export default function ProfileButton() {
    const navigation = useNavigation();
    const openProfilePage = () => navigation.navigate('Profile');
    return (
      <TouchableWithoutFeedback onPress={openProfilePage}>
        <Image style={styles.profile} source={require('../assets/blankprofile.png')}/>
      </TouchableWithoutFeedback>
    );
  }

const styles = StyleSheet.create({
    profile: {
        width: 30,
        height: 30,
        borderRadius: 60,
        overflow: "hidden",
        borderWidth: 1.1,
        borderColor: "black",
        marginRight: 20,
      
    },  
});