import { Pressable, StyleSheet, Text, View } from "react-native";

const  GoalItem = (props) => {
    return(
        <View style={ styles.goalItem }>
            <Pressable android_ripple={{color:"#dddddd"}} onPress={props.onDeleteItem.bind(this,props.id)}>
                    <Text style={ styles.goalItemText } >{ props.text }</Text>
            </Pressable>
        </View>
    )    
}
export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius: 5,
        backgroundColor: "#5e0acc",
        
       
      },
      goalItemText:{
        padding: 8,
        color:"#fff",
      }
});