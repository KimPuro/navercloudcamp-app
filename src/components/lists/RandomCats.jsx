"use client";
import {faker} from "@faker-js/faker";
import {useEffect, useState} from "react";

export default function ImagesWithDetails() {
        const [files, setFiles] = useState([]);

        useEffect(() => {
            const generatedFiles = [];
            for (let i = 0; i < 8; i++) {
                generatedFiles.push({
                    title: '고양' + (i + 1),
                    date: faker.date.past().toLocaleDateString(),
                    source: faker.image.urlLoremFlickr({ category: 'cats' }),
                });
            }
            setFiles(generatedFiles); // 생성된 파일 목록을 상태로 설정합니다.
        }, []); // 의존성 배열이 비어 있으므로 useEffect는 컴포넌트가 처음 렌더링될 때만 실행됩니다.
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
