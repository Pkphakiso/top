import { StyleSheet, Text, View } from "react-native";

const  GoalItem = (props) => {
    return(
        <View style={ styles.goalItem }>
            <Text style={ styles.goalItemText } >{ props.text }</Text>
        </View>
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