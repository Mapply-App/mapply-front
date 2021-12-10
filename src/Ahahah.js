import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Messagerie () {

  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);


  return (
      <SafeAreaView  style={styles.container}>
        <TextInput style={styles.input} placeholder="Tapez un message..."/>
      </SafeAreaView>

  )
  }




const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent: "flex-end",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
    backgroundColor: "white",
    
  },
});

// export default function Messagerie() {
//   const [text, onChangeText] = React.useState("Useless Text");
//   const [number, onChangeNumber] = React.useState(null);

//   return (
//     <SafeAreaView>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="useless placeholder"
//         keyboardType="numeric"
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });