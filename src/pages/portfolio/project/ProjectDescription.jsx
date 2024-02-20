export default function Description ({ title, content, project }) {
    return (
      project[content] ? (
        <>
          <h3 className='mt-0'>{title}</h3>
          <div className='text-gray-primary leading-8 mb-10' dangerouslySetInnerHTML={{ __html: project[content] }} />
        </>
      ) : ''
    );
  }
