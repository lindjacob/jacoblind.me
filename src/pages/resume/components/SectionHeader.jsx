import Divider from "./Divider"
import IconBox from "./IconBox"

export default function SectionHeader({ IconComponent, title, description }) {
    return (
        <>
            <IconBox IconComponent={IconComponent} />
            <div>
                <h2>{title}</h2>
                <div className='mb-8 max-w-[430px] text-baseline opacity-85 font-light'>{description}</div>
            </div>
            <Divider />
        </>
    )
}
