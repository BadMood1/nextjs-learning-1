export default function Loading() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <div className="animate-pulse space-y-6">
                <div className="h-12 bg-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-full"></div>
                <div className="h-6 bg-gray-200 rounded w-5/6"></div>
            </div>
        </div>
    );
}
