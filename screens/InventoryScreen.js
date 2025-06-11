import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

export default function InventoryScreen() {
    const [activeTab, setActiveTab] = useState('Garn');

    const renderTabContent = () => {
        if (activeTab === 'Garn') {
            return <Text style={styles.contentText}></Text>;
        } else if (activeTab === 'Oppskrifter') {
            return <Text style={styles.contentText}></Text>;
        } else if (activeTab === 'Diagrammer') {
            return <Text style={styles.contentText}></Text>;
        }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lager</Text>

      <View style = {styles.tabContainer}>
        {['Garn', 'Oppskrifter', 'Diagrammer'].map((tab) => (
            <TouchableOpacity
                key={tab}
                style={[styles.tabButton, activeTab === tab && styles.activeTab]}
                onPress={() => setActiveTab(tab)}
            >
                <Text style= {styles.tabText}>{tab}</Text>
            </TouchableOpacity>
        ))}
        </View>
        <View style={styles.contentContainer}>
            {renderTabContent()}
        </View>
    </View>
  );
}
//prøver
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'left' },
    tabContainer: { flexDirection: 'row', marginBottom: 16 },
    tabButton: {
      flex: 1,
      paddingVertical: 10,
      backgroundColor: '#ccc',
      alignItems: 'center',
      marginRight: 5,
      borderRadius: 5,
    },
    activeTab: {
      backgroundColor: '#6a5acd',
    },
    tabText: { color: 'white', fontWeight: 'bold' },
    contentContainer: { padding: 10 },
    contentText: { fontSize: 18 },
  });
