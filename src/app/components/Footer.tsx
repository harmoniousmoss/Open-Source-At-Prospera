import Image from "next/image";
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
      <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="w-auto h-14"
              src="https://prospera.or.id/wp-content/uploads/2023/06/Logo-Prospera.png"
              alt="Logo Prospera"
              width={200}
              height={100}
              priority={true}
            />
            <p className="text-sm leading-6 text-gray-700">
              Prospera is supported by the Australian Government and implemented
              by DT Global.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {/* First widget */}
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  About Prospera
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                {/* Seconf widget */}
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.learn.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {/* Third widget */}
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Extra links
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.extra.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-10 border-t border-gray-900/10 sm:mt-14 lg:mt-18">
          <div className="flex items-center justify-between">
            <p className="text-sm leading-5 text-gray-700">
              © Copyright 2023 Prospera. All Rights Reserved
            </p>
            <p className="text-sm leading-5 text-gray-700">
              <Link href="https://nextjs.org/">
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
