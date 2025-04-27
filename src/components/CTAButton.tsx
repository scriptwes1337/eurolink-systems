
import Link from "next/link";

export default function CTAButton() {
  return (
    <Link
      href="#cta"
      className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors"
    >
      Contact Us
    </Link>
  );
}
