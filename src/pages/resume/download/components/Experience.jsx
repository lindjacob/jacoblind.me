import DotLine from "./DotLine";
import DateBox from "./DateBox";
import Location from "../../components/Location";

export default function Experience({ position, company, type, location, dateFromTo, description }) {
    return (
        <div className='flex gap-4'>
            <div className=' size-3 p-[1px] bg-white border-[1px] border-[8e8e92] rounded-full mt-[2px] -ml-[15px] flex justify-center items-center'>
                <div className='size-2 dark:bg-white bg-[#8e8e92] rounded-full' />
            </div>
            <div className='w-full'>
                <div className='flex justify-between'>
                    <div className=''>
                        <h3>{position}</h3>
                        <DotLine text1={`${company}`} text2={`${type}`} />
                    </div>
                    <DateBox dateFromTo={dateFromTo} />
                </div>
                <Location locationText={location} size='sm' />
                <p className='max-w-[530px]' dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    )
}
