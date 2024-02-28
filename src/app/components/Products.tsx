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
    name: "MongoDB",
    role: "Document database",
    imageUrl: "https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Fastify",
    role: "Fast and low overhead web framework for Node.js",
    imageUrl: "/fastify-1000px-square-01.png",
    link: "https://www.fastify.io/",
  },
  {
    name: "Fiber",
    role: "Go web framework built on top of Fasthttp",
    imageUrl: "/logo_fiber.svg",
    link: "https://gofiber.io/",
  },
  {
    name: "TypeScript",
    role: "JavaScript with syntax for types",
    imageUrl: "https://www.cdnlogo.com/logos/t/96/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Redis",
    role: "In-memory data structure store",
    imageUrl: "https://www.cdnlogo.com/logos/r/3/redis.svg",
    link: "https://redis.io/",
  },
  {
    name: "ApexCharts",
    role: "A modern JavaScript charting library",
    imageUrl: "/apexchart.png",
    link: "https://apexcharts.com/",
  },
  {
    name: "PNPM",
    role: "Fast, disk space efficient package manager",
    imageUrl: "/pnpm.svg",
    link: "https://pnpm.io/",
  },
  {
    name: "Matomo",
    role: "All-in-one web analytics platform",
    imageUrl: "/matomo.png",
    link: "https://matomo.org/",
  },
  {
    name: "Git",
    role: "Version Control System",
    imageUrl: "/git.png",
    link: "https://git-scm.com/",
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="xl:px-36 px-6 lg:px-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blueshade20 mt-16 lg:text-4xl">
            Projects we use
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            We proudly use open source technologies like these to run our
            digital products.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid lg:grid-cols-3 gap-x-4 gap-y-8 grid-cols-1">
            {product.map((product) => (
              <li key={product.name}>
                <Link href={product.link}>
                  <div className="flex items-center cursor-pointer hover:text-greenshade20">
                    <Image
                      className="mr-5 border border-gray-200 rounded-md p-2 flex items-center justify-center w-16 h-16 bg-gray-50 hover:shadow-2xl hover:saturate-200"
                      src={product.imageUrl}
                      alt={product.name} // Added a descriptive alt tag
                      width={64}
                      height={64}
                    />
                    <div>
                      <h3 className="text-base font-semibold text-blueshade20">
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
    </div>
  );
}
