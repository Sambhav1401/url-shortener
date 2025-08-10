import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (

    <div>

    

    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-2xl font-bold">Welcome to Bitlinks</h1>


   <h2 className="text-gray-600 font-bold">NO LOGIN REQUIRED</h2>
  <p className="text-gray-600">Your one-stop solution for URL shortening</p>
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

<div className="relative">
  <Image
    src="/url-shortener.avif"
    alt="Hero Image"
    layout="fill"
    objectFit="cover"
    className="rounded-lg"
  />
</div>

</section>

  </main>
    <Link href="/shorten" className="flex mt-14 items-center justify-center">
      <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-3xl  px-5 py-2.5  text-center me-2 mb-2">Shorten Your URL</button>
    </Link>
</div>
  );
}
