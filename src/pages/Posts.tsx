import { Button } from "antd";
import { useGetAllPostsQuery } from "../redux/features/reliefPosts/reliefPostsApi";
import { Link } from "react-router-dom";

const Posts = () => {
    const { data } = useGetAllPostsQuery(undefined);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-8">Posts</h1>
            <p className="text-center text-lg mb-12">
                Discover the latest posts and updates from our relief efforts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data &&
                    data.map((post: {_id: string, Image: string, Title: string, Category: string, Amount: string, Description: string}) => (
                        <div key={post._id} className="border border-gray-300 rounded-lg shadow-md">
                            <img
                                src={post.Image}
                                alt={post.Title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl md:text-2xl font-bold mb-4">{post.Title}</h2>
                                <p className="text-gray-700 mb-4 truncate">{post.Description}</p>
                                <div className="flex justify-between mb-4">
                                    <div className="text-lg font-semibold">Category: {post.Category}</div>
                                    <div className="text-lg font-semibold">Amount: {post.Amount}</div>
                                </div>
                                <div className="text-center">
                                    <Button type="primary">
                                        <Link to={`/relief-goods/${post._id}`}>View Detail</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Posts;
