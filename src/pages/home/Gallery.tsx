import img from '../../assets/images/little-children-trick-treating-halloween.jpg'
import img2 from '../../assets/images/group-people-volunteering-foodbank.jpg'
import img3 from '../../assets/images/close-up-volunteers-with-box.jpg'
import img4 from '../../assets/images/unrecognizable-volunteers-packing-donated-food-cardboard-boxes.jpg'
import img5 from '../../assets/images/front-view-kids-with-plastic-bag.jpg'
const Gallery = () => {
  return (
    <div className="mt-24 text-center">
      <h1 className="text-6xl font-extrabold text-center mb-4">Gallery</h1>
      <p className="mb-14">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices <br></br>faucibus neque velit risus ac id
        lorem.
      </p>
    
      <section className="bg-white">
	<div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
		<div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-full">
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
				<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src={img}  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src={img2}  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					</div>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src={img3} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						</div>
					<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src={img4} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					</div>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src={img5} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
				</div>	
			</div>
		</div>
	</div>
</section>
     
    </div>
  );
};

export default Gallery;
