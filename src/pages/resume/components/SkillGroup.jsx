
export default function SkillGroup({ title, children }) {
    return (
        <div>
            <h3 className='mb-2'>{title}</h3>
            <div className='flex flex-wrap gap-2'>
                {children}
            </div>
        </div>
    )
}
