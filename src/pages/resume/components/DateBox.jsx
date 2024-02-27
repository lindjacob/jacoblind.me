import { IoCalendarOutline } from "react-icons/io5";

export default function DateBox({ dateFromTo }) {
    return (
        <div className='flex'>
            <div className='flex h-fit items-center bg-slate-800 px-3 py-[6px] gap-2 rounded-lg text-sm w-fit border-[1px] border-slate-700'>
                <IoCalendarOutline />
                <p className='opacity-100 text-base'>{dateFromTo}</p>
            </div>
        </div>
    )
}
