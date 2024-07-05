import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FundraiserFormData } from "@/validator";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Guide from "../components/guide";
import FieldForm from "../components/fieldForm";

interface GoalFormFieldProps {
  form: UseFormReturn<FundraiserFormData>;
  setIsSecondStepValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const GoalFormField = ({ form, setIsSecondStepValid }: GoalFormFieldProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value.startsWith("0")) {
      value = value.replace(/^0+/, "");
    }

    if (parseFloat(value) > 1000000) {
      setIsSecondStepValid(false);
      form.setError("goal", {
        type: "manual",
        message: "Goal exceeds the limit of ₱1,000,000.00",
      });
      // value = "1000000";
    } else {
      setIsSecondStepValid(true);
      form.clearErrors("goal");
    }

    e.target.value = value;
  };

  return (
    <div className="flex h-screen">
      <Guide />
      <FieldForm>
        <div className="flex flex-col px-2 mb-4">
          <h1 className="text-lg">Set your targel goal.</h1>
          <p className="text-sm text-gray-500">
            Keep in mind that transaction fees, including credit and debit
            charges, are deducted from each donation.
          </p>
        </div>
        <div className="relative items-center flex flex-row gap-4 px-2">
          <p className="absolute top-3 left-4 text-xl text-gray-500 font-extralight">
            ₱
          </p>
          <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="w-full">
                  <Input
                    {...field}
                    type="number"
                    min="1"
                    onInput={handleInput}
                    placeholder="Place your target goal"
                    className="w-full py-6 pl-8 pr-16"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="absolute top-3 right-4 text-md border rounded-full px-2 bg-gray-200 text-black">
            PHP
          </p>
        </div>
      </FieldForm>
    </div>
  );
};

export default GoalFormField;
