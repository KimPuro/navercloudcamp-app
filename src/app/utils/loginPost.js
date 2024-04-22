export const loginPost = async (username,password) => {
    const res = await fetch("http://10.10.10.2:8080/api/users/login", {
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