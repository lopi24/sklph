"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ExtendedFile } from "@/types";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FundraiserFormData, fundraiserFormSchema } from "@/validator";

import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";

import ImageFormField from "@/components/start-fundraiser/multipage/image-formField";
import GoalFormField from "@/components/start-fundraiser/multipage/goal-formField";
import StepButton from "@/components/start-fundraiser/components/step-button";
import StoryFormField from "@/components/start-fundraiser/multipage/story-formField";
import TitleFormField from "@/components/start-fundraiser/multipage/title-formField";
import { useParams, useRouter } from "next/navigation";
import PlaceDateFormField from "@/components/start-fundraiser/multipage/place-date-formField";
import ReviewFormField from "@/components/start-fundraiser/multipage/review-formField";
import {
  getFundraiserById,
  updateFormField,
} from "@/lib/actions/fundraiser.actions";
import { useSession } from "next-auth/react";

// TODO: fetch the draft and pass the values to the form fields of multipage form and display the value to that field. If none then it will have empty string. Whenever clicked back it will refetch the latest field of the form and pass it to the form fields and display the values to thir multipage form fields.

const FundraiserForm = () => {
  const session = useSession();
  const router = useRouter();
  const params = useParams();

  const step = Array.isArray(params.steps) ? params.steps[0] : params.steps;
  const fundraiserId = params.fundraiserId;

  // const [step, setStep] = useState(0); // Step state
  const [files, setFiles] = useState<ExtendedFile[]>([]); // Files state
  const [isSecondStepValid, setIsSecondStepValid] = useState(false);
  const [isFourthStepValid, setIsFourthStepValid] = useState(false);
  const [isFifthStepValid, setIsFifthStepValid] = useState(false);

  const form = useForm<FundraiserFormData>({
    resolver: zodResolver(fundraiserFormSchema),
    defaultValues: {
      barangay: "",
      city: "",
      province: "",
      startDateTime: undefined,
      endDateTime: undefined,
      images: [],
    },
  });

  useEffect(() => {
    const fetchFundraiser = async () => {
      try {
        const fundraiserData = await getFundraiserById(fundraiserId);

        if (fundraiserData.goal) {
          setIsSecondStepValid(true);
        }

        form.setValue("barangay", fundraiserData.barangay || "");
        form.setValue("city", fundraiserData.city || "");
        form.setValue("province", fundraiserData.province || "");
        form.setValue("startDateTime", fundraiserData.startDateTime || "");
        form.setValue("endDateTime", fundraiserData.endDateTime || "");
        form.setValue("goal", fundraiserData.goal || "");
        // form.setValue("images", fundraiserData.images || []);
        // TODO: fix this
        if (fundraiserData.images) {
          const existingFiles = fundraiserData.images.map((image: any) => ({
            name: image,
            preview: image,
            type: "image",
          }));
          setFiles(existingFiles);
          form.setValue("images", existingFiles);
        }
      } catch (error) {
        console.error("Failed to fetch fundraiser datas", error);
      }
    };

    fetchFundraiser();
  }, [fundraiserId]);

  const onSubmit = (data: FundraiserFormData) => {
    console.log(data);
  };

  // Watch form inputs
  const { watch } = form;
  const barangay = watch("barangay");
  const city = watch("city");
  const province = watch("province");
  const startDateTime = watch("startDateTime");
  const endDateTime = watch("endDateTime");
  const goal = watch("goal");
  const story = watch("story");
  const title = watch("title");

  const isFirstStepComplete = !!(
    barangay &&
    city &&
    province &&
    startDateTime &&
    endDateTime
  );

  const isSecondStepComplete = !!(goal && isSecondStepValid);

  const isThirdStepComplete = files.length > 0;

  const isFourthStepComplete = !!(story && isFourthStepValid);

  const isFifthStepComplete = !!(title && isFifthStepValid);

  const nextStep = async () => {
    // TODO: when clicked it will call tha update action
    try {
      const data = form.getValues();

      const plainData = JSON.parse(JSON.stringify(data));

      await updateFormField({
        userId: session?.data?.user?.id,
        fundraiserId,
        data: plainData,
      });

      const steps = ["place-date", "goal", "media", "story", "title", "review"];
      const currentStep = Array.isArray(step) ? step[0] : step;
      const currentIndex = steps.indexOf(currentStep);
      if (currentIndex < steps.length - 1) {
        const nextStep = steps[currentIndex + 1];
        router.push(`/create/start-fundraiser/${nextStep}/${fundraiserId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const prevStep = () => {
    const steps = ["place-date", "goal", "media", "story", "title", "review"];
    const currentStep = Array.isArray(step) ? step[0] : step;
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      const prevStep = steps[currentIndex - 1];
      router.push(`/create/start-fundraiser/${prevStep}/${fundraiserId}`);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {step === "place-date" && <PlaceDateFormField form={form} />}

        {step === "goal" && (
          <GoalFormField
            form={form}
            setIsSecondStepValid={setIsSecondStepValid}
          />
        )}

        {step === "media" && (
          <ImageFormField form={form} files={files} setFiles={setFiles} />
        )}

        {step === "story" && (
          <StoryFormField
            form={form}
            setIsFourthStepValid={setIsFourthStepValid}
          />
        )}

        {/* TODO: Step 4 = Title */}
        {step === "title" && (
          <TitleFormField
            form={form}
            setIsFifthStepValid={setIsFifthStepValid}
          />
        )}
        {/* TODO: Step 5 = Review */}
        {step === "review" && <ReviewFormField />}

        <StepButton
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
          isFirstStepComplete={isFirstStepComplete}
          isSecondStepComplete={isSecondStepComplete}
          isSecondStepValid={isSecondStepValid}
          isThirdStepComplete={isThirdStepComplete}
          isFourthStepComplete={isFourthStepComplete}
          isFourthStepValid={isFourthStepValid}
          isFifthStepComplete={isFifthStepComplete}
          isFifthStepValid={isFifthStepValid}
        />
      </form>
    </Form>
  );
};

export default FundraiserForm;
