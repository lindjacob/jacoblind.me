import DotLine from './DotLine'

export default function Recommendation({ name, position, date, text }) {
    return (
        <div className='flex items-stretch'>
            <div className='w-[2px] bg-green-500 my-1 mr-6' />
            <div>
                <h3>{name}</h3>
                <DotLine text1={position} text2={date} className={'mb-4'} />
                <p className='max-w-[560px]'>
                    {text}
                </p>
            </div>
        </div>
    )
}
