const product = [
  {
    name: "Macro Monitoring",
    tool: "Next.js, Tailwind CSS, Laravel, PostgreSQL",
  },
  {
    name: "Childcare Microsite",
    tool: "SvelteKit, Tailwind CSS, Laravel, PostgreSQL",
  },
  {
    name: "Newsletter One-page",
    tool: "SvelteKit, Tailwind CSS",
  },
  {
    name: "Talent register",
    tool: "Next.js, Tailwind CSS, MongoDB, Node.js",
  },
  {
    name: "Operation manual",
    tool: "SvelteKit, Tailwind CSS, Laravel, PostgreSQL",
  },
  {
    name: "And many more...",
    tool: "We can't wait to share",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">
            Powered by Open Source
          </h2>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {product.map((product) => (
            <li key={product.name}>
              <div className="flex items-center gap-x-6 cursor-pointer hover:text-cyan-400">
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-cyan-500">
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {product.tool}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
