import useInViewTransition from '../../../hooks/useInViewTransition';

export default function Container({ children, className: additionalClasses }) {
    const { ref, transitionClasses } = useInViewTransition({
        threshold: 0.1,
        inViewClasses: `opacity-100 scale-100`,
        offViewClasses: `opacity-0 scale-75`,
    });

    return (
        <div ref={ref} className={`rounded-2xl border-[1px] border-slate-700 bg-black-secondary p-6 ${additionalClasses} ${transitionClasses}`}>
            {children}
        </div>
    );
}