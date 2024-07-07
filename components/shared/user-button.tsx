"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PiPiggyBankFill } from "react-icons/pi";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { FaUser } from "react-icons/fa";
import { IoIosLogOut, IoIosCreate } from "react-icons/io";
import { LogoutButton } from "./logout-button";
import {
  createFundraiser,
  getDraftFundraisers,
} from "@/lib/actions/fundraiser.actions";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";

const UserButton = () => {
  const router = useRouter();
  const user = useCurrentUser();

  const userId = user?.id as string;

  const createFundraiserhandler = async () => {
    // TODO: create post req for fundraiser and then will redirect to that newly created fundraiser and will address to fundraiserId /create/start-fundraiser/[steps]/[fundraiserId]

    try {
      const isDraftFundraiser = await getDraftFundraisers({ userId });

      if ((isDraftFundraiser?.length ?? 0) > 0) {
        router.push("/create/start-fundraiser/drafts");
      } else {
        const newFundraiser = await createFundraiser({
          userId,
        });

        if (newFundraiser) {
          router.push(
            `/create/start-fundraiser/place-date/${newFundraiser._id}`
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-7 w-7">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-white">
            <FaUser className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto">
        <DropdownMenuItem className="p-0">
          <Link
            href="/account/settings"
            className="flex items-center w-full px-2 py-3"
          >
            <FaUser className="h-4 w-4 mr-2" />
            Account settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <Link
            href="/account/your-fundraisers"
            className="flex items-center w-full px-2 py-3"
          >
            <PiPiggyBankFill className="h-4 w-4 mr-2" />
            Your fundraisers
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <Button
            // href="/create/start-fundraiser"
            variant="ghost"
            onClick={createFundraiserhandler}
            className="font-normal flex items-center w-full px-2 py-3"
          >
            <IoIosCreate className="h-4 w-4 mr-2" />
            Start a fundraiser
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <LogoutButton className="w-full flex items-center cursor-pointer px-2 py-3">
            <IoIosLogOut className="h-4 w-4 mr-2" />
            Logout
          </LogoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
