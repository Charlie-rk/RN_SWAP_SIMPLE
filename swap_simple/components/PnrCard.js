import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native'; // You can use any button library you prefer
import { LinearGradient } from 'expo-linear-gradient';
import { HiOutlineArrowRight } from 'react-icons/hi';

const  PnrCard=()=> {
  // Hardcoded travel data
  const travel = {
    pnrNo: '1234567890',
    trainInfo: {
      name: 'Express Train',
      trainNo: '5678',
      boarding: 'New York',
      destination: 'Los Angeles',
      dt: '2024-09-20',
    },
    passengerInfo: [
      { currentCoach: 'A1', currentBerthNo: '21' },
      { currentCoach: 'A1', currentBerthNo: '22' },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerText}>PNR : {travel.pnrNo}</Text>

        <LinearGradient
          colors={['#000000', '#7F00FF', '#000000']}
          style={styles.gradientBackground}
        >
          <Text style={styles.gradientText}>Your Ticket is Confirmed</Text>
        </LinearGradient>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Train Name:</Text>
          <Text style={styles.infoValue}>
            {travel.trainInfo.name} ({travel.trainInfo.trainNo})
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Boarding:</Text>
          <Text style={styles.infoValue}>{travel.trainInfo.boarding}</Text>
          <Text style={styles.infoLabel}>Destination:</Text>
          <Text style={styles.infoValue}>{travel.trainInfo.destination}</Text>
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Date: {travel.trainInfo.dt}</Text>
        </View>

        <LinearGradient
          colors={['blue', 'black', 'darkblue']}
          style={styles.passengerInfoContainer}
        >
          <Text style={styles.passengerHeader}>Passenger Info:</Text>
          {travel.passengerInfo.map((passenger, index) => (
            <Text key={index} style={styles.passengerText}>
              Passenger {index + 1}: Coach {passenger.currentCoach}, Berth No.{' '}
              {passenger.currentBerthNo}
            </Text>
          ))}
        </LinearGradient>

        <Button
          title="Go For Swap"
          buttonStyle={styles.swapButton}
          iconRight
          icon={<HiOutlineArrowRight size={24} />}
          onPress={() => console.log('Go For Swap')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: 'white',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 6,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  gradientBackground: {
    padding: 6,
    alignItems: 'center',
    borderRadius: 8,
  },
  gradientText: {
    color: '#fff',
    fontSize: 14,
  },
  infoRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#333',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  dateContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  passengerInfoContainer: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    
  },
  passengerHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  passengerText: {
    fontSize: 16,
    marginVertical: 4,
    color: '#fff',
  },
  swapButton: {
    backgroundColor: '#7F00FF',
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
export default PnrCard;