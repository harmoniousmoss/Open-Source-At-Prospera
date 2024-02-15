import Image from "next/image";
import Link from "next/link";

const product = [
  {
    name: "Next.js",
    role: "The React Framework for the Web",
    imageUrl: "https://www.cdnlogo.com/logos/n/80/next-js.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    role: "A utility-first CSS framework",
    imageUrl: "https://www.cdnlogo.com/logos/t/58/tailwind-css.svg",
    link: "https://tailwindcss.com/",
  },

  {
    name: "PostgreSQL",
    role: "Object-relational database system",
    imageUrl: "https://www.cdnlogo.com/logos/p/93/postgresql.svg",
    link: "https://www.postgresql.org/",
  },
  {
    name: "PNPM",
    role: "Fast, disk space efficient package manager",
    imageUrl: "/pnpm.svg",
    link: "https://pnpm.io/",
  },
  {
    name: "Express",
    role: "minimal and flexible Node.js framework",
    imageUrl: "/expressjs_logo.png",
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    role: "Document database",
    imageUrl: "https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "ApexCharts",
    role: "A modern JavaScript charting library",
    imageUrl:
      "https://camo.githubusercontent.com/5ee5535a3f7e5ba870272261173bf12f9e08a14b0e926291b0a31b751de595e3/68747470733a2f2f617065786368617274732e636f6d2f6d656469612f617065786368617274732d6c6f676f2e706e67",
    link: "https://apexcharts.com/",
  },
  {
    name: "TypeScript",
    role: "JavaScript with syntax for types",
    imageUrl: "https://www.cdnlogo.com/logos/t/96/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
];

export default function Products() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">
            Projects we use
          </h2>
          <p className="mt-3 text-lg leading-8 text-gray-700">
            We proudly uses open source technologies like these to run our
            digital products.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {product.map((product) => (
            <li key={product.name}>
              <Link href={product.link}>
                <div className="flex items-center gap-x-6 cursor-pointer hover:text-cyan-400">
                  <Image
                    className="h-16 w-16"
                    src={product.imageUrl}
                    alt={product.name} // Added a descriptive alt tag
                    width={300}
                    height={300}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-cyan-500">
                      {product.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {product.role}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
