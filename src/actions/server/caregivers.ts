"use server";

import { collections, dbConnect } from "@/src/lib/dbConnect";

export const getCaregiversData = async () => {
  try {
    const caregiversData = await dbConnect(collections.CAREGIVERS)
      .find({})
      .toArray();
    return caregiversData;
  } catch (error) {
    console.log(error);
  }
};

export const getCaregiverById = async (id: string) => {
  try {
    // Add minimum delay for better loading skeleton UX
    const [caregiverData] = await Promise.all([
      dbConnect(collections.CAREGIVERS).findOne({
        id: id,
      }),
      new Promise((resolve) => setTimeout(resolve, 200)),
    ]);
    
    return caregiverData;
  } catch (error) {
    console.log(error);
  }
};
