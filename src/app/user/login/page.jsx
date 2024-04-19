import SimpleCard from "@/components/signInForms/SimpleCard";
import CenteredWithSingleAction from "@/components/dialogs/CenteredWithSingleAction";
import WithRightAlignedNav from "@/components/headers/WithRightAlignedNav";

export default function Home() {
  return (
<>
  <WithRightAlignedNav/>
    <SimpleCard/>
  <CenteredWithSingleAction/>
</>
  );
}
