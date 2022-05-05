import React from "react";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../../Asset/images/Logo.png";
import ReportTitle from "./ReportTitle";
import ReportThankYouMsg from "./ReportThankYouMsg";
import ReportItemsTable from "./ReportTable";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 100,
    height: 70,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const PdfDocument = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.logo} src={logo} />
        <ReportTitle title={"Medical Report"} />
        <ReportItemsTable data={data} />
        <ReportThankYouMsg />
      </Page>
    </Document>
  );
};

export default PdfDocument;
