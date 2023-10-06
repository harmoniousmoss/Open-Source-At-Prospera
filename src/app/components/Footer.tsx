import Link from "next/link";

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
              Made with 💗 with{" "}
              <Link href="https://prosperadev.net">
                <span className="text-cyan-500 hover:text-amber-400">
                  Open Source
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
