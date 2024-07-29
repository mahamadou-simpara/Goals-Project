import { FlatList, StyleSheet, Text, View } from "react-native";

function GoalItem({courseGoals}) {
    return  <View style={styles.goalsContainer}>
    <FlatList data={courseGoals} renderItem={(itemData) => {
      return <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
    }} />
    </View>
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
 })

export default GoalItem;