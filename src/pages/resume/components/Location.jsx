import { PiMapPinLight } from 'react-icons/pi';
import cn from '../../../utils/cn';

export default function Location({ locationText, className, size}) {
    const classes = {
        sm: {
            div: 'gap-1 my-2',
            icon: '0.8rem'
        },
        md: {
            div: 'gap-2 my-4',
            icon: '1rem'
        }
    }[size] || {
        div: 'gap-2 my-4',
        icon: '1rem'
    }

    return (
        <div className={cn(`flex items-center ${classes.div}`, className)}>
            <PiMapPinLight size={classes.icon} className='text-[#77777d] dark:text-white' />
            <p>{locationText}</p>
        </div>
    )
}
