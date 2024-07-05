import Organizer from "@/components/charities/organizer";
import Partnership from "@/components/charities/partnership";
import { organizerData, partnershipData } from "@/constants";
import WordsOfSupport from "@/components/charities/words-of-support";

import { wordsOfSupports } from "@/constants";

const Description = ({ description }: { description: string }) => {
  return (
    <div className="px-2">
      <p className="border-y-2 py-6 text-base leading-relaxed">{description}</p>
      <Organizer organizers={organizerData} />
      <Partnership partnership={partnershipData} />
      <WordsOfSupport data={wordsOfSupports} />
    </div>
  );
};

export default Description;
