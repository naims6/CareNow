import { getCaregiverById, getCaregiversData } from "@/src/actions/server/caregivers";
import { CaregiverDetails } from "@/src/components/Pages/caregivers/CaregiverDetails";
import { parseJSON } from "@/src/lib/utils";

export async function CaregiverProfile({
  params,
}: {
  params: { caregiverId: string };
}) {
  const { caregiverId } = await params;
  const data = await getCaregiverById(caregiverId);
  const caregiverData = parseJSON(data);

  return <CaregiverDetails caregiver={caregiverData} />;
}

export default CaregiverProfile;
