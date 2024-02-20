export default function Info ({ content, children, project }) {
    return (
      project[content] ? (
        <div className='mb-5'>
          <p className='text-gray-secondary font-semibold text-lg tracking-wider uppercase mb-3'>{content}</p>
          {children}
        </div>
      ) : ''
    )
  }
// max-w-[calc(50%-1rem)]