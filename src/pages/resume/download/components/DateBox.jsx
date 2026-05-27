import { FaRegCalendarAlt } from "react-icons/fa";

export default function DateBox({ dateFromTo }) {
    return (
        <div className='flex'>
            <div className='flex h-fit items-center px-[10px] py-[6px] gap-2 rounded-md w-fit border-[1px] border-[#ededee]'>
                <FaRegCalendarAlt className='text-[#1d1d26] size-[9px]' />
                <p className='!text-[#1d1d26]'>{dateFromTo}</p>
            </div>
        </div>
    )
}
