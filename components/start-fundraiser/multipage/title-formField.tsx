import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FundraiserFormData } from "@/validator";
import Guide from "@/components/start-fundraiser/components/guide";
import FieldForm from "@/components/start-fundraiser/components/fieldForm";

interface TitleFormFieldProps {
  form: UseFormReturn<FundraiserFormData>;
  setIsFifthStepValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const TitleFormField = ({ form, setIsFifthStepValid }: TitleFormFieldProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length < 3 || value.length > 60) {
      setIsFifthStepValid(false);
      form.setError("title", {
        type: "manual",
        message: "Title must be 3 to 60 characters only",
      });
    } else {
      setIsFifthStepValid(true);
      form.clearErrors("title");
    }

    e.target.value = value;
  };

  return (
    <div className="flex h-screen">
      <Guide />
      <FieldForm>
        <div className="flex flex-col mb-4 px-2">
          <h1 className="text-lg">Donate to help...</h1>
        </div>
        <div className="relative items-center flex flex-row gap-4 p-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="w-full">
                  <Input
                    {...field}
                    min="3"
                    max="60"
                    onInput={handleInput}
                    placeholder="Write your title here"
                    className="w-full py-6 px-4"
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

export default TitleFormField;
