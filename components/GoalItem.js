import { Pressable, StyleSheet, Text, View } from "react-native";

const  GoalItem = (props) => {
    return(
        <Pressable onPress={props.onDeleteItem.bind(this,props.id)}>
            <View style={ styles.goalItem }>
                <Text style={ styles.goalItemText } >{ props.text }</Text>
            </View>
        </Pressable>
    )    
}
export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius: 5,
        backgroundColor: "#5e0acc",
        padding: 8,
       
      },
      goalItemText:{
        color:"#fff"
      }
});