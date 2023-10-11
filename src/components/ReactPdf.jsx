import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  invoiceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  customerInfo: {
    flexDirection: 'column',
    marginBottom: 10,
    fontSize: 12
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'space-between',
    fontSize: 12,
    paddingBottom: 10
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 5,
    justifyContent: 'space-between',
    fontSize: 10

  },

  productDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  total: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'right',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 50

  },
  totalAligment: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  logo: {
    width: 60,
    height: 60,
    objectFit: 'contain'
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    objectFit: 'contain'
  },

  footer: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 200
  }
});

const companyLogoBase64 = 'https://pur.com.bd/wp-content/uploads/2020/03/logo-small.png';
const product1ImageBase64 = 'https://miro.medium.com/v2/resize:fit:1400/1*4PXWHQnm3UbmuKp_StqmWg.png';
const product2ImageBase64 = 'https://miro.medium.com/v2/resize:fit:1400/1*4PXWHQnm3UbmuKp_StqmWg.png';


const invoiceData = {
  invoiceNumber: 'INV-2023-001',
  invoiceDate: 'October 10, 2023',
  customerName: 'John Doe',
  customerAddress: '123 Main St, City, Country',
  billToInfo: {
    name: 'Omor Faruk',
    mobile: '+8801771133111',
  },
  items: [
    { description: 'Product 1', quantity: 2, price: 20, productImage: product1ImageBase64 },
    { description: 'Product 2', quantity: 1, price: 30, productImage: product2ImageBase64 },
    // Add more items as needed
  ],
  subtotal: 70,
  taxRate: 0.1, // 10% tax
  total: 77, // subtotal + tax
};

const ReactPdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.invoiceInfo}>
          <Image src={'https://i.ibb.co/DpK6Z0m/1673291260756.png'} style={styles.logo} />
          <View>
            <Text style={styles.header}>Invoice</Text>

            <View style={styles.customerInfo}>
              <Text>Invoice Number: {invoiceData.invoiceNumber}</Text>
              <Text>Invoice Date: {invoiceData.invoiceDate}</Text>
            </View>
          </View>
        </View>
        <View style={styles.customerInfo}>
          <Text>Bill To</Text>
          <Text>Customer: {invoiceData.customerName}</Text>
          <Text>Mobile no: {invoiceData.billToInfo.mobile}</Text>
        </View>
        <View style={styles.customerInfo}>
          <Text>Delivery Address</Text>
          <Text>Address: {invoiceData.customerAddress}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Invoice Items</Text>
        <View style={styles.tableHeader}>
          <Text>Number</Text>
          <Text>Item & Description</Text>
          <Text>Quantity</Text>
          <Text>Price</Text>
          <Text>Amount</Text>
        </View>
        {invoiceData.items.map((item, index) => (
          <View style={styles.tableRow} key={index}>
            <Text>#{index + 1}</Text>
            <View style={styles.productDescription}>
              <Image src={item.productImage} style={styles.productImage} />
              <Text>{item.description}</Text>
            </View>
            <Text>{item.quantity}</Text>
            <Text>${item.price}</Text>
            <Text>${item.quantity * item.price}</Text>
          </View>
        ))}
        <View style={styles.total}>
          <View>
            <Text>Subtotal: </Text>
            <Text>Tax ({(invoiceData.taxRate * 100).toFixed(0)}%): </Text>
            <Text>Total: </Text>
          </View>
          <View>
            <Text>${invoiceData.subtotal}</Text>
            <Text>${invoiceData.subtotal * invoiceData.taxRate}</Text>
            <Text>${invoiceData.total}</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.footer}>**This is computer generated invoice, no signature required.**</Text>
      </View>
    </Page>
  </Document>
);

export default ReactPdf;
