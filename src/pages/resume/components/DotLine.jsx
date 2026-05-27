import { LuDot } from "react-icons/lu";

export default function DotLine({ text1, text2, className }) {
    return (
        <div className={`flex flex-wrap items-center gap-[2px] ${className}`}>
            <p>{text1}</p>
            <LuDot className='dark:text-white text-[#77777d]' />
            <p>{text2}</p>
        </div>
    )
}
