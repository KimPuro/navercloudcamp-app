import HorizontalLinkCards from "@/components/lists/HorizontalLinkCards";
import WithRightAlignedNav from "@/components/headers/WithRightAlignedNav";
import {faker} from "@faker-js/faker";

const Cat = () => {
    let cats = []
    for(let i = 0; i<15; i++){
        cats.push(faker.image.urlLoremFlickr({ category: 'cats' }),)
    }

    return (<>
            <WithRightAlignedNav/>
            {cats.map((cat)=> <img src={cat} className="w-1/5 inline-block"/>)}
        </>
    )
}
export default Cat;