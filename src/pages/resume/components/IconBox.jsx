
export default function IconBox({ IconComponent }) {
    return (
        <div className='bg-slate-800 rounded-2xl p-3 w-fit border-[1px] border-slate-700 mb-8 md:mb-0'>
            <IconComponent className='size-8' />
        </div>
    )
}
