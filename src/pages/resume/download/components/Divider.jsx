
export default function Divider({ short }) {
    return <div className={`h-[1px] ${short ? 'mx-0' : '-mx-[14px]'} my-[14px] dark:bg-slate-700 bg-[#ededee]`} />
}
