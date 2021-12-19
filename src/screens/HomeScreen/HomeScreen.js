import React, { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { firebase } from "../../firebase/config";

export default function HomeScreen(props,navigation) {
  const [entityText, setEntityText] = useState("");
  const [names, setNames] = useState("");
  const [cnic, setCnic] = useState("");
  const [num_of_fam_members, setNum_of_fam_members] = useState("");
  const [entities, setEntities] = useState([]);
  const [income, setIncome] = useState([]);

  const entityRef = firebase.firestore().collection("entities");
  const userID = props.extraData.id;

  // const onFooterLinkPress = () => {
  //   navigation.navigate('Response')
  // }


  useEffect(() => {
    entityRef
      .where("authorID", "==", userID)
      .orderBy("createdAt", "desc")
      .onSnapshot(
        (querySnapshot) => {
          const newEntities = [];
          querySnapshot.forEach((doc) => {
            const entity = doc.data();
            entity.id = doc.id;
            newEntities.push(entity);
          });
          setEntities(newEntities);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const onAddButtonPress = () => {
    if (
      (entityText && entityText.length > 0) ||
      (names && names.length > 0) ||
      (cnic && cnic.length > 0) ||
      (num_of_fam_members && num_of_fam_members.length > 0) ||
      (income && setIncome.length > 0)
    ) {
      const data = {
        authorID: userID,
        Father_name: entityText,
        names: names,
        cinc: cnic,
        num_of_fam_members: num_of_fam_members,
        income: income
      };
      entityRef
        .add(data)
        .then((_doc) => {
          setNames("");
          setEntityText("");
          setCnic("");
          setNum_of_fam_members("");
          setIncome("");
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const renderEntity = ({ item, index }) => {
    return (
      <View style={styles.entityContainer}>
        <Text style={styles.entityText}>
          {index}. {item.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Your Detail</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setNames(text)}
        value={names}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        maxLength={25}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter father name"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEntityText(text)}
        value={entityText}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        maxLength={25}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter CNIC"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setCnic(text)}
        value={cnic}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        maxLength={11}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter family members"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setNum_of_fam_members(text)}
        value={num_of_fam_members}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        maxLength={2}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter monthly income"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setIncome(text)}
        value={income}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        maxLength={5}
      />

      <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
        <Text style={styles.buttonText} onPress={()=>{
          alert("Your response has been recorded")
        }}>Submit</Text>
      </TouchableOpacity>

      {entities && (
        <View style={styles.listContainer}>
          <FlatList
            data={entities}
            renderItem={renderEntity}
            keyExtractor={(item) => item.id}
            removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  );
}
