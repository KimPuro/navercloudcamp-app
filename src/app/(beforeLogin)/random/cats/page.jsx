import HorizontalLinkCards from "@/components/lists/HorizontalLinkCards";
import Navbar from "@/components/headers/Navbar";
import {faker} from "@faker-js/faker";
import ImagesWithDetails from "@/components/lists/ImagesWithDetail";

const RandomCatsPage = () => {
    return (<>
            <Navbar/>
            <ImagesWithDetails/>
        </>
    )
}
export default RandomCatsPage;