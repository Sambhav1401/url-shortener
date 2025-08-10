

import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">About This Project</h1>
      <p className="mb-4 text-lg leading-relaxed">
        This project is a URL shortener web application built with Next.js and Tailwind CSS. It allows users to easily shorten long URLs into compact links that are easier to share.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        The app also demonstrates clean UI design, React components, and integration with backend APIs for link management.
      </p>
      <p className="mb-8 text-lg leading-relaxed">
        Feel free to explore the code on GitHub and try the live version using the buttons below.
      </p>
      <a
  href="https://github.com/Sambhav1401/url-shortener.git"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-purple-500  p-2 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition inline-flex items-center gap-1"
>
  GitHub
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 14V12C15 10.5858 15 9.87868 14.5607 9.43934C14.1213 9 13.4142 9 12 9H10M14 10L9 15" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</a>
    </div>
  );
}
