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

export default function App() {
  const [enteredInputvalue, setEnteredInputvalue] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalTextInputHandler(enteredValue) {
    setEnteredInputvalue(enteredValue);
  }

  function goalSubmitHandler() {
    setCourseGoals((currentGoals) => [...currentGoals, {text: enteredInputvalue, id: Math.random().toString()}]);
    setEnteredInputvalue('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write down your goal "
          onChangeText={goalTextInputHandler}
        />
        <Button title="Add Goal" onPress={goalSubmitHandler} />
      </View>
      <GoalItem courseGoals={courseGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginBottom: 10
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
