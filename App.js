import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoalText,setEnteredGoalTexty] = useState("");
  const [courseGoal,setCourseGoal] = useState([]);

  function TextInputHandler(enteredText){
    setEnteredGoalTexty(enteredText)
  }

  function AddGoalsHandler(){
    setCourseGoal(currentCourseGoal => [...currentCourseGoal, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}> 
        <TextInput style={styles.textInput} placeholder='your cource goal!!' onChangeText={TextInputHandler}/>
        <Button title='Add Goal' onPress={AddGoalsHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {
          courseGoal.map((goal)=>
            <Text key={goal}>{goal}</Text>
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    padding: 40,
  },
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
  goalsContainer:{
    flex: 5,
  }
});
