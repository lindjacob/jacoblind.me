import { PiMapPinLight } from "react-icons/pi";

export default function Location({ locationText }) {
    return (
        <div className='flex gap-2 items-center my-4'>
            <PiMapPinLight size='1.2rem' />
            <p>{locationText}</p>
        </div>
    )
}
