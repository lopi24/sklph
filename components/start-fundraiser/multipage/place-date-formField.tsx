import React from "react";
import CityProvinceFormField from "@/components/start-fundraiser/components/city-province-formField";
import StartEndTimeFormField from "@/components/start-fundraiser/components/start-end-time-formField";

import { FundraiserFormData } from "@/validator";
import { UseFormReturn } from "react-hook-form";
import FieldForm from "@/components/start-fundraiser/components/fieldForm";
import Guide from "../components/guide";

interface PlaceDateFormFieldProps {
  form: UseFormReturn<FundraiserFormData>;
}

const PlaceDateFormField = ({ form }: PlaceDateFormFieldProps) => {
  return (
    <div className="flex h-screen">
      <Guide
        header="Lets start your journey!"
        description="This is a multipage form, but don't worry, we will guide you through the
        entire fundraising process."
      />
      <FieldForm>
        <CityProvinceFormField form={form} />
        <StartEndTimeFormField form={form} />
      </FieldForm>
    </div>
  );
};

export default PlaceDateFormField;
