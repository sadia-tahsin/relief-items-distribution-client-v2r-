import img from '../../assets/images/medium-shot-smiley-people-nature.jpg';

const AboutUs = () => {
    return (
        <div className="my-8 dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="border border-gray-300 p-4 bg-white dark:bg-transparent dark:text-white rounded-lg">
                    <p className="text-2xl text-orange-500 font-semibold">About Us</p>
                    <h1 className="text-5xl font-bold text-gray-800 dark:text-white mt-2 mb-8">To Spread<br></br> Hope Everywhere <br></br>is Our Dream</h1>
                    <p className="text-gray-600 dark:text-white leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium error accusamus corporis culpa soluta, eveniet eos, quam nostrum nemo doloribus at commodi hic esse veniam sint velit ab quibusdam exercitationem ducimus, quasi magnam. In reprehenderit mollitia eos beatae explicabo doloribus, accusamus, quam nostrum nemo doloribus at commodi hic esse veniam sint velit ab quibusdam exercitationem ducimus, quasi magnam. fugit tempore asperiores velit ab ipsum aliquam natus!</p>
                </div>
                <div className="border border-gray-300 p-4 bg-white rounded-lg dark:bg-transparent">
                    <div className="flex justify-center mb-4">
                        <img src={img} alt="Placeholder" className="h-64 w-full rounded-lg" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 dark:bg-transparent">
                        <div className="border border-gray-300 p-4 bg-white dark:bg-transparent rounded-lg justify-center">
                            <h2 className="text-2xl font-semibold">12</h2>
                            <p className='text-gray-800 dark:text-white dark:bg-transparent'>Years of experience</p>
                        </div>
                        <div className="border border-gray-300 p-4 bg-white dark:bg-transparent rounded-lg justify-center">
                            <h2 className="text-2xl font-semibold">20</h2>
                            <p className='text-gray-800 dark:text-white dark:bg-transparent'>Branches</p>
                        </div>
                        <div className="border border-gray-300 p-4 bg-white dark:bg-transparent rounded-lg justify-center">
                            <h2 className="text-2xl font-semibold">2500</h2>
                            <p className='text-gray-800 dark:text-white dark:bg-transparent'>Partners</p>
                        </div>
                        <div className="border border-gray-300 p-4 bg-white dark:bg-transparent rounded-lg justify-center">
                            <h2 className="text-2xl font-semibold">20000+</h2>
                            <p className='text-gray-800 dark:text-white dark:bg-transparent'>Volunteers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
