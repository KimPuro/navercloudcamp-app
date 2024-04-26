import {faker} from "@faker-js/faker";

const files = [];

for (let i = 0; i < 8; i++) {
    files.push({
        title: '고양' + (i+1),
        date: faker.date.past().toLocaleDateString(), // 가짜 날짜를 생성하여 파일의 날짜 속성에 할당합니다.
        source: faker.image.urlLoremFlickr({ category: 'cats' }), // 고양이 이미지 URL을 생성하여 소스 속성에 할당합니다.
    });
}

export default function ImagesWithDetails() {
    return (
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {files.map((file) => (
                <li key={file.title} className="relative">
                    <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                        <button type="button" className="absolute inset-0 focus:outline-none">
                            <span className="sr-only">View details for {file.title}</span>
                        </button>
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
                    <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.date}</p>
                </li>
            ))}
        </ul>
    )
}
