"use client";
import {useEffect, useState} from "react";
import {axiosGet} from "@/libs/axiosAPI";

/*const people = [
    { boardName: '게시판 이름', explanation: '게시판 설명', recent: '최근 글', count: '글 수', path : "#"},
]*/


export default function WithVerticalLines() {
    const [board, setBoard] = useState([]);  // people 상태 정의
    useEffect(() => {
        const fetchBoard = async () => {
            const result = await axiosGet("/board/list");  // 비동기 함수 호출
            setBoard(result);  // 결과를 people 상태에 저장
        };

        fetchBoard();
    }, []);  // 컴포넌트 마운트 시 한 번만 실행
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">게시판</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        게시판의 목록입니다.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        글 올리기
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr className="divide-x divide-gray-200">
                                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    게시판 이름
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    게시판 설명
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    최근 글
                                </th>
                                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                                    글 수
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                            {people.map((person) => (
                                <tr key={person.boardName} className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0" >
                                        <a href={person.path}>{person.boardName}</a>
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.explanation}</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.recent}</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{person.count}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
