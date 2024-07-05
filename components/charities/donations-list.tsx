"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FaUser } from "react-icons/fa";
import { Donation } from "@/types";
import { Button } from "@/components/ui/button";

interface DonationsListProps {
  donations: string;
  donationsList: Donation[];
}

const DonationsList = ({ donations, donationsList }: DonationsListProps) => {
  return (
    <Dialog>
      <DialogTrigger className="text-gray-500 text-sm">
        See all people who donated
      </DialogTrigger>
      <DialogContent className="h-3/4 px-0">
        <DialogHeader className="w-full flex flex-row justify-between items-center px-6">
          <DialogTitle className="text-2xl">
            Donations ({donations})
          </DialogTitle>
          <DialogDescription className="pr-6">
            See top donations
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full w-full rounded-md border-none px-6">
          <ul className="flex flex-col gap-6">
            {donationsList.map((donation, index) => (
              <li key={index} className="flex gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200">
                  <FaUser className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    {donation.name}
                    <span className="text-gray-500"> • </span>
                    <span className="text-xs text-gray-500">
                      {donation.date}
                    </span>
                  </p>
                  <p className="text-base text-black">₱ {donation.amount}</p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
        <div className="px-6">
          <Button className="w-full py-6"> Donate Now</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationsList;
