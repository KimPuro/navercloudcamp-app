const getTest = async () =>{
    const res = await fetch(`http://localhost:8080/api/users/list`);
    return res.json();

}
export const GetTest = async ()=>{
    const user = await getTest();
    console.log(user);

    return (
        <>
            {user.map(params => (
                <>
                    {params.name}
                </>
            ))}
        </>
    );
}