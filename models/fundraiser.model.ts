import { fundraiserFormSchema } from "@/validator";
import { Schema, model, models, Document } from "mongoose";

interface ImageType {
  path: String;
  preview: String;
}

export interface IFundraiser extends Document {
  _id: string;
  barangay?: string;
  city?: string;
  province?: string;
  benefeciary?: string;
  goal?: string;
  images?: ImageType[];
  story?: string;
  title?: string;
  status: string;
  startDateTime?: Date;
  endDateTime?: Date;
  organizer: { _id: string; username: string; email: string };
}

const ImageSchema = new Schema<ImageType>({
  path: { type: String },
  preview: { type: String },
});

const FundraiserSchema = new Schema<IFundraiser>({
  barangay: {
    type: String,
    // require: [true, "Barangay is required"],
  },
  city: {
    type: String,
    // required: [true, "City is required"],
  },
  province: {
    type: String,
    // required: [true, "Province is required"],
  },
  images: {
    type: [ImageSchema],
    // required: [true, "Images are required"],
  },
  goal: {
    type: String,
    // required: [true, "Goal amount is required"],
  },
  story: {
    type: String,
    // required: [true, "Story is required"],
  },
  title: {
    type: String,
    // required: [true, "Title is required"],
  },
  status: {
    type: String,
    enum: ["draft", "completed"],
    default: "draft",
  },
  startDateTime: { type: Date, default: null },
  endDateTime: { type: Date, default: null },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Fundraiser = models?.Fundraiser || model("Fundraiser", FundraiserSchema);

export default Fundraiser;
