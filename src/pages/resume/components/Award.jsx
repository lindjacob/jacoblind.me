import DotLine from "./DotLine";
import DateBox from "./DateBox";

export default function Award({ title, issuer, field, date, description }) {
        return (
            <div>
                <h3>{title}</h3>
                <DotLine text1={`Issued by ${issuer}`} text2={`${field}`} />
                <p className='mt-3'>{description}</p>
                <div className='flex justify-start mt-6'>
                    <DateBox dateFromTo={date} />
                </div>
            </div>
        )
}
