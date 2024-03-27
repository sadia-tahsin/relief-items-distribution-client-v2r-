import { useGetAllVolunteerQuery } from "../redux/features/reliefPosts/getVolunteer";
import img2 from "../assets/images/phone.png"
import img from "../assets/images/volunteers.jpg"


const Supplies = () => {
  const { data } = useGetAllVolunteerQuery(undefined);
  
    return (
        <div className="dark:text-white dark:bg-transparent bg-white grid grid-cols-1 md:grid-cols-5 gap-4">
  {/* Image */}
  <div className="md:col-span-2">
    <img src={img} alt="" className=" h-[250px] lg:h-screen w-full object-cover" />
  </div>
  {/* Content */}
  <div className="md:col-span-3">
    <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-8">Our Volunteers</h1>
    <div className="m-10 place-content-center">
      {/* Your table */}
      <table className="border-collapse w-full border border-slate-500">
        <thead>
          <tr className="text-left">
            <th className="border border-slate-500 px-4 py-2">Name</th>
            <th className="border border-slate-500 px-4 py-2">Location</th>
            <th className="border border-slate-500 px-4 py-2">Contact</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((post: { _id: string, Name: string, ContactNumber: string, Location: string }) => (
              <tr key={post._id} className="text-left">
                <td className="border border-slate-500 px-4 py-2">{post.Name}</td>
                <td className="border border-slate-500 px-4 py-2">{post.Location}</td>
                <td className="border border-slate-500 px-4 py-2 flex items-center">
                  <img src={img2} alt="" className="w-6 h-6 mr-2" />
                  {post.ContactNumber}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

    );
};
export default Supplies;
