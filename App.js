import { useState } from 'react';
import {
  Button,
  StyleSheet,
  View
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);
 
  function goalSubmitHandler(enteredInputvalue) {
    setCourseGoals((currentGoals) => [...currentGoals, {text: enteredInputvalue, id: Math.random().toString()}])
  }

  function deleteGoalHandler(id) {
    setCourseGoals(presentGoals => { 
      return presentGoals.filter((goal) => goal.id !== id)
    })
  }

  function closeModalHandler() {
    setIsModalShown(false)
  }


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Button title='Add new Goal' onPress={ () => setIsModalShown(true)} />
      </View>
      <GoalInput onAddGoal={goalSubmitHandler} visible={isModalShown} onCloseModal={closeModalHandler} />
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
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginBottom: 10,
    justifyContent: 'center'
  }
});
