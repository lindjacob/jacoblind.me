import DotLine from "./DotLine";
import DateBox from "./DateBox";
import Location from "./Location";

export default function Experience({ position, company, type, location, dateFromTo, description, positions }) {
    const isMultiPosition = Array.isArray(positions) && positions.length > 0;

    return (
        <div className='flex gap-6'>
            <div className='size-3 p-[1px] bg-[#1b2025] border-[1px] border-white rounded-full mt-2 -ml-[7px] flex justify-center items-center'>
                <div className='size-2 bg-white rounded-full' />
            </div>
            <div className='w-full'>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className='mb-4 md:mb-0'>
                        <h3>{isMultiPosition ? company : position}</h3>
                        {isMultiPosition
                            ? <p>{type}</p>
                            : <DotLine text1={`${company}`} text2={`${type}`} />
                        }
                    </div>
                    <DateBox dateFromTo={dateFromTo} />
                </div>
                <Location locationText={location} />
                {isMultiPosition && (
                    <div className='mt-2 mb-4 flex flex-col gap-3'>
                        {positions.map((p, idx) => (
                            <SubPosition key={idx} position={p.position} dateFromTo={p.dateFromTo} />
                        ))}
                    </div>
                )}
                <p className='max-w-[430px]' dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    )
}

// Sub-position row: a smaller circle that sits on the same vertical timeline as the
// company circle above. The offsets below depend on the parent layout (2px line +
// 12px main circle with -ml-[7px] + 24px gap-6 in Experience). If that layout changes,
// these magic numbers need to be recomputed so the small circle stays on the line.
function SubPosition({ position, dateFromTo }) {
    return (
        <div className='flex items-center'>
            <div
                className='size-2 bg-white rounded-full shrink-0'
                style={{ marginLeft: '-34px', marginRight: '26px' }}
            />
            <div className='flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-1'>
                <p className='font-medium'>{position}</p>
                <p className='text-sm opacity-70'>{dateFromTo}</p>
            </div>
        </div>
    )
}
