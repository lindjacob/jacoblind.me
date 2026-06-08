import DotLine from "./DotLine";
import DateBox from "./DateBox";
import Location from "../../components/Location";

export default function Experience({ position, company, type, location, dateFromTo, description, positions }) {
    const isMultiPosition = Array.isArray(positions) && positions.length > 0;

    return (
        <div className='flex gap-4'>
            <div className=' size-3 p-[1px] bg-white border-[1px] border-[8e8e92] rounded-full mt-[2px] -ml-[15px] flex justify-center items-center'>
                <div className='size-2 dark:bg-white bg-[#8e8e92] rounded-full' />
            </div>
            <div className='w-full'>
                <div className='flex justify-between'>
                    <div className=''>
                        <h3>{isMultiPosition ? positions[0].position : position}</h3>
                        <DotLine text1={company} text2={type} />
                    </div>
                    <DateBox dateFromTo={dateFromTo} />
                </div>
                <Location locationText={location} size='sm' />
                {isMultiPosition && positions.length > 1 && (
                    <div className='my-2 flex flex-col gap-1'>
                        {positions.slice(1).map((p, idx) => (
                            <SubPosition key={idx} position={p.position} dateFromTo={p.dateFromTo} />
                        ))}
                    </div>
                )}
                <p className='max-w-[530px]' dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    )
}

// Sub-position row: smaller circle aligned to the same vertical timeline as the
// company circle above. Offsets depend on the download layout (2px line with ml-1,
// 12px main circle with -ml-[15px], 16px gap-4 in Experience).
function SubPosition({ position, dateFromTo }) {
    return (
        <div className='flex items-center'>
            <div
                className='size-[6px] bg-[#8e8e92] rounded-full shrink-0'
                style={{ marginLeft: '-25px', marginRight: '19px' }}
            />
            <div className='flex-1 flex justify-between items-center'>
                <p>{position}</p>
                <p className='text-sm opacity-70'>{dateFromTo}</p>
            </div>
        </div>
    )
}
