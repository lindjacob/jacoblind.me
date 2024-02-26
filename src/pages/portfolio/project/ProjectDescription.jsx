export default function Description ({ title, content, project }) {
    return (
      project[content] ? (
        <>
          <h2 className='mt-0'>{title}</h2>
          <div className='opacity-85 leading-8 mb-10' dangerouslySetInnerHTML={{ __html: project[content] }} />
        </>
      ) : ''
    );
  }
