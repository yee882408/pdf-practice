import React, { useRef, useState } from 'react';
import { Document, Page, View, Text, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import SignatureCanvas from 'react-signature-canvas';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',

    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

const PdfWithSignature = () => {
    const signatureRef = useRef();
    const [signatureDataUrl, setSignatureDataUrl] = useState('');

    // const handleClearSignature = () => {
    //     signatureRef.current.clear();
    //     setSignatureDataUrl('');
    // };
    //
    // const handleSaveSignature = () => {
    //     if (signatureRef.current.isEmpty()) {
    //         return;
    //     }
    //     setSignatureDataUrl(signatureRef.current.toDataURL());
    // };

    return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>PDF Content Goes Here</Text>
                        {/*<View style={styles.signatureContainer}>*/}
                        {/*    <SignatureCanvas*/}
                        {/*        ref={signatureRef}*/}
                        {/*        canvasProps={{ width: 300, height: 150 }}*/}
                        {/*    />*/}
                        {/*</View>*/}
                        {/*<button onClick={handleClearSignature}>Clear Signature</button>*/}
                        {/*<button onClick={handleSaveSignature}>Save Signature</button>*/}
                        {signatureDataUrl && <img src={signatureDataUrl} alt="Signature" />}
                    </View>
                </Page>
            </Document>
    );
};

export default PdfWithSignature;
