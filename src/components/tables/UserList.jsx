'use client'
import {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {axiosGet} from "@/libs/axiosAPI";
import OnDark from "@/components/banners/OnDark";

/*[
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
    },
    // More people...
]*/
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function UserList() {
    const checkbox = useRef();
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    const [selectedPeople, setSelectedPeople] = useState([]);
    const [people, setPeople] = useState([]);
    const selectedEmails = () => {
        console.log(selectedPeople.map(person => person.id));
    };


    useEffect(() => {
        const fetchPeople = async () => {
            const result = await axiosGet("/users/list");  // 비동기 함수 호출
            setPeople(result);  // 결과를 people 상태에 저장
        };

        fetchPeople();
    }, []);  // 컴포넌트 마운트 시 한 번만 실행

    useLayoutEffect(() => {
        const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length
        setChecked(selectedPeople.length === people.length)
        setIndeterminate(isIndeterminate)
        checkbox.current.indeterminate = isIndeterminate
    }, [selectedPeople])

    function toggleAll() {
        setSelectedPeople(checked || indeterminate ? [] : people)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }
    if(people === null) {
        return <OnDark/>;
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-6">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">유저 리스트</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        유저 추가, 삭제, 편집이 가능합니다.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="relative">
                            {selectedPeople.length > 0 && (
                                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded bg-red-600 px-2 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover"
                                        onClick={selectedEmails}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                            <table className="min-w-full table-fixed divide-y divide-gray-300">
                                <thead>
                                <tr>
                                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                                        <input
                                            type="checkbox"
                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            ref={checkbox}
                                            checked={checked}
                                            onChange={toggleAll}
                                        />
                                    </th>
                                    <th scope="col"
                                        className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Job
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Email
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Username
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Phone
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((user) => (
                                    <tr key={user.id} className={selectedPeople.includes(user) ? 'bg-gray-50' : undefined}>
                                        <td className="relative px-7 sm:w-12 sm:px-6">
                                            {selectedPeople.includes(user) && (
                                                <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                                            )}
                                            <input
                                                type="checkbox"
                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                value={user.email}
                                                checked={selectedPeople.includes(user)}
                                                onChange={(e) =>
                                                    setSelectedPeople(
                                                        e.target.checked
                                                            ? [...selectedPeople, user]
                                                            : selectedPeople.filter((p) => p !== user)
                                                    )
                                                }
                                            />
                                        </td>
                                        <td
                                            className={classNames(
                                                'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                                                selectedPeople.includes(user) ? 'text-indigo-600' : 'text-gray-900'
                                            )}
                                        >
                                            {user.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.job}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.username}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.phone}</td>
                                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only">, {user.name}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
