"use server";

import { collections, dbConnect } from "@/src/lib/dbConnect";

interface ICaregivers {
  search?: string;
  specialty?: string;
  page?: number;
  limit?: number;
}

export const getCaregiversData = async ({
  search = "",
  specialty = "",
  page = 1,
  limit = 6,
}: ICaregivers) => {
  try {
    const skip = (page - 1) * limit;
    const query: any = {};

    if (search) {
      query.$or = [
        {
          name: { $regex: search, $options: "i" },
        },
        {
          specialty: { $regex: search, $options: "i" },
        },
      ];
    }
    if (specialty) {
      query.specialty = { $regex: specialty, $options: "i" };
    }

    const caregivers = await dbConnect(collections.CAREGIVERS)
      .find(query)
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await dbConnect(collections.CAREGIVERS).countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    return { caregivers, totalPages, page };
  } catch (error) {
    console.log(error);
    return { caregivers: [], totalPages: 0, page: 0 };
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
