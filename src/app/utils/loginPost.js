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
export const LoginPostComponent = async (username, password) => {
    const user = await loginPost(username, password);
    let mes="";
    if (user.status===404){
        mes = "성공"
    }
    console.log(user);
    return (<>
            {user.status}
            {mes}
        </>
    );
}