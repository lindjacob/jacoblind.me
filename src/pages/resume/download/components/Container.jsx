import cn from '../../../../utils/cn';

export default function Container({ className, children, props }) {
  return (
    <div className={cn('bg-white border-[1px] border-[#ededee] rounded-xl p-[14px] w-full', className)} {...props}>
        {children}
    </div>
  )
}
