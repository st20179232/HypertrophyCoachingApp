import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Modal, Text, FlatList } from 'react-native';

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

  const [tipsModalVisible, setTipsModalVisible] = useState(false);
 

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

const trainingTips = ['1) Make sure you are pushing your sets near failure', 
                      '2) Make sure you rest at least 2 minutes between sets, and longer for more challenging exercises',
                      '3) Play around with your rep ranges to see what you enjoy, anywhere between 5 and 20 reps is recommended',
                      '4) Play around with exercise setup to find what works best for you. Changing incline/decline angle, changing hand position, and using different attachments can all be beneficial',
                      '5) Make sure you are recovering between sessions, play around with your number of sets if necessary',
                      '6) Make sure you are eating enough calories and protein to reach your goals'
                      ];


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
      elevation: 5,
      maxHeight: '60%',
    },
    closeButton: {
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
    marginBottom: 30,  // Add some margin at the bottom
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
    top: '23%',  // Adjust as needed
    left: '39%',  // Adjust as needed
    width: '22%',  // Adjust as needed
    height: '6%',  // Adjust as needed
  },
  deltArea1: {
    position: 'absolute',
    top: '22%',  // Adjust as needed
    left: '30%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '5%',  // Adjust as needed
  },
  deltArea2: {
    position: 'absolute',
    top: '22%',  // Adjust as needed
    left: '60%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '5%',  // Adjust as needed
  },
  bicepArea1: {
    position: 'absolute',
    top: '27%',  // Adjust as needed
    left: '28%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed 
  },
  bicepArea2: {
    position: 'absolute',
    top: '27%',  // Adjust as needed
    left: '62%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
  },
  forearmArea1: {
    position: 'absolute',
    top: '33%',  // Adjust as needed
    left: '24%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
  },
  forearmArea2: {
    position: 'absolute',
    top: '33%',  // Adjust as needed
    left: '67%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
  },
  absArea: {
    position: 'absolute',
    top: '29%',  // Adjust as needed
    left: '41%',  // Adjust as needed
    width: '18%',  // Adjust as needed
    height: '10%',  // Adjust as needed
  },
  quadsArea: {
    position: 'absolute',
    top: '42%',  // Adjust as needed
    left: '36%',  // Adjust as needed
    width: '28%',  // Adjust as needed
    height: '13%',  // Adjust as needed
  },
  upperBackArea: {
    position: 'absolute',
    top: '21%',  // Adjust as needed
    left: '39%',  // Adjust as needed
    width: '23%',  // Adjust as needed
    height: '8%',  // Adjust as needed
  },
  latsArea: {
    position: 'absolute',
    top: '29%',  // Adjust as needed
    left: '38%',  // Adjust as needed
    width: '25%',  // Adjust as needed
    height: '9%',  // Adjust as needed
  },
  tricepArea1: {
    position: 'absolute',
    top: '28%',  // Adjust as needed
    left: '28%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
  },
  tricepArea2: {
    position: 'absolute',
    top: '28%',  // Adjust as needed
    left: '63%',  // Adjust as needed
    width: '9%',  // Adjust as needed
    height: '6%',  // Adjust as needed
  },
  glutesArea: {
    position: 'absolute',
    top: '39%',  // Adjust as needed
    left: '38%',  // Adjust as needed
    width: '25%',  // Adjust as needed
    height: '8%',  // Adjust as needed
  },
  hamstringsArea: {
    position: 'absolute',
    top: '47%',  // Adjust as needed
    left: '38%',  // Adjust as needed
    width: '25%',  // Adjust as needed
    height: '10%',  // Adjust as needed
  },
  calvesArea: {
    position: 'absolute',
    top: '58%',  // Adjust as needed
    left: '38%',  // Adjust as needed
    width: '25%',  // Adjust as needed
    height: '10%',  // Adjust as needed
  },
  roundedRectangle: {
    width: '60%', // Adjust as needed
    height: '6%', // Adjust as needed
    backgroundColor: '#33363F',
    borderRadius: 15,
    justifyContent: 'center',
    padding: 15,
    marginBottom: 20, // Add some margin at the bottom
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  text: {
    color: '#C2CAF2',
    fontSize: 16,
    marginBottom: 0,
    textAlign: 'center',
  },
});
  
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
            <TouchableOpacity style={{ ...styles.closeButton, backgroundColor: "#33363F" }}
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
      muscleInfo: "Your pecs can be trained with movements that bring your upper arm across your body\n\nYou can bias the upper or lower part of your pecs by using a more upwards or downwards angle respectively.\n\nYou can target your pecs through a mix of pressing and fly movements.",
      imageUri: chestImage,
    },
    {
      modalVisible: absModalVisible,
      setModalVisible: setAbsModalVisible,
      muscleName: "Abdominals",
      muscleInfo: "Your abs can be trained by flexing your trunk.\n\nThey also help to stabilize your trunk and pelvis during movement.\n\nWhen training your abs you should focus on crunching your chest down or your hips up.",
      imageUri: absImage,
    },
    {
      modalVisible: deltModalVisible,
      setModalVisible: setDeltModalVisible,
      muscleName: "Deltoids",
      muscleInfo: "Your delts are made up of the front, side and rear heads which all pull your upper arm in different directions.\n\nThe front delt is used to raise your arm in front of you.\nThe side delt is used to raise your arm to the side.\nThe rear delt is used to pull your arm back in line with your body.\n\nThe front and side delts can be trained through shoulder presses and raises.\nThe rear delts can be trained through reverse flys and different pulling movements.",
      imageUri: deltsImage,
    },
    {
      modalVisible: bicepModalVisible,
      setModalVisible: setBicepModalVisible,
      muscleName: "Biceps",
      muscleInfo: "Your biceps can be trained through elbow flexion.\n\nYou can bias your biceps or your brachialis(the underlying muscle) by using a more palms up or neutral grip respectively.\n\nFocus on bringing your wrist towards your shoulder.",
      imageUri: bicepsImage,
    },
    {
      modalVisible: forearmModalVisible,
      setModalVisible: setForearmModalVisible,
      muscleName: "Forearms",
      muscleInfo: "The function of the forearm flexors and extensors is to curl your wrist inwards and outwards.\n\nThe forearms are made up of the flexors(located on the inside of your forearm) and extensors(located on the outside).\nThe extensors have the opposite function and curl it away.\n\nYou can train your forearms through a mix of wrist curls and reverse wrist curls.",
      imageUri: forearmsImage,
    },
    {
      modalVisible: quadsModalVisible,
      setModalVisible: setQuadsModalVisible,
      muscleName: "Quadriceps",
      muscleInfo: "Your quads can be trained through knee extension.\n\nThe rectus femoris is the only quad muscle that crosses the hip joint so it can only be trained effectively throughs knee extension without hip flexion(such as leg extensions)\n\nYou can train your quad through a mix of squats, leg presses, and leg extensions.",
      imageUri: quadsImage,
    },
    {
      modalVisible: calvesModalVisible,
      setModalVisible: setCalvesModalVisible,
      muscleName: "Calves",
      muscleInfo: "Your calves can be trained through plantar flexion(pointing your toes down)\n\nYou can bias the gastrocnemius(your main calf muscle) or soleus(the underlying muscle) by using a straight or bent knee respectively.\n\nFocus on pushing through the balls of your feet and getting a full stretch at the bottom of the movement.",
      imageUri: calvesImage,
    },
    {
      modalVisible: upperBackModalVisible,
      setModalVisible: setUpperBackModalVisible,
      muscleName: "Upper Back",
      muscleInfo: "The upper back can be trained with movements that pull your upper arm back and retract your scapula.\n\nWhen doing pulling movements for your upper back you should use a flared elbow position\n\nYou can use a mix of rows and shrugs to train your upper back.",
      imageUri: upperbackImage,
    },
    {
      modalVisible: latsModalVisible,
      setModalVisible: setLatsModalVisible,
      muscleName: "Lats",
      muscleInfo: "The lats can be trained with movements that pull your upper arm in towards your body.\n\nYou can use a mix of wide grip pulldowns/pullups and sagittal(arms in front of you) pulls to train your lats\n\nFocus on pulling through your elbows to reduce the chance of your biceps taking over the movement.",
      imageUri: latsImage,
    },
    {
      modalVisible: glutesModalVisible,
      setModalVisible: setGlutesModalVisible,
      muscleName: "Glutes",
      muscleInfo: "Your glutes can be trained through hip extension.\n\nYou can use a mix of hinges, thrusts, kickbacks and glute biased presses.\n\nWhen performing a hinge, having a bend in your knee will bias the glutes rather than the hamstrings.",
      imageUri: glutesImage,
    },
    {
      modalVisible: hamstringsModalVisible,
      setModalVisible: setHamstringsModalVisible,
      muscleName: "Hamstrings",
      muscleInfo: "Your hamstrings can be trained through knee flexion and hip extension.\n\nYou can use a mix of leg curls and hip hinges.\n\nWhen performing a hinge, keeping a straight knee will bias the hamstrings rather than the glutes",
      imageUri: hamstringsImage,
    },
    {
      modalVisible: tricepsModalVisible,
      setModalVisible: setTricepsModalVisible,
      muscleName: "Triceps",
      muscleInfo: "Your triceps can be trained through elbow extension.\n\nYou can bias the long head of the triceps with movements that are most chellnging when your arms are by your sides(such as long rope tricep extensions).\n\nYou can bias the lateral and medial heads with exercises that also include movement at the shoulder joint(such as dips and close grip presses).",
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
  
      <Modal
        animationType="slide"
        transparent={true}
        visible={tipsModalVisible}
        onRequestClose={() => {
          setTipsModalVisible(!tipsModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={trainingTips}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={styles.muscleInfo}>{item}</Text>
              )}
            />
            <TouchableOpacity style={{ ...styles.closeButton, backgroundColor: "#33363F" }}
              onPress={() => setTipsModalVisible(!tipsModalVisible)}
            >
              <Text style={styles.buttonTextStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  
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
  
      <View style={styles.roundedRectangle}>
        <TouchableOpacity onPress={() => setTipsModalVisible(true)}>
          <Text style={styles.buttonTextStyle}>Top Training Tips</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  

}
