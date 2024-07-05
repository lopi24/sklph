"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import DonationsList from "@/components/charities/donations-list";
import ShareButton from "@/components/charities/share-button";
import { Donation } from "@/types";
import Link from "next/link";

interface StickyCardProps {
  goal: string;
  donations: string;
  raised: string;
  donationsList: Donation[];
}

const StickyCard = ({
  goal,
  donations,
  raised,
  donationsList,
}: StickyCardProps) => {
  return (
    <div className="hidden w-1/3 h-fit md:flex gap-4 sticky top-16">
      <Card className="w-full h-full shadow-lg sticky top-0">
        <CardHeader className="">
          <div className="flex flex-row w-full gap-2 items-center">
            <h1 className="text-2xl font-light">₱ {raised}</h1>
            <span className="text-sm text-gray-500">
              PHP raised of ₱ {goal} goal
            </span>
          </div>
          <Progress value={33} />
          <p className="text-sm text-gray-500">{donations} donations</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="w-full flex flex-row gap-4">
            <ShareButton />
            <Button asChild className="w-full py-6">
              <Link href="/donate-now">Donate now</Link>
            </Button>
          </div>
          <DonationsList donations={donations} donationsList={donationsList} />
        </CardContent>
      </Card>
    </div>
  );
};

export default StickyCard;
