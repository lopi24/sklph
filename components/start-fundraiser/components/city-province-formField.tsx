import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { UseFormReturn } from "react-hook-form";

import { FundraiserFormData } from "@/validator";

interface CityProvinceFormFieldProps {
  form: UseFormReturn<FundraiserFormData>;
}

const CityProvinceFormField = ({
  form
}: CityProvinceFormFieldProps) => {
  return (
    <div className="flex flex-col gap-4 px-2 mb-4">
      <div className="flex flex-col">
        <h1 className="text-lg">Where will the funds go?</h1>
        <p className="text-sm text-gray-500">
          Choose the location where the funds will go.
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <FormField
          control={form.control}
          name="barangay"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Barangay"
                  {...field}
                  className="input-field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="City" {...field} className="input-field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="province"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Province"
                  {...field}
                  className="input-field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default CityProvinceFormField;
