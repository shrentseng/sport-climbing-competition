export type Athlete = {
  athlete_id: number;
  firstname: string;
  lastname: string;
  name: string;
  gender: number;
  federation: string;
  federation_id: number;
  country: string;
  d_cats: {
    id: number;
    name: string;
    status: string;
  }[];
};

export enum DCATS {
  BOULDERANDLEAD_MEN = 677,
  BOULDERANDLEAD_WOMEN = 682,
}

export const Gender = {
  0: "Male",
  1: "Female",
} as const;

export type GenderCode = keyof typeof Gender;

export function getGenderString(genderCode: GenderCode): string {
  return Gender[genderCode];
}

export type Result = {
  season: string;
  rank: number;
  discipline: string;
  event_name: string;
  event_id: number;
  event_location: string;
  d_cat: number;
  date: string;
  category_name: string;
  result_url: string;
};
