import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';

import muscleFront from '../assets/muscleFront.png';
import muscleBack from '../assets/muscleBack.png';
import flipButton from '../assets/flipButton.png';
import chestImage from '../assets/muscleChest.png';
import absImage from '../assets/muscleAbs.png';
import deltsImage from '../assets/muscleDelts.png';
import bicepsImage from '../assets/muscleBiceps.png';
import forearmsImage from '../assets/muscleForearms.png';
import quadsImage from '../assets/muscleQuads.png';
import calvesImage from '../assets/muscleCalves.png';
import upperbackImage from '../assets/muscleUpperBack.png';
import latsImage from '../assets/muscleLats.png';
import glutesImage from '../assets/muscleGlutes.png';
import hamstringsImage from '../assets/muscleHamstrings.png';
import tricepsImage from '../assets/muscleTriceps.png';


export default function Learn() {
  const [isFront, setIsFront] = useState(true);
  const [chestModalVisible, setChestModalVisible] = useState(false);
  const [absModalVisible, setAbsModalVisible] = useState(false);
  const [deltModalVisible, setDeltModalVisible] = useState(false);
  const [bicepModalVisible, setBicepModalVisible] = useState(false);
  const [forearmModalVisible, setForearmModalVisible] = useState(false);
  const [quadsModalVisible, setQuadsModalVisible] = useState(false);
  const [calvesModalVisible, setCalvesModalVisible] = useState(false);
  const [upperBackModalVisible, setUpperBackModalVisible] = useState(false);
  const [latsModalVisible, setLatsModalVisible] = useState(false);
  const [glutesModalVisible, setGlutesModalVisible] = useState(false);
  const [hamstringsModalVisible, setHamstringsModalVisible] = useState(false);
  const [tricepsModalVisible, setTricepsModalVisible] = useState(false);
 

  const flipImage = () => {
    setIsFront(!isFront);
  };

  const handleChestClick = () => {
    setChestModalVisible(true);
  };

  const handleDeltClick = () => {
    setDeltModalVisible(true);
  };

  const handleBicepClick = () => {
    setBicepModalVisible(true);
  };

  const handleForearmClick = () => {
    setForearmModalVisible(true);
  }
  
  const handleAbsClick = () => {
    setAbsModalVisible(true);
  };

  const handleQuadsClick = () => {
    setQuadsModalVisible(true);
  }

  const handleCalvesClick = () => {
    setCalvesModalVisible(true);
  }

  const handleUpperBackClick = () => {
    setUpperBackModalVisible(true);
  }

  const handleLatsClick = () => {
    setLatsModalVisible(true);
  }

  const handleGlutesClick = () => {
    setGlutesModalVisible(true);
  }

  const handleHamstringsClick = () => {
    setHamstringsModalVisible(true);
  }

  const handleTricepClick = () => {
    setTricepsModalVisible(true);
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
            <Image style={styles.modalImageStyle} source={imageUri}/>
            <Text style={styles.muscleInfo}>{muscleInfo}</Text>
            <TouchableOpacity
              style={{ ...styles.closeButton, backgroundColor: "#33363F" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.buttonTextStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  const muscle = [
    {
      modalVisible: chestModalVisible,
      setModalVisible: setChestModalVisible,
      muscleName: "Pecs",
      muscleInfo: "The function of the pecs is to bring your upper arm across your body\n\nYou can bias the upper or lower part of your pecs by using a more upwards or downwards angle respectively.\n\nYou can target your pecs through a mix of pressing and fly movements.",
      imageUri: chestImage,
    },
    {
      modalVisible: absModalVisible,
      setModalVisible: setAbsModalVisible,
      muscleName: "Abdominals",
      muscleInfo: "The function of the abs is to flex your trunk.\n\nThey also help to stabilize your trunk and pelvis during movement.\n\nWhen training your abs you should focus on crunching your chest down or your hips up.",
      imageUri: absImage,
    },
    {
      modalVisible: deltModalVisible,
      setModalVisible: setDeltModalVisible,
      muscleName: "Deltoids",
      muscleInfo: "Some information about the deltoids...",
      imageUri: deltsImage,
    },
    {
      modalVisible: bicepModalVisible,
      setModalVisible: setBicepModalVisible,
      muscleName: "Biceps",
      muscleInfo: "Some information about the biceps...",
      imageUri: bicepsImage,
    },
    {
      modalVisible: forearmModalVisible,
      setModalVisible: setForearmModalVisible,
      muscleName: "Forearms",
      muscleInfo: "Some information about the forearms...",
      imageUri: forearmsImage,
    },
    {
      modalVisible: quadsModalVisible,
      setModalVisible: setQuadsModalVisible,
      muscleName: "Quadriceps",
      muscleInfo: "Some information about the quadriceps...",
      imageUri: quadsImage,
    },
    {
      modalVisible: calvesModalVisible,
      setModalVisible: setCalvesModalVisible,
      muscleName: "Calves",
      muscleInfo: "Some information about the calves...",
      imageUri: calvesImage,
    },
    {
      modalVisible: upperBackModalVisible,
      setModalVisible: setUpperBackModalVisible,
      muscleName: "Upper Back",
      muscleInfo: "Some information about the upper back muscles...",
      imageUri: upperbackImage,
    },
    {
      modalVisible: latsModalVisible,
      setModalVisible: setLatsModalVisible,
      muscleName: "Lats",
      muscleInfo: "Some information about the lats muscles...",
      imageUri: latsImage,
    },
    {
      modalVisible: glutesModalVisible,
      setModalVisible: setGlutesModalVisible,
      muscleName: "Glutes",
      muscleInfo: "Some information about the glutes muscles...",
      imageUri: glutesImage,
    },
    {
      modalVisible: hamstringsModalVisible,
      setModalVisible: setHamstringsModalVisible,
      muscleName: "Hamstrings",
      muscleInfo: "Some information about the hamstrings muscles...",
      imageUri: hamstringsImage,
    },
    {
      modalVisible: tricepsModalVisible,
      setModalVisible: setTricepsModalVisible,
      muscleName: "Triceps",
      muscleInfo: "Some information about the triceps muscles...",
      imageUri: tricepsImage,
    },

  ];

  return (
    <View style={styles.container}>
    {muscle.map((muscle) => (
      <MuscleModal
        key={muscle.muscleName}
        modalVisible={muscle.modalVisible}
        setModalVisible={muscle.setModalVisible}
        muscleName={muscle.muscleName}
        muscleInfo={muscle.muscleInfo}
        imageUri={muscle.imageUri}
      />
    ))}
       
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
    closeButton: {
      backgroundColor: "#F194FF",
      borderRadius: 10,
      padding: 10,
      elevation: 2
    },
    modalImageStyle: {
      width: 222,
      height: 125,
      marginBottom: 15,
    },
    buttonTextStyle: {
      color: "#C2CAF2",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center"
    },
    muscleInfo: {
      color: "#C2CAF2",
      marginBottom: 15,
      textAlign: "left",
    },
    modalText: {
      color: "#C2CAF2",
      marginBottom: 15,
      fontSize: 20,
      fontWeight: "bold",
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

