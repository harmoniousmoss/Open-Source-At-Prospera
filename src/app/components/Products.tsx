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
    name: "Laravel",
    role: "The PHP framework for web artisans",
    imageUrl: "https://www.cdnlogo.com/logos/l/23/laravel.svg",
    link: "https://laravel.com/",
  },
  {
    name: "PostgreSQL",
    role: "Object-relational database system",
    imageUrl: "https://www.cdnlogo.com/logos/p/93/postgresql.svg",
    link: "https://www.postgresql.org/",
  },
  {
    name: "SvelteKit",
    role: "Web development, streamlined",
    imageUrl: "https://www.cdnlogo.com/logos/s/6/svelte.svg",
    link: "https://kit.svelte.dev/",
  },
  {
    name: "Tauri",
    role: "Multi-platform deplyment",
    imageUrl: "/tauri.png",
    link: "https://kit.svelte.dev/",
  },
  {
    name: "Express",
    role: "minimal and flexible Node.js framework",
    imageUrl: "/expressjs_logo.png",
    link: "https://kit.svelte.dev/",
  },
  {
    name: "MongoDB",
    role: "Document database",
    imageUrl: "https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg",
    link: "https://www.mongodb.com/",
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
