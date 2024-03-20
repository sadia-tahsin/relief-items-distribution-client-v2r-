import { Button } from "antd";
import { useState } from "react";

const Faq = () => {
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [sign1, setSign1] = useState("+");
    const [sign2, setSign2] = useState("+");
    const [sign3, setSign3] = useState("+");

    const handleClick1 = () => {
        setClicked1(!clicked1);
        setSign1(clicked1 ? "+" : "-");
    };

    const handleClick2 = () => {
        setClicked2(!clicked2);
        setSign2(clicked2 ? "+" : "-");
    };

    const handleClick3 = () => {
        setClicked3(!clicked3);
        setSign3(clicked3 ? "+" : "-");
    };

    return (
        <div className="my-6 mx-4 bg-white rounded-lg shadow-md p-6">
            <div className="text-center text-3xl font-bold mb-8">
                <h2>FAQ</h2>
            </div>
            <div className="space-y-6">
                <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold w-11/12">Q. How to contribute?</h3>
                        <Button onClick={handleClick1} type="text" className="text-xl flex items-center justify-center">
                            {sign1}
                        </Button>
                    </div>
                    {clicked1 && (
                        <div className="text-gray-700 mt-2 bg-gray-50 rounded-lg p-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, deleniti.
                        </div>
                    )}
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold w-11/12">Q. How can I get involved in volunteering?</h3>
                        <Button onClick={handleClick2} type="text" className="text-xl flex items-center justify-center">
                            {sign2}
                        </Button>
                    </div>
                    {clicked2 && (
                        <div className="text-gray-700 mt-2 bg-gray-50 rounded-lg p-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, deleniti.
                        </div>
                    )}
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold w-11/12">Q. How can I donate directly to a specific cause?</h3>
                        <Button onClick={handleClick3} type="text" className="text-xl flex items-center justify-center">
                            {sign3}
                        </Button>
                    </div>
                    {clicked3 && (
                        <div className="text-gray-700 mt-2 bg-gray-50 rounded-lg p-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, deleniti.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Faq;
