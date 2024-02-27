import { PiCheck } from "react-icons/pi";

export default function Skill({ title }) {
    return (
        <div className='border-[1px] border-slate-700 rounded-lg text-sm px-[10px] py-[6px] flex gap-2 items-center'>
            <PiCheck size='1rem' />
            {title}
        </div>
    )
}
