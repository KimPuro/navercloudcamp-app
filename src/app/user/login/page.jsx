'use client'
import SimpleCard from "@/components/signInForms/SimpleCard";
import CenteredWithSingleAction from "@/components/dialogs/CenteredWithSingleAction";
import WithRightAlignedNav from "@/components/headers/WithRightAlignedNav";
import axios from "axios";
import {axiosPostLogin} from "@/libs/axiosAPI";

export default function Home() {

  const a = "qwerty"
  const b = "1234"
  const go = ()=>{
  axiosPostLogin(a,b,"/users/login")
    }
  return (
<>
  <WithRightAlignedNav/>
    <SimpleCard/>
  <CenteredWithSingleAction/>
  <div onClick={go}>dsfadfadfadfadfadf</div>
</>
  );
}
