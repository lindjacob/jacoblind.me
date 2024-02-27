import { PiDownloadSimple, PiEnvelopeSimple } from "react-icons/pi";

export default function CtaButtons() {
    return (
        <div className='flex flex-col w-full justify-center gap-4 mt-5 xsm:mt-10 xsm:flex-row'>
            <a href='mailto:contact@jacoblind.me' className='button'>
                <PiEnvelopeSimple size='1.5rem' />
                Send Email
            </a>
            <button className='button secondary'>
                <PiDownloadSimple size='1.5rem' />
                Download Resume
            </button>
        </div>
    )
}
