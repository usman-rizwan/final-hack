import React, { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { firebase } from "../../firebase/config";

export default function Response(props , navigation) {


  const entityRef = firebase.firestore().collection("entities");
  const userID = props.extraData.id;




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
    
      <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
        <Text style={styles.buttonText} onPress={onFooterLinkPress}>Submit</Text>
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
