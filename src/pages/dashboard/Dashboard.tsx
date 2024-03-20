import { Chart } from 'react-google-charts';
import { useGetAllPostsQuery } from "../../redux/features/reliefPosts/reliefPostsApi";
import Sidebar from '../../components/layout/Sidebar';

const Dashboard = () => {
    const { data } = useGetAllPostsQuery(undefined);

    // Initialize an object to store the total amounts for each category
    const categoryTotals: { [key: string]: number } = {};
    const pieChartDataArray = [];
    pieChartDataArray.push(["Category", "Amount"]); // Header row

    // Iterate through the array of posts to calculate the total amounts for each category
    if (data) {
        data.forEach((post: { _id: string, Image: string, Title: string, Category: string, Amount: string, Description: string }) => {
            const { Category, Amount } = post;
            if (categoryTotals[Category]) {
                categoryTotals[Category] += parseInt(Amount);
            } else {
                categoryTotals[Category] = parseInt(Amount);
            }
        });
    }
    Object.entries(categoryTotals).forEach(([category, amount]) => {
        pieChartDataArray.push([category, amount]);
    });

    const options = {
        pieSliceText: " ", // Display value in the pie slice
        slices: {
            0: { color: '#3366CC' }, // First slice color
            1: { color: '#DC3912' }, // Second slice color
            2: { color: '#FF9900' }, // Third slice color
        },
        legend: {
            position: 'right', // Position the legend on the right side
            alignment: 'center', // Center align the legend
            maxLines: 5,
        },
        is3D: true,
    };

    return (
        <div className="grid grid-cols-12">
            <Sidebar />
            <div className="mt-5 col-span-10">
                <div className="mx-auto max-w-screen-lg">
                    <h1 className="text-4xl font-bold text-center mb-8">Relief Goods Distribution Dashboard</h1>
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-semibold md:mb-2 ">Total Relief Goods Distribution by Category</h2>
                        {/* <p className="text-lg mb-8">This chart illustrates the distribution of relief goods across different categories.</p> */}
                        <div className="text-center">
                            <Chart
                                chartType="PieChart"
                                data={pieChartDataArray}
                                options={options}
                                width={"100%"}
                                height={"500px"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
