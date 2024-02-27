import { useInView } from 'react-intersection-observer';

export default function Container({ children, className }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <div ref={ref}
            className={`rounded-2xl border-[1px] border-slate-700 bg-black-secondary p-6 ${className}
                        transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transform preserve-3d`
            }
        >
            {children}
        </div>
    )
}
