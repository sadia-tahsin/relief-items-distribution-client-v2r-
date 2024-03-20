import img from "../../assets/images/bell.png"
import img2 from "../../assets/images/phone.png"
import icon from "../../assets/images/Vector1.png"
const Footer = () => {
    return (
       
              <div className="bg-zinc-900 mx-0">
                <div className="block md:flex md:flex-grow">
                <div className="container mx-auto my-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex items-center justify-center bg-gray-800 text-white rounded-lg p-6">
      <img src={img} alt="" className="rounded-full w-12 h-12 flex-shrink-0" />
      <div className="ml-4">
        <h2 className="text-lg font-semibold">10 am - 10 pm</h2>
        <h2 className="text-lg">We are open every day</h2>
      </div>
    </div>
    <div className="flex items-center justify-center bg-gray-800 text-white rounded-lg p-6">
      <img src={img2} alt="" className="rounded-full w-12 h-12 flex-shrink-0" />
      <div className="ml-4">
        <h2 className="text-lg font-semibold">011111111100</h2>
        <h2 className="text-lg">Call for booking</h2>
      </div>
    </div>
  </div>
</div>

                </div>
                <hr className="md:mx-10"></hr>
                <div className="md:flex md:justify-between md:mx-10">
                  <p className="md:ml-10 p-4 text-white">@ 2024. All rights reserved.</p>
                  <div className="flex space-x-4 text-white font-light p-4">
                    <p><a href="#">Terms</a></p>
                    <p><a href="#">Privacy</a></p>
                    <p><a href="#">Contact</a></p>
                    <div className="flex">
                      <img src={icon} alt="" className="w-4 h-4 m-1" />
                      <p><a href="#">EN</a></p>
                    </div>
                    <p><a href="#">EUR</a></p>
                  </div>
                </div>
              </div>
            );
            
      
};

export default Footer;