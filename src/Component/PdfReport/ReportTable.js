import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import ReportTableHeader from './ReportTableHeader';
import ReportTableRow from './ReportTableRow';

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#3778C2',
    },
});

const ReportTable = ({ data }) => (
    <View style={styles.tableContainer}>
        <ReportTableHeader />
        <ReportTableRow items={data} />
    </View>
);

export default ReportTable;