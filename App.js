import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/Goalinput';

export default function App() {

  
  const [ courseGoal, setCourseGoal ] = useState([]);

  

  function AddGoalsHandler(enteredGoalText){
    setCourseGoal( currentCourseGoal => [ ...currentCourseGoal, { text: enteredGoalText, id: Math.random().toString() }]);
  }

  return (
    <View style={ styles.appContainer }>
      
      <GoalInput onAddGoal={ AddGoalsHandler } />
      <View style={ styles.goalsContainer }>
        <FlatList 
        data={ courseGoal }
        renderItem={ itemData => { 
          return  <GoalItem text={itemData.item.text} />
          }
        }
        keyExtractor={( item ) => { return item.id }}
        />    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    padding: 40,
  },
  
  goalsContainer:{
    flex: 5,
  },
  
});