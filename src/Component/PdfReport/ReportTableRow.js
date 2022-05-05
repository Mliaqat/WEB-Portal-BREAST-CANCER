import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#3778C2'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#3778C2',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    description: {
        width: '50%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    cnic: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        paddingRight: 8,
    },
    type: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        paddingRight: 8,
    }
});

const ReportTableRow = ({ items }) => {
    const rows = 
        <View style={styles.row}>
            <Text style={styles.cnic}>{items.cnic}</Text>
            <Text style={styles.type}>{items.type_of_cancer}</Text>
            <Text style={styles.description}>{items.description}</Text>
           
        </View>
    
    return (<Fragment>{rows}</Fragment>)
};

export default ReportTableRow