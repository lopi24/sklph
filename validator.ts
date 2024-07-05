import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

// Define the image schema
export const imageSchema = z.object({
  size: z.number().max(MAX_FILE_SIZE, `Max image size is 5MB.`),
  type: z
    .string()
    .refine(
      (type) => ACCEPTED_IMAGE_TYPES.includes(type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  name: z.string(),
  preview: z.string(),
});

// Extend the existing fundraiser form schema to include the images validation
export const fundraiserFormSchema = z.object({
  barangay: z.string().min(2, "Barangay must be at least 2 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  province: z.string().min(2, "Province must be at least 2 characters"),
  goal: z
    .string()
    .min(1, "Goal must be at least ₱1.00")
    .refine(
      (value) => {
        const numValue = parseFloat(value);
        return !isNaN(numValue) && numValue > 0 && numValue <= 1000000;
      },
      {
        message: "Goal must be between ₱1.00 and ₱1,000,000.00",
      }
    ),
  story: z
    .string()
    .min(100, "Tell more about your story")
    .max(8000, "Story must be less than or equal to 8000 characters"),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(60, "Title must be less than or equal to 60 characters"),
  startDateTime: z.date(),
  endDateTime: z.date(),
  images: z.array(imageSchema).min(1, "Insert/drop at least 1 image"),
});

export type ImageFormData = z.infer<typeof imageSchema>;

// Define the type for the fundraiser form data
export type FundraiserFormData = z.infer<typeof fundraiserFormSchema>;
