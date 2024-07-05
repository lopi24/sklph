import { Button } from "@/components/ui/button";

interface StepButtonProps {
  step: string;
  isFirstStepComplete: boolean;
  isSecondStepComplete: boolean;
  isThirdStepComplete: boolean;
  isFourthStepComplete: boolean;
  isFifthStepComplete: boolean;
  nextStep: () => void;
  prevStep: () => void;
  isSecondStepValid: boolean;
  isFourthStepValid: boolean;
  isFifthStepValid: boolean;
}

const StepButton = ({
  step,
  prevStep,
  isFirstStepComplete,
  isSecondStepComplete,
  isThirdStepComplete,
  isFourthStepComplete,
  isFifthStepComplete,
  nextStep,
  isSecondStepValid,
  isFourthStepValid,
  isFifthStepValid,
}: StepButtonProps) => {
  return (
    <div className="w-3/5 px-32 flex items-center justify-between h-1/5 absolute bottom-0 right-0">
      {step !== "place-date" && <Button onClick={prevStep}>Back</Button>}

      {step === "place-date" && isFirstStepComplete && (
        <Button
          type="button"
          onClick={nextStep}
          disabled={!isFirstStepComplete}
        >
          Next
        </Button>
      )}

      {step === "goal" && isSecondStepValid && isSecondStepComplete && (
        <Button
          type="button"
          onClick={nextStep}
          disabled={!isSecondStepComplete}
        >
          Next
        </Button>
      )}

      {step === "media" && isThirdStepComplete && (
        <Button
          type="button"
          onClick={nextStep}
          disabled={!isThirdStepComplete}
        >
          Next
        </Button>
      )}

      {step === "story" && isFourthStepValid && isFourthStepComplete && (
        <Button
          type="button"
          onClick={nextStep}
          disabled={!isFourthStepComplete}
        >
          Next
        </Button>
      )}

      {step === "title" && isFifthStepValid && isFifthStepComplete && (
        <Button
          type="button"
          onClick={nextStep}
          disabled={!isFifthStepComplete}
        >
          Review
        </Button>
      )}

      {/* TODO: review component */}
    </div>
  );
};

export default StepButton;
