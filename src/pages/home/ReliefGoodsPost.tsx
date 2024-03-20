import { Button } from "antd";
import { Link } from "react-router-dom";
import { useGetAllPostsQuery } from "../../redux/features/reliefPosts/reliefPostsApi";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ReliefGoodsPost = () => {
    const { data } = useGetAllPostsQuery(undefined);
    const componentRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
    target: componentRef,
    offset: ['0 1','1.2 1']
  });
//   const scaleValues = useTransform(scrollYProgress, [0,1],[0.9,1])
//   const opacityValues = useTransform(scrollYProgress, [0,1],[0.1,1])
  const xValue = useTransform(scrollYProgress,[0,0.25],[-700,0.5])
   
    return (
        <div className="my-5">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4">Our Posts</h1>
            <p className="text-center mb-8 md:mb-14">
                Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
                ornare viverra. Ultrices <br />faucibus neque velit risus ac id
                lorem.
            </p>
            <motion.div 
              style={{
                x:xValue
            }} 
            ref = {componentRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-xl px-4">
                {data &&
                    data.slice(0, 6).map((post: {_id:string,Image:string, Title:string, Category: string, Amount: string}) => (
                        <div key={post._id} className="rounded-lg overflow-hidden shadow-md bg-white">
                            <img src={post.Image} alt={post.Title} className="w-full h-48 md:h-auto object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl md:text-2xl font-bold mb-2">{post.Title}</h2>
                                <p className="text-gray-600 mb-4">{post.Category}</p>
                                <p className="text-gray-600 mb-4">Amount: {post.Amount}</p>
                                <div className="text-center">
                                <Button className="w-1/2 bg-blue-500 text-white hover:bg-blue-600">
                                    <Link to={`/relief-goods/${post._id}`}>View Detail</Link>
                                </Button>
                                </div>
                            </div>
                        </div>
                    ))}
            </motion.div>
            <div className="text-center mt-8">
                <Button className="bg-blue-600">
                    <Link to="/posts">View All</Link>
                </Button>
            </div>
        </div>
    );
};

export default ReliefGoodsPost;
