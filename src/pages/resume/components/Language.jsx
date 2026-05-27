import Divider from './Divider'

export default function Language({ flag, language, level }) {
    return (
        <>
            <div className='flex gap-2'>
                <img src={flag} className='size-4 mt-1' />
                <h3>{language}</h3>
            </div>
            <p>{level}</p>
            <Divider short={true} />
        </>
    )
}
