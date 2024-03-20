import { Chart } from 'react-google-charts';
import { useGetAllPostsQuery } from "../../redux/features/reliefPosts/reliefPostsApi";
const PieChart = () => {
    const { data } = useGetAllPostsQuery(undefined)
    console.log(data);

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
        // title: "Supplies",
        is3D: true,
    };

    return (
    <div className="mt-5 mx-auto col-span-10">
          <div className="mt-5">

          
          <div className="text-center">

          <Chart
                 chartType="PieChart"
                 data={pieChartDataArray}
                 options={options}
                 width={"100%"}
                 height={"400px"}
             />
       </div>
     </div>
    </div>   
    );
};

export default PieChart;