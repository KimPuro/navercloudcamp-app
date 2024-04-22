const postTest = async () => {
    const res = await fetch("http://localhost:8080/api/posttest", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "qwerty",
            password: "1234"
        })
    });
    return res.json();
}
export const PostTest = async () => {
    const user = await postTest();
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