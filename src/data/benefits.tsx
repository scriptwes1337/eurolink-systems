import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
  {
    title: "Customized aluminiuum profile solutions",
    description: "Some of our wide range of products include:",
    bullets: [
      {
        title: "Glass Products",
        description:
          "Glass canopies, shop-front glass, skylights, safety railing.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Aluminium products",
        description: "Metal canopies, safety railing frame, aluminium facades",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Italian firm designed Gastaldello's System ('GS')",
        description:
          "The GS slim sliding door profile has a vertical frame thickness of only 30mm. It has undergone water penetration resistance testing and wind resistance testing to great extents, making it ideal for high-rise buildings.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/sliding-door.png",
  },
  {
    title: "Testing and Regulatory Standards",
    description:
      "Our products have been rigorously tested for durability and functionality.",
    bullets: [
      {
        title: "Air Permeability and Watertightness",
        description:
          "Achieved the standards - EN1026, EN12207, EN1027, EN12208",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Wind Resistance",
        description: "Achieved the standards - EN12211, EN12210",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Soundproof & Thermal Insulation",
        description: "Achieved the standards - EN20140-3, EN ISO140-3, EN10077-2, EN12412-2",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/european-norm.png",
  },
  {
    title: "Nothing beats experience",
    description:
      "When you need your project done right, we are the people to call.",
    bullets: [
      {
        title: "Over 20 years of experience",
        description:
          "Our wisdom ensures no hiccups during the process",
        icon: <FiLock size={26} />,
      },
      {
        title: "Over 500 projects completed",
        description:
          "By our core team throughout their careers",
        icon: <FiUser size={26} />,
      },
      {
        title: "Hundreds of happy customers",
        description:
          "With many repeat customers who ask us to enhance future projects",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/aluminium-fabrication.png",
  },
];