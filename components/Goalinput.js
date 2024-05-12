import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {

    const [ enteredGoalText, setEnteredGoalText ]  = useState("");

    function TextInputHandler( enteredText ){
        setEnteredGoalText( enteredText )
    }

    function AddGoalsHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
      }

    return(
        <View style={ styles.inputContainer }> 
            <TextInput style={ styles.textInput } 
            placeholder='your cource goal!!' 
            onChangeText={ TextInputHandler }
            value={enteredGoalText} />
            <Button title='Add Goal' onPress={ AddGoalsHandler }/>
        </View>
    );
}

export default GoalInput;

const styles= StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBlockColor: "#cccccc"
      },
      textInput:{
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "65%",
        marginRight: 8,
        padding: 8,
      },

});