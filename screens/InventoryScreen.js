// InventoryScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
//import YarnManager from '../components/YarnManager';
import AddYarnScreen from './AddYarnScreen';
import colors from '../styles/colors';

export default function InventoryScreen() {
  const [activeTab, setActiveTab] = useState('Garn');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null);

  const renderTabContent = () => {
    if (activeTab === 'Garn') {
      return ;
    } else if (activeTab === 'Oppskrifter') {
      return <Text style={styles.contentText}>Oppskrifter</Text>;
    } else if (activeTab === 'Diagrammer') {
      return <Text style={styles.contentText}>Diagrammer</Text>;
    }
  };

  //Fullskjerm for "legg til garn"-side
  if (modalType === 'Garn') {
    return (
        <AddYarnScreen
        onCancel={() => setModalType(null)}
        onSave={(newYarn) => {
            setModalType(null);
        }}
        />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lager</Text>

      <View style={styles.tabWrapper}>
        <View style={styles.tabBackground}>
          {['Garn', 'Oppskrifter', 'Diagrammer'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[styles.tabText, activeTab === tab && styles.activeTabText]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/*Legg til-knapp*/}
      <View style={styles.contentContainer}>{renderTabContent()}</View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.addButton} 
            onPress={() => {
                setModalVisible(true); //viser modal
                setModalType('null'); //tilbakestiller modalType
            }}
        >
            <View style={styles.plusVertical}/>
            <View style={styles.plusHorizontal}/>
        </TouchableOpacity>
      </View>

      {/*Overlay modal*/}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
                <Text style={styles.modalTitle}>Legg til garn</Text>
                
                {/*Garn*/}
                <TouchableOpacity style={styles.modalOption} onPress={() => {
                    setModalType('Garn');
                    setModalVisible(false);
                }}>
                    <Text style={styles.modalOptionText}>Garn</Text>
                </TouchableOpacity>

                {/*Oppskrift*/}
                <TouchableOpacity style={[styles.modalOption, { opacity: 0.5}]} disabled >
                    <Text style={styles.modalOptionText}>Oppskrift</Text>
                </TouchableOpacity>

                {/*Diagram*/}
                <TouchableOpacity style={[styles.modalOption, { opacity: 0.5}]} disabled >
                    <Text style={styles.modalOptionText}>Diagram</Text>
                </TouchableOpacity>
                <Pressable onPress={() => setModalVisible(false)}>
                    <Text style={styles.modalCancel}>Avbryt</Text>
                </Pressable>
            </View>
        </View>
      </Modal>
      {modalType === 'Garn' && (
        <AddYarnScreen
            onCancel={() => setModalType(null)}
            onSave={(newYarn) => {
                setModalType(null);
            }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 68, paddingHorizontal: 16 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left',
  },
  tabWrapper: { marginBottom: 16 },

  tabBackground: {
    flexDirection: 'row',
    backgroundColor: colors.lightBlue,
    padding: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.mediumBlue,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    color: colors.darkBlue,
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    fontWeight: '600',
  },
  contentContainer: { padding: 10 },
  contentText: { fontSize: 18 },

  bottomContainer:{
    padding: 16,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: colors.darkBlue,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: colors.darkBlueBorder,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  plusVertical: {
    width: 2.5,
    height: 20,
    backgroundColor: colors.white,
    position: 'absolute'
  },
  plusHorizontal: {
    width: 20,
    height: 2.5,
    backgroundColor: colors.white,
    position: 'absolute'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end' 
  },
  modalBox: {
    backgroundColor: colors.white,
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: '#E4E4E4'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: colors.darkBlue
  },
  modalOption: {
    paddingVertical: 12,
  },
  modalOptionText: {
    fontSize: 16,
    color: '#424790'
  },
  modalCancel: {
      textAlign: 'center',
      marginTop: 20,
      color: '#999'
  }
});
