import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-purple-200 py-4 fixed bottom-0 left-0 w-full ">
      <div className="max-w-3xl mx-auto text-center ">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} BitLinks. All rights reserved.
          <a
            href="https://www.termsfeed.com/live/537f78ff-3c49-41c4-8b30-730e9935b13d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hover:underline flex items-center justify-center gap-1">
              Terms & Conditions
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" color="#000000" fill="none">
                <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 14V12C15 10.5858 15 9.87868 14.5607 9.43934C14.1213 9 13.4142 9 12 9H10M14 10L9 15" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
</a>

        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
