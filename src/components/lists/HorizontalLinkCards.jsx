import { faker } from '@faker-js/faker';

const people = [
    {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        role: faker.company.name(),
        imageUrl: faker.image.urlLoremFlickr({ category: 'cats' }),
    },
    {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        role: faker.company.name(),
        imageUrl: faker.image.urlLoremFlickr({ category: 'cats' }),
    },
    {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        role: faker.company.name(),
        imageUrl: faker.image.urlLoremFlickr({ category: 'cats' }),
    },
    {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        role: faker.company.name(),
        imageUrl: faker.image.urlLoremFlickr({ category: 'cats' }),
    },
    {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        role: faker.company.name(),
        imageUrl: faker.image.urlLoremFlickr({ category: 'cats' }),
    },
    {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        role: faker.company.name(),
        imageUrl: faker.image.urlLoremFlickr({ category: 'cats' }),
    },
    // More people...
]

export default function HorizontalLinkCards() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {people.map((person) => (
                <div
                    key={person.email}
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">{person.name}</p>
                            <p className="truncate text-sm text-gray-500">{person.role}</p>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}
