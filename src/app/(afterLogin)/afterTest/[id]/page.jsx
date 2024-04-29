export async function getServerSideProps(context) {
    const { params } = context;
    const response = await fetch(`https://api.example.com/posts/${params.id}`);
    const post = await response.json();

    return {
        props: { post }, // 페이지 컴포넌트에 post 객체를 prop으로 전달
    };
}
