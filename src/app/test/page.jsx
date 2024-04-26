import HorizontalLinkCards from "@/components/lists/HorizontalLinkCards";
import {faker} from "@faker-js/faker";

export default function After() {
    const cats = [{
        iURL : faker.image.urlLoremFlickr({ category: 'cats' }),
        iURL2 : faker.image.urlLoremFlickr({ category: 'cats' }),
        iURL3 : faker.image.urlLoremFlickr({ category: 'cats' }),
        iURL4 : faker.image.urlLoremFlickr({ category: 'cats' }),
        iURL5 : faker.image.urlLoremFlickr({ category: 'cats' }),
        }
    ]

    return (<>
            {cats.map((cat)=>{
                return(
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-row justify-center items-center">
                            <img src={cat.iURL} className="w-1/5 h-1/5"/>
                            <img src={cat.iURL2} className="w-1/5 h-1/5"/>
                            <img src={cat.iURL3} className="w-1/5 h-1/5"/>
                            <img src={cat.iURL4} className="w-1/5 h-1/5"/>
                            <img src={cat.iURL5} className="w-1/5 h-1/5"/>
                        </div>
                    </div>
                )
            })}
        </>
    )
}