
export default function Divider({ short }) {
    return <div className={`h-[1px] ${short ? 'mx-0' : '-mx-6'} my-6 bg-slate-700`} />
}
