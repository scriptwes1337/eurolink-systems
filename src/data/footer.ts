import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "The aluminium experts with over 20 years of experience",
    quickLinks: [
        {
            text: "Products",
            url: "/products"
        },
        {
            text: "Projects",
            url: "/projects"
        },
        {
            text: "About",
            url: "/about"
        }
    ],
    email: 'alston@eurolinesystems.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        // githwub: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}