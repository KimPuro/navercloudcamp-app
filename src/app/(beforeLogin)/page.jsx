import SideBySide from "@/components/testimonials/SideBySide";
import WithOverlappingImage from "@/components/testimonials/WithOverlappingImage";
import Navbar from "@/components/headers/Navbar";
import WithOverlappingImage2 from "@/components/testimonials/WithOverlappingImage2";

export default function Home() {
    return (
        <>
            <Navbar/>
            <SideBySide/>
            <WithOverlappingImage2/>
            <WithOverlappingImage/>
        </>
    );
}
