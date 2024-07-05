import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

interface FieldFormProps {
  children?: React.ReactNode;
  className?: string;
}

const FieldForm = ({ children }: FieldFormProps) => {
  return (
    <div className="h-full w-3/5">
      <div className="h-1/5 w-full border-b-2" />
      <ScrollArea className="overflow-visible h-3/5 w-full px-28 py-4">
        {children}
      </ScrollArea>
      <div className="w-full border-t-2" />
    </div>
  );
};

export default FieldForm;
