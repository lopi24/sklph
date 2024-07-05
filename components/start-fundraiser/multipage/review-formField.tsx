import React from "react";
import Guide from "@/components/start-fundraiser/components/guide";
import FieldForm from "@/components/start-fundraiser/components/fieldForm";

const ReviewFormField = () => {
  // TODO: check if it saves per page whenever you fill up every page in multipage form
  return (
    <div className="flex h-screen">
      <Guide />
      <FieldForm>
        <div className="px-2">
          <h1>Check if you want to edit something before you publish it</h1>
        </div>
      </FieldForm>
    </div>
  );
};

export default ReviewFormField;
