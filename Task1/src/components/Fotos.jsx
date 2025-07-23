import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle, faCar, faMotorcycle, faBus } from "@fortawesome/free-solid-svg-icons";

function Fotos() {
    const list = ["BiCycle", "Car", "MotorCycle", "Bus"];
    const [item, setItem] = useState(list[0]);

    const iconMap = {
        BiCycle: faBicycle,
        Car: faCar,
        MotorCycle: faMotorcycle,
        Bus: faBus
    };

    return (
        <>
            <div className=" flex flex-col items-center justify-center">
                <select
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    className="border p-2 rounded"
                >
                    {list.map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>

                <div className="text-6xl mt-4">
                    <FontAwesomeIcon icon={iconMap[item]} />
                </div>
            </div>
        </>
    );
}

export default Fotos;
