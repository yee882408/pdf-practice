'use client';
import Image from 'next/image'
import {useState} from "react";
import PdfWithSignature from "@/component/pdf";
import PrevPdf from "@/component/PrevPdf";
export default function Home() {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
        <PrevPdf/>
        {/*<PdfWithSignature/>*/}
    </main>
  )
}