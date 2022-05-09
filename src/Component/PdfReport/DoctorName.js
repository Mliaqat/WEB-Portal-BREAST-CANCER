import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
		justifyContent: 'flex-start',
		width: '50%'
    },
    docTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'        
    },
});

const DoctorName = ({ data }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.docTo}>From:</Text>
        <Text>Doctor {data?.doctor_name}</Text>
        <Text>MBBS,FPSC</Text>
        
        
    </View>
);

export default DoctorName