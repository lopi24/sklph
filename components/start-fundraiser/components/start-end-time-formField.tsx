import Image from "next/image";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { UseFormReturn } from "react-hook-form";
import { FundraiserFormData } from "@/validator";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

interface StartEndTimeFormFieldProps {
  form: UseFormReturn<FundraiserFormData>;
  latestData: any;
}

const StartEndTimeFormField = ({
  form,
  latestData,
}: StartEndTimeFormFieldProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleStartDateChange = (date: Date | null) => {
    if (date === null) return;
    setStartDate(date);
    form.setValue("startDateTime", date); // update form value to match state
    if (endDate !== null && date > endDate) {
      setEndDate(date);
      form.setValue("endDateTime", date); // update form value to match state
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    if (date === null) return;
    // Ensure endDate is not earlier than startDate
    if (startDate !== null && date < startDate) {
      setEndDate(startDate);
      form.setValue("endDateTime", startDate); // update form value to match state
    } else {
      setEndDate(date);
      form.setValue("endDateTime", date); // update form value to match state
    }
  };

  return (
    <div className="flex flex-col gap-4 px-2">
      <div className="flex flex-col">
        <h1 className="text-lg">When will this take place?</h1>
        <p className="text-sm text-gray-500">
          Select the date when the funds will be utilized.
        </p>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <FormField
          control={form.control}
          name="startDateTime"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="flex items-center justify-center w-full rounded-md bg-gray-50 px-4 py-2 border">
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt="calendar"
                    width={24}
                    height={24}
                    className="filter-grey"
                  />
                  <p className="ml-3 whitespace-nowrap text-gray-500 text-base">
                    Start Date:
                  </p>
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => {
                      handleStartDateChange(date);
                      field.onChange(date); // update form field value
                    }}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    showTimeSelect
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    wrapperClassName="datePicker"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endDateTime"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="flex items-center justify-center w-full rounded-md bg-gray-50 px-4 py-2 border">
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt="calendar"
                    width={24}
                    height={24}
                    className="filter-grey"
                  />
                  <p className="ml-3 whitespace-nowrap text-gray-500 text-base">
                    End Date:
                  </p>
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => {
                      handleEndDateChange(date);
                      field.onChange(date); // update form field value
                    }}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate ?? new Date()}
                    showTimeSelect
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    wrapperClassName="datePicker"
                    filterTime={(time) => {
                      // Prevent endDateTime from being earlier than startDateTime on the same date
                      if (
                        startDate &&
                        startDate.toDateString() === time.toDateString()
                      ) {
                        return time >= startDate;
                      }
                      return true;
                    }}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default StartEndTimeFormField;
