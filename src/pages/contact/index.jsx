import Page from '../../components/layout/Page'
import Section from '../../components/layout/Section'
import ArrowLink from '../../components/ui/ArrowLink';
import SocialBar from '../../components/ui/SocialBar';

const Input = ({ type, title }) => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={title} className='capitalize'>{title}</label>
            <input type={type} id={title} className='bg-black-secondary border boder-2 border-white rounded-md caret-white' />
        </div>
    )
}

const Contact = () => {
    return (
        <Page>
            <Section>
                <div>
                    <h1>Let's work together</h1>
                </div>
                <div className='flex gap-10 mt-10'>
                    <div className='w-2/5'>
                        <h3 className='mt-0'>Get in touch with me</h3>
                        <p className='text-gray-primary'>
                            I would love to hear from you. I always answer within a few days.
                        </p>
                        <SocialBar />
                    </div>
                    <form action='' className='w-3/5 flex flex-col gap-6 bg-gray-800 rounded-xl p-10'>
                        <Input type='text' title='name' />
                        <Input type='email' title='email' />
                        <Input type='text' title='subject' />
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='message' className='capitalize'>Message</label>
                            <textarea id='message' className='bg-black-secondary border boder-2 border-white rounded-md caret-white h-52' />
                        </div>
                        <input type='submit' id='send' className='mt-6' value='Send' />
                    </form>
                </div>
            </Section>
        </Page>
    )
}

export default Contact;