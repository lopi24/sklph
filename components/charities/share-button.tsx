"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import SocialButton from "./social-button";
import { usePathname } from "next/navigation";

const ShareButton = () => {
  const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger className="bg-black text-white rounded-md hover:bg-primary/90 text-sm w-full">
        Share
      </DialogTrigger>
      <DialogContent className="w-full flex flex-col h-1/2 max-h-[75%] px-0">
        <DialogHeader className="w-full flex flex-col px-6">
          <DialogTitle className="text-2xl">
            Helping through sharing
          </DialogTitle>
          <DialogDescription className="pr-6">
            Sharing fundraisers with your friends on social media can make a big
            difference. Use your unique links below to help them contribute.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full w-full px-6">
          <SocialButton url={`localhost:3000${pathname}`} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ShareButton;
