interface GuideProps {
  header?: string;
  description?: string;
}

const Guide = ({
  header = "Hello World!",
  description = "Lorem ipsum",
}: GuideProps) => {
  return (
    <div className="w-2/5 flex flex-col gap-8 bg-gray-100 px-20 py-44">
      <h1 className="text-3xl">{header}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default Guide;
