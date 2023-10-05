import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Macro Monitor",
    description: "Prospera's weekly macroeconomic monitoring",
    madeWith: "Next.js, Apex.js, Tailwind CSS, Laravel, PostgreSQL",
  },
  {
    name: "Childcare Microsite",
    description: "Childcare resources from Prospera & partners",
    madeWith: "Sveltekit, Tailwind CSS, Laravel, PostgreSQL",
  },
  {
    name: "Newsletter One-page",
    description: "Infographic & data visualization",
    madeWith: "Sveltekit & Tailwind CSS",
  },
  {
    name: "Talents register",
    description: "Prospera's talents register submission",
    madeWith: "Next.js, Tailwind CSS, MongoDB, Express.js",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">
              Powered by Open Source
            </h2>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-cyan-500">
                  <CheckIcon
                    className="absolute left-0 top-1 h-5 w-5 text-gray-900"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {feature.madeWith}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
