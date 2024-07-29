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

export default function App() {
  const [enteredInputvalue, setEnteredInputvalue] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalTextInputHandler(enteredValue) {
    setEnteredInputvalue(enteredValue);
  }

  function goalSubmitHandler() {
    setCourseGoals((currentGoals) => [...currentGoals, enteredInputvalue]);
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
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item}</Text>
      </View>
      }} />
      </View>
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
  },
  goalsContainer: {
    flex: 4
  },

  goalItem: {
    height: 40,
    backgroundColor: '#134B70',
    borderRadius: 10,
    //borderColor: '#EEEEEE',
    // numberOfLines: 1,
    // ellipsizeMode: "tail",
    // width: '100%'
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center'
  },
  goalText: {
    color: 'white'
  }
});
