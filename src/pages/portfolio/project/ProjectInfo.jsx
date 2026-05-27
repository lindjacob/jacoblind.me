export default function Info({ content, children, project }) {
  return (
    project[content] ? (
      <div className='mb-5'>
        <p className='text-gray-secondary opacity-100 font-semibold text-lg tracking-wider uppercase mb-3'>{content}</p>
        {children}
      </div>
    ) : ''
  )
}