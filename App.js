import { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function goalSubmitHandler(enteredInputvalue) {
    setCourseGoals((currentGoals) => [...currentGoals, {text: enteredInputvalue, id: Math.random().toString()}])
  }

  function deleteGoalHandler(id) {
    setCourseGoals(presentGoals => { 
      return presentGoals.filter((goal) => goal.id !== id)
    })
  }


  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={goalSubmitHandler} />
      <GoalItem courseGoals={courseGoals} onDeleteGoal={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15
  },
  
  textInput: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    width: '70%',
    padding: 8,
    marginRight: 8,
    borderRadius: 10
  }
});
