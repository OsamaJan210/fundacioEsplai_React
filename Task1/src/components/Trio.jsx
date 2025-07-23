import { useState } from "react";

function Trio() {
    const colors = ["bg-gray-400", "bg-red-500", "bg-blue-500", "bg-green-500"];
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [count, setCount] = useState(0);

    const toggleColor = () => {
        setCount((prev) => {
            const next = (prev + 1) % 4;
            setSelectedColor(colors[next]);
            return next;
        });
    };

    return (
        <>
            <div className=" flex items-center justify-center bg-gray-100">
                <div
                    className={`w-20 h-20 rounded-full cursor-pointer transition duration-300 shadow-md ${selectedColor}`}
                    onClick={toggleColor}
                ></div>
            </div>
        </>
    );
}

export default Trio;