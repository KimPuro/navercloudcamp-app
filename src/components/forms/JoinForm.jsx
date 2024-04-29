import {PhotoIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import {router} from "next/client";
import {loginPost, joinPost} from "@/services/fetchPost";
import LoginSuccess from "@/components/dialogs/LoginSuccess";
import CenteredWithSingleAction2 from "@/components/dialogs/LoginFail";
import React, {useState} from "react";
import JoinSuccess from "@/components/dialogs/JoinSuccess";
import JoinFail from "@/components/dialogs/JoinFail";

export default function JoinForm() {
    const [joinStatus, setJoinStatus] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();  // 폼 제출 기본 동작 방지

        // FormData 객체를 사용하여 폼 데이터 수집
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data);  // 수집한 데이터 출력 (개발자 도구 콘솔에서 확인 가능
        const res = await joinPost(data);
        if (res.message === "SUCCESS") {
            setJoinStatus('success');
        } else {
            setJoinStatus('failure');
        }
    };
    if (joinStatus === 'success') {
        return <JoinSuccess/>;
    } else if (joinStatus === 'failure') {
        return <JoinFail/>;
    }
    ;
    const handleCancel = () => {
        router.back();
    }
    return (
        <div className="flex justify-center items-center pt-10 pb-10">
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">회원 가입</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            회원 가입을 위한 정보를 입력해주세요.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <div
                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="아이디를 입력해주세요"
                                            required={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    비밀 번호
                                </label>
                                <div className="mt-2">
                                    <div
                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="password"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="비밀번호를 입력해 주세요"
                                            required={true}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    About
                                </label>
                                <div className="mt-2">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about
                                    yourself.</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    프로필
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true"/>
                                    <button
                                        type="button"
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="cover-photo"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
                                </label>
                                <div
                                    className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file"
                                                       className="sr-only"/>
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can
                            receive
                            mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    성별
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="gender"
                                        name="gender"
                                        autoComplete="gender"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        required={true}
                                    >
                                        <option>남성</option>
                                        <option>여성</option>
                                        <option>아파치 헬리콥터</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    도로명 주소
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    도
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    시
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    라솔파미레도
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">체크 박스와 라디오 버튼</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            체크 박스와 라디오 버튼을 넣고 싶었습니다.
                        </p>

                        <div className="mt-10 space-y-10">
                            <fieldset>
                                <legend className="text-sm font-semibold leading-6 text-gray-900">당신은 누구신가요</legend>
                                <div className="mt-6 space-y-6">
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="comments"
                                                name="comments"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                                전현석
                                            </label>
                                            <p className="text-gray-500">나는 전현석이다.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="candidates"
                                                name="candidates"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="candidates" className="font-medium text-gray-900">
                                                임홍균
                                            </label>
                                            <p className="text-gray-500">나는 임홍균이다.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="offers"
                                                name="offers"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="offers" className="font-medium text-gray-900">
                                                둘 다
                                            </label>
                                            <p className="text-gray-500">나는 전현석이면서 동시에 임홍균이다.</p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend className="text-sm font-semibold leading-6 text-gray-900">전홍
                                </legend>
                                <p className="mt-1 text-sm leading-6 text-gray-600">전홍 라디오버튼</p>
                                <div className="mt-6 space-y-6">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="last1"
                                            name="last1"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="last1"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            전현석
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="hong1"
                                            name="hong1"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="hong1"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            임홍균
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="lasthong1"
                                            name="lasthong1"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="lasthong1"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            둘 다
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" onClick={handleCancel}
                            className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
