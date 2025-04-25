import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: ">500",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Projects completed spanning aluminium and glass products"
    },
    {
        title: ">100",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Happy customers that often engage us repeatedly for different projects."
    },
    {
        title: ">30+",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Unique products and services that can be customized to fit your needs."
    }
];