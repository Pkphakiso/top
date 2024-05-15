import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/Goalinput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function StartAddGoalHandler() {
    setModalIsVisible(true);
  }
  function EndAddGoalHandler() {
    setModalIsVisible(false);
  }

  function AddGoalsHandler(enteredGoalText) {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteCourseGoal(id) {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#5e0acc"
          onPress={StartAddGoalHandler}
        />
        <GoalInput
          onAddGoal={AddGoalsHandler}
          visible={modalIsVisible}
          onCancel={EndAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteCourseGoal}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 40,
  },

  goalsContainer: {
    flex: 5,
  },
});
