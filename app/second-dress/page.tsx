import { SecondDressesPage } from "@/components/SecondDressesPage";
import { getSecondDresses } from "@/lib/secondDress";

export default async function SecondDressRoute() {
  const secondDresses = await getSecondDresses();

  return <SecondDressesPage secondDresses={secondDresses} />;
}
