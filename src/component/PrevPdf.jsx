import React, {useRef, useState} from 'react';
import {Document, Page, Text, View, PDFViewer, Image} from '@react-pdf/renderer';
import SignatureCanvas from "react-signature-canvas";

const PrevPdf = () => {
    const [userInput, setUserInput] = useState('');

    const signatureRef = useRef();
    const [signatureDataUrl, setSignatureDataUrl] = useState('');
    const [isSignature, setIsSignature] = useState(false)
    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handleClearSignature = () => {
        signatureRef.current.clear();
        setSignatureDataUrl('');
    };

    const handleSaveSignature = () => {
        if (signatureRef.current.isEmpty()) {
            return;
        }
        setSignatureDataUrl(signatureRef.current.toDataURL());
        setIsSignature(true)
    };

    return (
        <div>
      <textarea
          rows={4}
          cols={50}
          value={userInput}
          onChange={handleUserInput}
          placeholder="Enter your content here"
      />

            <PDFViewer width="900" height="800">
                <Document>
                    <Page size="A4">
                        <View style={{ padding: 20 }}>
                            <Text style={{ fontSize: 40 }}>Generated PDF with User Content:</Text>
                            <Text>{userInput}</Text>
                        </View>
                        {signatureDataUrl && <View><Image src={signatureDataUrl} width={300} height={300} alt='img'/></View>}
                    </Page>
                </Document>
            </PDFViewer>

            <SignatureCanvas
                ref={signatureRef}
                canvasProps={{width:500, height: 500}}
            />
            <button onClick={handleClearSignature}>清除簽名</button>
            <button onClick={handleSaveSignature}>保存簽名</button>
        </div>
    );
};

export default PrevPdf;
