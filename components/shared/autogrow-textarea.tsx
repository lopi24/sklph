import { Textarea, TextareaProps } from "@/components/ui/textarea";

import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

import { UseFormReturn } from "react-hook-form";
import { FundraiserFormData } from "@/validator";

interface AutoGrowTextareaProps extends Omit<TextareaProps, "form"> {
  onInput?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  form: UseFormReturn<FundraiserFormData>;
  setIsFourthStepValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const AutoGrowTextarea = forwardRef<HTMLTextAreaElement, AutoGrowTextareaProps>(
  ({ setIsFourthStepValid, form, onInput, ...props }, ref) => {
    const innerRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => innerRef.current!, [innerRef]);

    useEffect(() => {
      const textarea = innerRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, []);

    const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
      const textarea = event.currentTarget as HTMLTextAreaElement;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;

      if (onInput) onInput(event);

      //  for error validation message
      const target = event.target as HTMLTextAreaElement;
      let value = target.value;

      if (value.length < 100 || value.length > 8000) {
        setIsFourthStepValid(false);
        form.setError("story", {
          type: "manual",
          message: "Story must be 100 to 8000 characters only",
        });
      } else {
        setIsFourthStepValid(true);
        form.clearErrors("story");
      }

      target.value = value;
    };

    return (
      <Textarea
        className="resize-none border-none focus:outline-none outline-none bg-transparent focus-visible:ring-transparent shadow-none"
        placeholder="Write your story here..."
        ref={innerRef}
        {...props}
        onInput={handleInput}
      />
    );
  }
);

AutoGrowTextarea.displayName = "AutoGrowTextarea";

export default AutoGrowTextarea;
