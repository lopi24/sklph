"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { FaUser } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";

interface OrganizerProps {
  organizers: {
    name: string;
    address: string;
    company: string;
  }[];
}

const Organizer = ({ organizers }: OrganizerProps) => {
  const user = useCurrentUser();

  return (
    <div className="border-b-2 py-12 flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Organizer/s</h1>
      <div className="flex flex-wrap md:grid md:grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {organizers.map((organizer, index) => (
          <Card
            key={index}
            className="w-full flex flex-row items-center justify-between px-4 pt-4 pb-3 gap-2"
          >
            <div className="flex gap-2">
              <CardHeader className="p-0">
                <Avatar>
                  <AvatarImage src={user?.image || ""} />
                  <AvatarFallback>
                    <FaUser className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="flex flex-col items-start justify-center p-0">
                <h1 className="font-semibold text-base leading-3">
                  {organizer.name}
                </h1>
                <p className="text-sm">{organizer.company}</p>
                <p className="text-sm text-gray-500">{organizer.address}</p>
              </CardContent>
            </div>
            <CardFooter className="flex items-center justify-center p-0">
              <Button className="rounded-full p-2 px-4 flex items-center justify-center gap-1">
                <LuMessageCircle className="h-5 w-5" />
                <p>Contact</p>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Organizer;
