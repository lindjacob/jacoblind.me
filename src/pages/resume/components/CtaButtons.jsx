import React, { useState } from 'react';
import { PiDownloadSimple, PiEnvelopeSimple, PiCheck } from "react-icons/pi";
import fetchPDF from '../../../api/cvtopdf';

export default function CtaButtons() {
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);
        try {
            const blob = await fetchPDF();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'resume_jacob_lind.pdf';
            document.body.appendChild(link);

            link.click();

            // Short delay to ensure download starts
            setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }, 100);
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            
            setDownloadSuccess(true);
            setTimeout(() => {
                setDownloadSuccess(false);
            }, 3000);
        } catch (error) {
            console.error('Download failed:', error);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className='flex flex-col w-full justify-center gap-4 mt-10 xsm:flex-row'>
            <a href='mailto:contact@jacoblind.me' className='button'>
                <PiEnvelopeSimple size='1.5rem' />
                Send Email
            </a>
            <button
                onClick={handleDownload}
                className={`button secondary flex items-center ${isDownloading ? 'bg-gray-500 cursor-not-allowed' : downloadSuccess ? 'bg-green-500' : 'bg-indigo-500'}`}
                disabled={isDownloading}
            >
                {isDownloading ? (
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : downloadSuccess ? (
                    <PiCheck size='1.5rem' />
                ) : (
                    <PiDownloadSimple size='1.5rem' />
                )}
                {isDownloading ? 'Generating PDF...' : downloadSuccess ? 'Download Successful' : 'Download Resume'}
            </button>
        </div>
    );
}