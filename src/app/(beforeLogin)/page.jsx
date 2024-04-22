import SideBySide from "@/components/testimonials/SideBySide";
import WithOverlappingImage from "@/components/testimonials/WithOverlappingImage";
import WithRightAlignedNav from "@/components/headers/WithRightAlignedNav";
import WithOverlappingImage2 from "@/components/testimonials/WithOverlappingImage2";

export default function Home() {
    return (
        <>
            <WithRightAlignedNav/>
            <SideBySide/>
            <WithOverlappingImage2/>
            <WithOverlappingImage/>
        </>
    );
}
