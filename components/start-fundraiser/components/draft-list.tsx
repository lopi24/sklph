"use client";

import { Card } from "@/components/ui/card";
import { FundraiserDraft } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DraftListProps {
  fundraiserDrafts: FundraiserDraft[];
}

const DraftList = ({ fundraiserDrafts }: DraftListProps) => {
  return (
    <div className="my-6">
      {fundraiserDrafts.map((fundraiser) => (
        <Link
          key={fundraiser?._id}
          href={`/create/start-fundraiser/place-date/${fundraiser._id}`}
        >
          <Card className="bg-gray-100 px-4 py-4 w-full flex justify-between rounded-md">
            <p>
              ID: <span>{fundraiser?._id}</span>
            </p>
            <p>
              Status: <span>{fundraiser?.status}</span>
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default DraftList;
