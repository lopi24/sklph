"use client";

import Header from "@/components/shared/header";
import DraftList from "@/components/start-fundraiser/components/draft-list";
import { getDraftFundraisers } from "@/lib/actions/fundraiser.actions";
import { FundraiserDraft } from "@/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Draft = () => {
  const { data } = useSession();
  const [fundraiserDrafts, setFundraiserDrafts] = useState<FundraiserDraft[]>(
    []
  );

  const userId = data?.user?.id as string;

  useEffect(() => {
    const fetchDrafts = async () => {
      if (userId) {
        try {
          const fundraiserDrafts = await getDraftFundraisers({ userId });

          setFundraiserDrafts(fundraiserDrafts);
        } catch (error) {
          console.error("Failed to fetch drafts: ", error);
        }
      }
    };

    fetchDrafts();
  }, [userId]);

  // console.log(fundraiserDrafts);

  return (
    <section className="wrapper">
      <Header heading="Fundraiser Drafts" />
      <DraftList fundraiserDrafts={fundraiserDrafts} />
    </section>
  );
};

export default Draft;
