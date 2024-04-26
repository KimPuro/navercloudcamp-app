import MainMiddle from "@/components/testimonials/MainMiddle";
import Last from "@/components/testimonials/Last";
import Navbar from "@/components/headers/Navbar";
import Hong from "@/components/testimonials/Hong";
import Bean from "@/components/testimonials/Bean";

export default function Home() {
    return (
        <>
            <Navbar/>
            <MainMiddle/>
            <Hong/>
            <Last/>
            <Bean/>
        </>
    );
}
