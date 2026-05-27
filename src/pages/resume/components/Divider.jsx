import cn from '../../../utils/cn'

export default function Divider({ short, className, ...props }) {
    return <div
        className={cn(`h-[1px] ${short ? 'mx-0' : '-mx-6'} my-6 bg-slate-700`, className)}
        {...props}
        />
}
