import Image from "next/image";
import WithRightAlignedNav from "@/components/headers/WithRightAlignedNav";
import "./style.css"

const CssTestPage = () => {
    return (
        <>
        <WithRightAlignedNav/>
            <div id="egg-div">
        <img id="mr-egg-sushi" src="/images/icon/mr-egg-sushi.png" alt=""/>
            </div>
        </>
            )
}
export default CssTestPage