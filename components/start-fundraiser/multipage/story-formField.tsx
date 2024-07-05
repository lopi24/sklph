import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { UseFormReturn } from "react-hook-form";
import AutoGrowTextarea from "@/components/shared/autogrow-textarea";

import { FundraiserFormData } from "@/validator";
import Guide from "@/components/start-fundraiser/components/guide";
import FieldForm from "@/components/start-fundraiser/components/fieldForm";

interface StoryFormFieldProps {
  form: UseFormReturn<FundraiserFormData>;
  setIsFourthStepValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const StoryFormField = ({
  form,
  setIsFourthStepValid,
}: StoryFormFieldProps) => {
  return (
    <div className="flex h-screen">
      <Guide />
      <FieldForm>
        <div className="flex flex-col px-2 mb-4">
          <h1 className="text-lg">Tell your story</h1>
        </div>
        <div className="flex flex-row gap-4 px-2">
          <FormField
            control={form.control}
            name="story"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <AutoGrowTextarea
                    {...field}
                    form={form}
                    setIsFourthStepValid={setIsFourthStepValid}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </FieldForm>
    </div>
  );
};

export default StoryFormField;
