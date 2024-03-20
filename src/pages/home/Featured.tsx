import { Link } from 'react-router-dom';
import img1 from "../../assets/images/25593194_hjax_rihn_211129.jpg"
import img2 from "../../assets/images/9191758_26363.jpg"
import img3 from "../../assets/images/group-people-volunteering-foodbank.jpg"


const FeaturedProjectsSection = () => {
    // Dummy data for illustration purposes
    const featuredProjects = [
        {
            id: 1,
            title: "Emergency Shelter Construction",
            description: "Help us build emergency shelters for families affected by natural disasters.",
            imageUrl: img1,
            link: "/projects/emergency-shelter-construction"
        },
        {
            id: 2,
            title: "Medical Supplies Distribution",
            description: "Support our efforts to distribute essential medical supplies to hospitals and clinics in underserved areas.",
            imageUrl: img2,
            link: "/projects/medical-supplies-distribution"
        },
        {
            id: 2,
            title: "Food Supplies Distribution",
            description: "Support our efforts to distribute essential food supplies to hospitals and clinics in underserved areas.",
            imageUrl: img3,
            link: "/projects/medical-supplies-distribution"
        },
      
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Relief Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map(project => (
                        <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <Link to="#" className="text-indigo-600 hover:underline">Learn More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjectsSection;
