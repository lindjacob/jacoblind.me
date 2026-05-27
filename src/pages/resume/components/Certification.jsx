import DotLine from "./DotLine";
import { PiArrowUpRight } from "react-icons/pi";

export default function Certification({ title, issuer, date }) {
    return (
        <div>
            <h3>{title}</h3>
            <DotLine text1={`Issued by ${issuer}`} text2={`${date}`} />
            <a href='' className='button secondary small mt-4'>
                <PiArrowUpRight size='1.2rem' />
                Show Credentials
            </a>
        </div>
    )
}
