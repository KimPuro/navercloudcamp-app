export const loginPost = async (username, password) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        return res.json();
    } catch (error) {
        return error;
    }
}
export const joinPost = async (data) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/join`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return res.json();
    } catch (error) {
        return error;
    }
}