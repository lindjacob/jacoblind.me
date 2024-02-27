import { LuDot } from "react-icons/lu";

export default function DotLine({ text1, text2, className }) {
    return (
        <div className={`flex flex-wrap items-center gap-1 ${className}`}>
            <p>{text1}</p>
            <LuDot />
            <p>{text2}</p>
        </div>
    )
}
