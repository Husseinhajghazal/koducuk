const SectionHeader = ({ eyebrow, title, link, href }) => {
  return (
    <div className="flex flex-col gap-8 text-center">
      <h5 className="text-lg md:text-2xl text-white font-semibold mx-auto relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-ai-purple">
        {eyebrow}
      </h5>
      <h3 className=" text-2xl md:text-4xl lg:text-5xl text-white font-bold">
        {title}
      </h3>
      <a
        href={href}
        className="text-base lg:text-xl font-medium text-ai-purple flex items-center justify-center gap-2"
      >
        <span>{link}</span>
        <span className="text-sm">🔗</span>
      </a>
    </div>
  );
};

export default SectionHeader;
