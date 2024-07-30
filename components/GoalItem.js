import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem({ courseGoals, onDeleteGoal }) {

  function onSelectItem(id) {
    onDeleteGoal(id)
  };


  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <Pressable onPress={onSelectItem.bind(this, itemData.item.id)}>
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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

export default GoalItem;
