import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#3778C2'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#3778C2',
        backgroundColor: '#3778C2',
        color: '#fff',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    description: {
        width: '50%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    cnic: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    type: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    }
});

const ReportTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.cnic}>Cnic</Text>
        <Text style={styles.type}>Dignioses</Text>
        <Text style={styles.description}>Description</Text>
    </View>
);

export default ReportTableHeader