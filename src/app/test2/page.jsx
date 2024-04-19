'use client'
import React from "react";
import axios from "axios";
import Example from "@/components/tables/WithCheckboxes";
import {axiosGet} from "@/libs/axiosAPI";

export default function Test2() {
    const go = async () => { // go 함수를 async 함수로 선언
        let arr = await axiosGet("users/list"); // getUser의 결과를 await로 기다림
        console.log(arr); // 비동기 처리가 완료된 데이터를 콘솔에 출력
    }

    return (
        <>
            <div onClick={go}>aaaaaaaaaaaaaaaaaaaaa</div>
        </>
    );
}
