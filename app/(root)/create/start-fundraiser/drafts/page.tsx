"use client";

import Header from "@/components/shared/header";
import DraftList from "@/components/start-fundraiser/components/draft-list";
import { useCurrentUser } from "@/hooks/use-current-user";
import { getDraftFundraisers } from "@/lib/actions/fundraiser.actions";
import { FundraiserDraft } from "@/types";
import { useEffect, useState } from "react";

const Draft = () => {
  const user = useCurrentUser();
  const [fundraiserDrafts, setFundraiserDrafts] = useState<FundraiserDraft[]>(
    []
  );

  const userId = user?.id as string;

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

  return (
    <section className="wrapper">
      <Header heading="Fundraiser Drafts" />
      <DraftList fundraiserDrafts={fundraiserDrafts} />
    </section>
  );
};

export default Draft;
