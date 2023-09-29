import Link from "next/link";

const navigation = {
  about: [
    { name: "Outcomes", href: "#" },
    { name: "News", href: "#" },
  ],
  learn: [{ name: "Prospera website", href: "#" }],
  extra: [
    { name: "Vacancy", href: "#" },
    { name: "Tender", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 pb-8 mx-auto max-w-7xl">
        <div className="pt-8 mt-10 border-t border-gray-900/10 sm:mt-14 lg:mt-18">
          <div className="flex items-center justify-between">
            <p className="text-sm leading-5 text-gray-700">
              © Copyright 2023 Prospera. All Rights Reserved
            </p>
            <p className="text-sm leading-5 text-gray-700">
              <Link href="https://open-source-at-prospera.vercel.app/">
                <span className="text-cyan-500 hover:text-amber-400">
                  Open source at Prospera
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
