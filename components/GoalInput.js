import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function GoalInput({ onAddGoal }) {
  const [enteredInputvalue, setEnteredInputvalue] = useState('');


  function goalTextInputHandler(enteredValue) {
    setEnteredInputvalue(enteredValue);
  }

  function goalSubmitHandler() {
    onAddGoal(enteredInputvalue);
    setEnteredInputvalue('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Write down your goal "
        onChangeText={goalTextInputHandler}
        value={enteredInputvalue}
      />
      <Button title="Add Goal" onPress={goalSubmitHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    width: '70%',
    padding: 8,
    marginRight: 8,
    borderRadius: 10
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginBottom: 10
  },
});
