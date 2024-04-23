
export default function IconBox({ IconComponent, size }) {
    size = {
        sm: {
            divClasses: 'rounded-md size-6',
            iconClasses: 'size-3'
        },
        md: {
            divClasses: 'rounded-2xl size-12 md:mb-0',
            iconClasses: 'size-6'
        }
    }[size] || {
        divClasses: 'rounded-2xl size-12 md:mb-0',
        iconClasses: 'size-6'
    };

    return (
        <div className={`dark:bg-slate-800 bg-[#f6f6f6] border-[1px] border-[#ededee] dark:border-slate-700 ${size.divClasses} flex justify-center items-center`}>
            <IconComponent className={`dark:text-white text-[#8e8e92] ${size.iconClasses}`} />
        </div>
    )
}
