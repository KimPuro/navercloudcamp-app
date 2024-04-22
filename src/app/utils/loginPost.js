export const loginPost = async (username,password) => {
    const res = await fetch("http://localhost:8080/api/users/logintest", {
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
}