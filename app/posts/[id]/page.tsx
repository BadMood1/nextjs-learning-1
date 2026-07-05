import { notFound } from "next/navigation";

type PostPageProps = {
    params: Promise<{ id: string }>; // Важно: params теперь Promise в новых версиях Next.js
};

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params; // Разворачиваем Promise

    // Получаем данные
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: { revalidate: 3600 }, // Кэширование (по желанию)
    }).then((res) => {
        if (!res.ok) {
            return notFound();
        }
        return res.json();
    });

    return (
        <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
            <section className="space-y-6">
                <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">{post.title}</h1>

                <div className="prose prose-lg max-w-none">
                    <p>{post.body}</p>
                </div>
            </section>
        </div>
    );
}
