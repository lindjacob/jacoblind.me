import DotLine from "./DotLine";
import DateBox from "./DateBox";
import Location from "./Location";

export default function Experience({ position, company, type, location, dateFromTo, description }) {
    return (
        <div className='flex gap-6'>
            <div className='size-2 bg-white rounded-full mt-[10px] -ml-[5px]' />
            <div className='w-full'>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className='mb-4 md:mb-0'>
                        <h3>{position}</h3>
                        <DotLine text1={`${company}`} text2={`${type}`} />
                    </div>
                    <DateBox dateFromTo={dateFromTo} />
                </div>
                <Location locationText={location} />
                <p className='max-w-[430px]'>
                    {description}
                </p>
            </div>
        </div>
    )
}
