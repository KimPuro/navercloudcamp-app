import SideBySide from "@/components/testimonials/SideBySide";
import WithOverlappingImage from "@/components/testimonials/WithOverlappingImage";
import WithRightAlignedNav from "@/components/headers/WithRightAlignedNav";

export default function Home() {
    return (
        <>
            <WithRightAlignedNav/>
            <SideBySide/>
            <WithOverlappingImage/>
        </>
    );
}
