"use client";

import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { ExtendedFile } from "@/types";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FundraiserFormData, fundraiserFormSchema } from "@/validator";

import { Form } from "@/components/ui/form";

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
import { useCurrentUser } from "@/hooks/use-current-user";


const FundraiserForm = () => {
  const user = useCurrentUser()
  const router = useRouter();
  const params = useParams();

  const step = Array.isArray(params.steps) ? params.steps[0] : params.steps;
  const fundraiserId = params.fundraiserId;

  const [files, setFiles] = useState<ExtendedFile[]>([]);
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

  const fetchFundraiser = useCallback(async () => {
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
      console.error("Failed to fetch fundraiser data", error);
    }
  }, [fundraiserId, form]);

  useEffect(() => {
    fetchFundraiser();
  }, [fetchFundraiser]);

  const onSubmit = async (data: FundraiserFormData) => {
    console.log(data);
  };

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

  const steps = ["place-date", "goal", "media", "story", "title", "review"];
  const currentStepIndex = steps.indexOf(step);

  const nextStep = async () => {
    try {
      const data = form.getValues();
      const plainData = JSON.parse(JSON.stringify(data));

      await updateFormField({
        userId: user?.id,
        fundraiserId,
        data: plainData,
      });

      if (currentStepIndex < steps.length - 1) {
        const nextStep = steps[currentStepIndex + 1];
        router.push(`/create/start-fundraiser/${nextStep}/${fundraiserId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      const prevStep = steps[currentStepIndex - 1];
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
        {step === "title" && (
          <TitleFormField
            form={form}
            setIsFifthStepValid={setIsFifthStepValid}
          />
        )}
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
