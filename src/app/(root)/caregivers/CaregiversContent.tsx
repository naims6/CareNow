import CaregiversPage from "@/src/components/Pages/caregivers/CaregiversPage";
import { getCaregiversData } from "@/src/actions/server/caregivers";
import { parseJSON } from "@/src/lib/utils";

export default async function CaregiversContent() {
  const data = await getCaregiversData();
  const caregiversData = parseJSON(data);
  return <CaregiversPage caregiversData={caregiversData} />;
}