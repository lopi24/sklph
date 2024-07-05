interface HeaderProps {
  heading: string;
  description?: string;
}

const Header = ({ heading, description }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-black sm:text:6xl text-center">
        {heading}
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-center">
        {description}
      </p>
    </div>
  );
};

export default Header;
