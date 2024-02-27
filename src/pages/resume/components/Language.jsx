import Divider from './Divider'

export default function Language({ code, language, level }) {
    return (
        <>
            <h3><span className='text-sm uppercase'>{code}</span> {language}</h3>
            <p>{level}</p>
            <Divider short={true} />
        </>
    )
}
