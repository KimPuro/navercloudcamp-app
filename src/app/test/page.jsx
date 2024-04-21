"use client"
import React, { useState, useEffect } from "react";

export default function SimpleCard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const resp = await fetch("http://localhost:8080/api/users/list");
                const data = await resp.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }

        fetchUsers();
    }, []); // useEffect의 두 번째 인자로 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정

    return (
        <>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </>
    );
}
