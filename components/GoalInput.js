import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

function GoalInput({ onAddGoal, visible, onCloseModal }) {
  const [enteredInputvalue, setEnteredInputvalue] = useState('');

  function goalTextInputHandler(enteredValue) {
    setEnteredInputvalue(enteredValue);
  }

  function goalSubmitHandler() {
    onAddGoal(enteredInputvalue);
    setEnteredInputvalue('');
    onCloseModal();
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/Goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Write down your goal "
          onChangeText={goalTextInputHandler}
          value={enteredInputvalue}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={goalSubmitHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438r',
    width: '90%',
    height: '5%',
    padding: 8,
    marginRight: 8,
    borderRadius: 10
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    // marginBottom: 10,
    backgroundColor: '#311b6b'
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 15
  },
  button: {
    marginHorizontal: 20
  },

  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});
