import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function YarnManager() {
  const [yarnName, setYarnName] = useState('');
  const [yarns, setYarns] = useState([]);

  useEffect(() => {
    loadYarns();
  }, []);

  const saveYarns = async (newList) => {
    try {
      await AsyncStorage.setItem('yarns', JSON.stringify(newList));
    } catch (error) {
      console.error('Kunne ikke lagre garn', error);
    }
  };

  const loadYarns = async () => {
    try {
      const stored = await AsyncStorage.getItem('yarns');
      if (stored) setYarns(JSON.parse(stored));
    } catch (error) {
      console.error('Kunne ikke laste garn', error);
    }
  };

  const addYarn = () => {
    if (!yarnName.trim()) return;
    const newList = [...yarns, { id: Date.now().toString(), name: yarnName }];
    setYarns(newList);
    setYarnName('');
    saveYarns(newList);
  };

  return (
    <View>
      <TextInput
        placeholder="Legg til garn"
        value={yarnName}
        onChangeText={setYarnName}
        style={styles.input}
      />
      <Button title="Legg til" onPress={addYarn} />
      <FlatList
        data={yarns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 10,
    borderRadius: 4,
    borderColor: '#aaa',
  },
  item: {
    padding: 10,
    fontSize: 16,
  },
});
