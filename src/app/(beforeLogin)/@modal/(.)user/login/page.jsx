"use client";
import LoginModal from "@/components/signInForms/LoginModal";
import {useEffect} from "react";

export default function CenteredWithSingleAction() {
    useEffect(() => {
        // 스크롤을 막기 위해 body에 overflow hidden 스타일을 추가
        document.body.style.overflow = 'hidden';

        // 컴포넌트가 언마운트될 때 원래 상태로 복원
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <LoginModal/>
    )
}
