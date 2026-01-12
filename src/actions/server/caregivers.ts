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
    const caregiverData = await dbConnect(collections.CAREGIVERS).findOne({
      id: id,
    });
    return caregiverData;
  } catch (error) {
    console.log(error);
  }
};
