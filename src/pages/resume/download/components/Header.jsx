import Divider from "./Divider"
import IconBox from "../../components/IconBox"

export default function SectionHeader({ IconComponent, title }) {
    return (
        <div >
            <div className='flex gap-3 items-center h-6'>
                <IconBox IconComponent={IconComponent} size='sm' />
                <h2>{title}</h2>
            </div>
            <Divider />
        </div>
    )
}
