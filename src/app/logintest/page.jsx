"use client";
import React, { useState } from "react";

export default function LoginTest() {
    const [job, setJob] = useState("");

    // 입력 필드가 변경될 때 호출될 함수
    const handleJobChange = (event) => {
        setJob(event.target.value);
    };

    // 버튼 클릭 시 호출될 함수
    const handleSubmit = () => {
        console.log("Job:", job);
        // 이 부분에서 필요한 로직을 추가하면 됩니다 (예: 서버로 데이터 전송)
    };

    return (
        <>
            <input type="text" value={job} onChange={handleJobChange} />
            <button type="button" onClick={handleSubmit}>Sign In</button>
        </>
    );
}
