import { RiInstagramFill, RiFacebookCircleFill, RiWhatsappFill, RiLinkedinBoxFill, RiGithubFill  } from "react-icons/ri";

const iconClasses = 'w-9 h-9 dark:fill-gray-200 group-hover:fill-gray-500 dark:hover:fill-white hover:-translate-y-2 transition-all duration-300'

export default function SocialBar() {
    return (
        <div className='flex mt-6 group gap-6'>
            <a href='https://www.facebook.com/jacob.lind1' target='_blank' className='cursor-pointer'>
                <RiFacebookCircleFill className={iconClasses} />
            </a>
            <a href='https://www.instagram.com/jacobhlind/' target='_blank' className='cursor-pointer'>
                <RiInstagramFill className={iconClasses} />
            </a>
            <a href='https://wa.me/004521221945' rel='nofollow' target='_blank' className='cursor-pointer'>
                <RiWhatsappFill className={iconClasses} />
            </a>
            <a href='https://www.linkedin.com/in/jacoblindseo/' target='_blank' className='cursor-pointer'>
                <RiLinkedinBoxFill className={iconClasses} />
            </a>
            <a href='https://github.com/lindjacob' target='_blank' className='cursor-pointer'>
                <RiGithubFill className={iconClasses} />
            </a>
        </div>
    )
}
