"use server";

import { connectToDB } from "@/lib/database";
import { handleError } from "@/lib/utils";
import User from "@/lib/database/models/user.model";
import Fundraiser from "@/lib/database/models/fundraiser.model";

interface FundraiserActionProps {
  userId: string;
}

// CREATE
export const createFundraiser = async ({ userId }: FundraiserActionProps) => {
  try {
    await connectToDB();

    const organizer = await User.findById(userId);

    if (!organizer) throw new Error("Organizer not found");

    const newFundraiser = await Fundraiser.create({
      organizer: userId,
      status: "draft",
    });

    return JSON.parse(JSON.stringify(newFundraiser));
  } catch (error) {
    handleError(error);
  }
};

export const getDraftFundraisers = async ({
  userId,
}: FundraiserActionProps) => {
  try {
    await connectToDB();

    const draftFundraisersByUser = await Fundraiser.find({ organizer: userId });

    return JSON.parse(JSON.stringify(draftFundraisersByUser));
  } catch (error) {
    handleError(error);
  }
};

export const getFundraiserById = async (fundraiserId: any) => {
  try {
    await connectToDB();

    // const fundraiser = await populateEvent(Fundraiser.findById(fundraiserId));
    const fundraiser = await Fundraiser.findById(fundraiserId);

    if (!fundraiser) throw new Error("Fundraiser not found!");

    return JSON.parse(JSON.stringify(fundraiser));
  } catch (error) {
    // handleError(error);
    console.log(error);
  }
};

// update formfields
export const updateFormField = async ({ userId, fundraiserId, data }: any) => {
  try {
    await connectToDB();

    const fundraiserToUpdate = await Fundraiser.findById(fundraiserId);
    if (!fundraiserToUpdate) throw new Error("Fundraiser not found");

    const updatedFundraiser = await Fundraiser.findByIdAndUpdate(
      fundraiserId,
      { ...data },
      { new: true }
    );

    return JSON.parse(JSON.stringify(updatedFundraiser));
  } catch (error) {
    handleError(error);
  }
};
