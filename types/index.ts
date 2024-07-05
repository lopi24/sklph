export interface Donation {
  name: string;
  amount: string;
  date: string;
}

export interface ExtendedFile extends File {
  preview: string;
}

export interface FundraiserDraft {
  _id: string;
  status: string;
}