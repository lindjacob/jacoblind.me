import { IoIosArrowDown } from "react-icons/io";

export default function ScrollButton({ href, scrollBehavior = 'smooth', offset = 0 }) {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: elementPosition, behavior: scrollBehavior });
    }
  };

  return (
    <a
      href={href}
      className={`bg-blue-primary size-16 lg:size-20 rounded-full flex justify-center items-center scroll-smooth hover:scale-90 transition-all duration-300`}
      onClick={handleClick}>
          <IoIosArrowDown className='size-10 lg:size-12 animate-bounce' />
    </a>
  );
}