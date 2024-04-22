const getPost = async (postId) =>{
    const res = await fetch(`http://localhost:8080/api/users/list`);
    return res.json();
}

const PostDetailPage = async ({
    params:{ postId }
})=>{
    const post = await getPost(postId);

    return (
        <div>
            {post.name}
        </div>
    )
}