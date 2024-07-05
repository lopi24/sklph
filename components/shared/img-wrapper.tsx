import Image from "next/image";

interface ImgWrapperProps {
  src: string;
  className?: string;
}

const ImageWrapper = ({ src, className }: ImgWrapperProps) => {
  return (
    <div className={className}>
      <div className="w-full rounded-md bg-black overflow-hidden">
        <Image
          src={src}
          alt="About Us Page"
          width="0"
          height="0"
          sizes="100vh"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageWrapper;
