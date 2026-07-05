import Link from "next/dist/client/link";

type Post = {
    body: string;
    id: number;
    title: string;
    userId: number;
};

const getPosts = async (): Promise<Post[]> => {
    "use cache";
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
};

export default async function PostsPage() {
    const posts = await getPosts();
    console.log(posts);

    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-center text-4xl font-semibold sm:text-5xl">Posts</h1>

                <ul className="space-y-3">
                    {posts.slice(0, 5).map((post) => (
                        <li key={post.id} className="rounded-lg bg-gray-100 p-4 shadow-md">
                            <Link
                                href={`/posts/${post.id}`}
                                className="text-xl font-semibold hover:underline"
                            >
                                {post.title}
                            </Link>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
