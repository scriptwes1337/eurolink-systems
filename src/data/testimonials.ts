import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Martin Lim',
        role: 'Director of Engineering, Mandarin Oriental',
        message: ` Although some of our projects have been complex, we have always trusted that you and your team could get the job done – and we have never been disappointed! `,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Jane Doe',
        role: 'CTO at Startup',
        message: `As a CTO, I'm impressed by ${siteDetails.siteName}'s robust security measures and seamless integrations. It's rare to find an app that balances user-friendliness with such advanced technology.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Emily Johnson',
        role: 'Product Manager',
        message: `${siteDetails.siteName} is revolutionizing personal finance management. Its intuitive design and powerful features make it an indispensable tool for anyone serious about financial growth.`,
        avatar: '/images/testimonial-3.webp',
    },
];