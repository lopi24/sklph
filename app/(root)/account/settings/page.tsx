"use client";

import Header from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { useSessionContext } from "@/context/SessionContext";
import { useSession } from "next-auth/react";

const Settings = () => {
  const { data, status } = useSession();
  console.log(data, status);
  // const { session, status } = useSessionContext();
  // console.log(data);
  return (
    <section className="wrapper flex items-center justify-center">
      <div className="w-1/2 flex flex-col gap-10">
        <Header heading="Settings" />
        <div className="flex justify-between items-center border-b pb-10 border-gray-500">
          <div className="flex flex-col gap-4">
            <h1 className="text-black font-bold text-base">Name</h1>
            {status === "loading" ? (
              <p>Loading...</p>
            ) : (
              <p className="text-base">{data?.user?.name}</p>
            )}
          </div>
          <Button size="lg" variant="default">
            Edit
          </Button>
        </div>
        <div className="flex justify-between items-center border-b pb-10 border-gray-500">
          <div className="flex flex-col gap-4">
            <h1 className="text-black font-bold text-base">Email</h1>
            {status === "loading" ? (
              <p>Loading...</p>
            ) : (
              <p className="text-base">{data?.user?.email}</p>
            )}
          </div>
          <Button size="lg" variant="default">
            Edit
          </Button>
        </div>
        <div className="flex justify-between items-center border-b pb-10 border-gray-500">
          <div className="flex flex-col gap-4">
            <h1 className="text-black font-bold text-base">Phone number</h1>
            <p className="text-base">+63 919 123 4567</p>
          </div>
          <Button size="lg" variant="default">
            Add phone number
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
