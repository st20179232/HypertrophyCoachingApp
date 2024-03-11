import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';

import muscleFront from '../assets/muscleFront.png';
import muscleBack from '../assets/muscleBack.png';
import flipButton from '../assets/flipButton.png';
import chestImage from '../assets/muscleChest.png';
import absImage from '../assets/muscleAbs.png';
import deltsImage from '../assets/muscleDelts.png';

export default function Learn() {
  const [isFront, setIsFront] = useState(true);
  const [chestModalVisible, setChestModalVisible] = useState(false);
  const [absModalVisible, setAbsModalVisible] = useState(false);

  const flipImage = () => {
    setIsFront(!isFront);
  };

  const handleChestClick = () => {
    setChestModalVisible(true);
  };

  const handleDeltClick = () => {
    alert('Delt area clicked');
  };

  const handleBicepClick = () => {
    alert('Bicep area clicked');
  };

  const handleForearmClick = () => {
    alert('Forearm area clicked');
  }
  
  const handleAbsClick = () => {
    setAbsModalVisible(true);
  };

  const handleQuadsClick = () => {
    alert('Quads area clicked');
  }

  const handleUpperBackClick = () => {
    alert('Upper back area clicked');
  }

  const handleLatsClick = () => {
    alert('Lats area clicked');
  }

  const handleGlutesClick = () => {
    alert('Glutes area clicked');
  }

  const handleHamstringsClick = () => {
    alert('Hamstrings area clicked');
  }

  const handleCalvesClick = () => {
    alert('Calves area clicked');
  }

  const handleTricepClick = () => {
    alert('Tricep area clicked');
  }
  
  function MuscleModal({modalVisible, setModalVisible, muscleName, muscleInfo, imageUri}) {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{muscleName}</Text>
            <Image source={imageUri} style={{width: 222, height: 120}} />
            <Text style={styles.muscleInfo}>{muscleInfo}</Text>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#33363F" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.container}>
        <MuscleModal 
        modalVisible={chestModalVisible} 
        setModalVisible={setChestModalVisible} 
        muscleName="Chest" 
        muscleInfo="Some information about the chest muscles..."
        imageUri={chestImage}
      />
      <MuscleModal 
        modalVisible={absModalVisible} 
        setModalVisible={setAbsModalVisible} 
        muscleName="Abs" 
        muscleInfo="Some information about the abs muscles..."
        imageUri={absImage}
      />
       
      <Image source={isFront ? muscleFront : muscleBack} style={styles.chart} />
      {isFront && (
        <>
          <TouchableOpacity style={styles.chestArea} onPress={handleChestClick} />
          <TouchableOpacity style={styles.bicepArea1} onPress={handleBicepClick} />
          <TouchableOpacity style={styles.bicepArea2} onPress={handleBicepClick} />
          <TouchableOpacity style={styles.absArea} onPress={handleAbsClick} />
          <TouchableOpacity style={styles.quadsArea} onPress={handleQuadsClick} />
        </>
      )}
      {!isFront && (
        <>
          <TouchableOpacity style={styles.upperBackArea} onPress={handleUpperBackClick} />
          <TouchableOpacity style={styles.tricepArea1} onPress={handleTricepClick} />
          <TouchableOpacity style={styles.tricepArea2} onPress={handleTricepClick} />
          <TouchableOpacity style={styles.latsArea} onPress={handleLatsClick} />
          <TouchableOpacity style={styles.glutesArea} onPress={handleGlutesClick} />
          <TouchableOpacity style={styles.hamstringsArea} onPress={handleHamstringsClick} />
        </>
      )}
      <TouchableOpacity style={styles.flipButtonContainer} onPress={flipImage}>
        <Image source={flipButton} style={styles.flipButton} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deltArea1} onPress={handleDeltClick} />
      <TouchableOpacity style={styles.deltArea2} onPress={handleDeltClick} />
      <TouchableOpacity style={styles.forearmArea1} onPress={handleForearmClick} />
      <TouchableOpacity style={styles.forearmArea2} onPress={handleForearmClick} />
      <TouchableOpacity style={styles.calvesArea} onPress={handleCalvesClick} />
    </View>
  );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "#33363F",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 10,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "#C2CAF2",
      fontWeight: "bold",
      textAlign: "center"
    },
    muscleInfo: {
      color: "#C2CAF2",
      marginBottom: 15,
      textAlign: "center"
    },
    modalText: {
      color: "#C2CAF2",
      marginBottom: 15,
      textAlign: "center"
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2025'
  },
  chart: {
    width: '65%',  // Adjust as needed
    height: '65%',  // Adjust as needed
  },
  flipButtonContainer: {
    position: 'absolute',
    top: '5%',  // Adjust as needed
    right: '5%',  // Adjust as needed
  },
  flipButton: {
    height: 65,
    width: 65,
  },
  chestArea: {
    position: 'absolute',
    top: '29%',  // Adjust as needed
    left: '39%',  // Adjust as needed
    width: '22%',  // Adjust as needed
    height: '6%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  deltArea1: {
    position: 'absolute',
    top: '28%',  // Adjust as needed
    left: '30%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '5%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  deltArea2: {
    position: 'absolute',
    top: '28%',  // Adjust as needed
    left: '60%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '5%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  bicepArea1: {
    position: 'absolute',
    top: '33%',  // Adjust as needed
    left: '28%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  bicepArea2: {
    position: 'absolute',
    top: '33%',  // Adjust as needed
    left: '62%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  forearmArea1: {
    position: 'absolute',
    top: '39%',  // Adjust as needed
    left: '24%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  forearmArea2: {
    position: 'absolute',
    top: '39%',  // Adjust as needed
    left: '67%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  absArea: {
    position: 'absolute',
    top: '35%',  // Adjust as needed
    left: '41%',  // Adjust as needed
    width: '18%',  // Adjust as needed
    height: '10%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  quadsArea: {
    position: 'absolute',
    top: '48%',  // Adjust as needed
    left: '36%',  // Adjust as needed
    width: '28%',  // Adjust as needed
    height: '13%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  upperBackArea: {
    position: 'absolute',
    top: '26%',  // Adjust as needed
    left: '39%',  // Adjust as needed
    width: '23%',  // Adjust as needed
    height: '8%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  latsArea: {
    position: 'absolute',
    top: '34%',  // Adjust as needed
    left: '38%',  // Adjust as needed
    width: '25%',  // Adjust as needed
    height: '9%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  tricepArea1: {
    position: 'absolute',
    top: '33%',  // Adjust as needed
    left: '28%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  tricepArea2: {
    position: 'absolute',
    top: '33%',  // Adjust as needed
    left: '63%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  glutesArea: {
    position: 'absolute',
    top: '44%',  // Adjust as needed
    left: '38%',  // Adjust as needed
    width: '25%',  // Adjust as needed
    height: '8%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  hamstringsArea: {
    position: 'absolute',
    top: '52%',  // Adjust as needed
    left: '38%',  // Adjust as needed
    width: '25%',  // Adjust as needed
    height: '10%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
  calvesArea: {
    position: 'absolute',
    top: '63%',  // Adjust as needed
    left: '38%',  // Adjust as needed
    width: '25%',  // Adjust as needed
    height: '10%',  // Adjust as needed
    borderColor: 'red',
    borderWidth: 2,
  },
});

