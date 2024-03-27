import { useGetAllUserQuery } from '../redux/features/reliefPosts/getUsersApi';
import img from '../assets/images/reward.png';

const LeaderBoard = () => {
    const { data } = useGetAllUserQuery(undefined);

    // Sort the users by donation amount in descending order
    const sortedUsers = data ? [...data].sort((a, b) => parseInt(b.donationAmount) - parseInt(a.donationAmount)) : [];

    // Get the top three donors
    const topDonor = sortedUsers.slice(0, 1);
    const second2topDonors = sortedUsers.slice(1, 3);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Donation Leaderboard</h1>

            <div className="text-center mb-8">
                <div className="flex justify-center">
                    {topDonor.map((user) => (
                     
                     <div key={user._id} className="rounded-lg shadow-md p-6 w-44">
                     <div className="mb-4">
                        <img src={img} alt="Top Donor Icon" className="w-12 h-12" />
                    </div>
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <p className="text-yellow-500 mt-2">$ {user.donationAmount}</p>
                </div>
                    ))}
                </div>
                <div className="flex justify-center gap-8 mt-8">
                    {second2topDonors.map((user) => (
                        
                        <div key={user._id} className="rounded-lg shadow-md p-6 w-52">
                             <div className="mb-4">
                                <img src={img} alt="Top Donor Icon" className="w-12 h-12" />
                            </div>
                            <h2 className="text-lg font-semibold">{user.name}</h2>
                            <p className="text-yellow-500 mt-2">$ {user.donationAmount}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="overflow-x-auto mx-10">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Donated</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sortedUsers.map((user) => (
                            <tr key={user._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">$ {user.donationAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaderBoard;
