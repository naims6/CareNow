import CaregiversPage from "@/src/components/Pages/caregivers/CaregiversPage";
import { getCaregiversData } from "@/src/actions/server/caregivers";
import { parseJSON } from "@/src/lib/utils";

interface ISearchParams {
  search?: string;
  page?: string;
  specialty?: string;
}

export default async function CaregiversContent({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
  const {
    caregivers: data,
    totalPages,
    page,
  } = await getCaregiversData({
    search: searchParams.search || "",
    page: Number(searchParams.page) || 1,
    specialty: searchParams.specialty || "",
    limit: 6,
  });

  const caregiversData = parseJSON(data);
  return (
    <CaregiversPage
      caregiversData={caregiversData}
      totalPages={totalPages}
      page={page}
    />
  );
}