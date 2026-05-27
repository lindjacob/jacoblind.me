import { useInView } from 'react-intersection-observer';

const useInViewTransition = (options = {}) => {
    let { triggerOnce = true, threshold = 0.7, delay = '', baseClasses = '', offViewClasses = 'opacity-0 translate-y-4', inViewClasses = 'opacity-100 translate-y-0' } = options;
    const { ref, inView } = useInView({
        triggerOnce,
        threshold,
    });
    

    const transitionClasses = `transition-all duration-700 ${delay} transform preserve-3d ${inView ? inViewClasses : offViewClasses} ${baseClasses}`.trim();

    return { ref, transitionClasses };
};

export default useInViewTransition;