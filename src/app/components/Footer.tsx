import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="lg:px-36 mt-10 px-6">
        <div className="border-t border-gray-900/10">
          <div className="flex items-center justify-between mt-3 flex-col lg:flex-row mb-2 lg:mb-0">
            <p className="text-sm leading-5 text-gray-700">
              © Copyright 2023 Prospera. All Rights Reserved
            </p>
            <p className="text-sm leading-5 text-gray-700 mt-2 lg:mt-0">
              Made with 💗 with{" "}
              <Link href="https://prosperadev.net">
                <span className="text-blueshade20 underline font-medium">
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
