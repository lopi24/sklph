import { FaUser } from "react-icons/fa";

interface SupportWords {
  name: string;
  amount: string;
  words: string;
}

interface WordsOfSupportProps {
  data: SupportWords[];
}

const WordsOfSupport = ({ data }: WordsOfSupportProps) => {
  return (
    <div className="py-12 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">
        Words of support ({data.length})
      </h1>
      <ul className="flex flex-col gap-8">
        {data.map((support, index) => (
          <li key={index} className="flex gap-4">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200">
              <FaUser className="h-5 w-5" />
            </div>

            <div>
              <p className="text-base font-medium">
                {support.name}
                <span className="text-gray-500"> • </span>
                <span className="text-xs text-gray-500">1hr ago</span>
              </p>
              <p className="text-sm text-gray-500 leading-3">
                ₱ {support.amount}
              </p>
              <p className="text-base text-gray-500 mt-1">{support.words}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordsOfSupport;
