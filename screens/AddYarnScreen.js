// AddYarnScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddYarnScreen({ onCancel, onSave }) {
  const [type, setType] = useState('');
  const [producer, setProducer] = useState('');
  const [gauge, setGauge] = useState('');
  const [needleSize, setNeedleSize] = useState('');
  const [length, setLength] = useState('');
  const [weight, setWeight] = useState('');
  const [color, setColor] = useState('');
  const [lot, setLot] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <View style={styles.full}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onCancel}>
          <Ionicons name="arrow-back" size={24} color="#424790" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Legg til garn</Text>
      </View>

      <ScrollView style={styles.form}>
        {/* Image picker placeholder */}
        <View style={styles.imageBox}>
          <Text style={styles.imageText}>Legg til bilde</Text>
        </View>

        {/* Info section */}
        <Text style={styles.sectionTitle}>Info</Text>

        <Text style={styles.label}>Type garn</Text>
        <TextInput style={styles.input} placeholder="F.eks. Merinoull" value={type} onChangeText={setType} />

        <Text style={styles.label}>Produsent</Text>
        <TextInput style={styles.input} placeholder="F.eks. Dale Garn" value={producer} onChangeText={setProducer} />

        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>Strikkefasthet</Text>
            <TextInput style={styles.input} placeholder="f.eks. 22 m" value={gauge} onChangeText={setGauge} />
          </View>
          <View style={styles.half}>
            <Text style={styles.label}>Pinnestørrelse</Text>
            <TextInput style={styles.input} placeholder="f.eks. 4 mm" value={needleSize} onChangeText={setNeedleSize} />
          </View>
        </View>

        <Text style={styles.label}>Lengde (meter)</Text>
        <TextInput style={styles.input} placeholder="f.eks. 200" value={length} onChangeText={setLength} />

        <Text style={styles.label}>Mengde (gram)</Text>
        <TextInput style={styles.input} placeholder="f.eks. 150" value={weight} onChangeText={setWeight} />

        <Text style={styles.label}>Farge</Text>
        <TextInput style={styles.input} placeholder="F.eks. Rød" value={color} onChangeText={setColor} />

        <Text style={styles.label}>Parti</Text>
        <TextInput style={styles.input} placeholder="F.eks. 12345" value={lot} onChangeText={setLot} />

        <Text style={styles.label}>Notater</Text>
        <TextInput
          style={[styles.input, styles.notes]}
          placeholder="Skriv notater…"
          multiline
          value={notes}
          onChangeText={setNotes}
        />
      </ScrollView>

      <TouchableOpacity style={styles.saveButton} onPress={() => onSave({ type, producer, gauge, needleSize, length, weight, color, lot, notes })}>
        <Text style={styles.saveButtonText}>Lagre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#F7F0EF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#424790',
    marginLeft: 16,
  },
  form: {
    flex: 1,
    paddingHorizontal: 16,
  },
  imageBox: {
    height: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C2CDFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  imageText: {
    color: '#424790',
    fontSize: 20,
    fontWeight: '510',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '510',
    color: '#424790',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: '#424790',
    marginBottom: 4,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F1A8C6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  half: { width: '48%' },
  notes: { height: 120, textAlignVertical: 'top' },
  saveButton: {
    backgroundColor: '#C2CDFF',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    margin: 16,
  },
  saveButtonText: {
    fontSize: 24,
    fontWeight: '590',
    color: '#424790',
  },
});
