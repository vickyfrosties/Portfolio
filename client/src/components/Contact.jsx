import { useEffect, useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [quotation, setQuotation] = useState({});

  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await fetch("/api/quotes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        setQuotation(data.data);
      } catch (error) {
        console.error("An error occurred while get request.", error.message);
      }
    };

    getQuote();
  }, []);

  return (
    <>
      <section className="w-full h-full max-xs:h-auto max-xs:my-8 flex justify-center max-md:justify-normal">
        <section className="w-3/4 min-h-3/4 m-auto bg-slate-700 rounded-l-2xl rounded-r-3xl flex max-md:flex-col ">
          <section className="w-90 bg-slate-100 rounded-r-3xl rounded-l-xl max-md:h-auto max-md:w-full max-md:flex max-sm:h-full max-xs:flex-col">
            <div>
              <img
                src="/assets/png/Portrait.png"
                alt=""
                className="w-full h-60 object-cover object-center"
              />
              <p className="max-sm:hidden sm:block sm:text-center sm:text-xl sm:font-semibold">
                Sounia Mhalla Dit Aounallah
              </p>
            </div>

            <section className="p-3 grid grid-col-3 grid-row-2 gap-x-3 gap-y-7 h-auto max-sm:flex max-sm:flex-col max-xs:flex-row max-xs:flex-wrap max-xs:gap-2 max-xs:w-full">
              <div className="max-xs:w-full">
                <a
                  className="flex flex-col justify-center items-center cursor-pointer bg-slate-200 p-3 rounded-lg h-30 max-sm:h-auto"
                  href="https://github.com/vickyfrosties?tab=repositories"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github-icon lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <p className="text-center text-sm">
                    Check out my GitHub profile.
                  </p>
                </a>
              </div>

              <div className="col-start-2 max-xs:w-full">
                <a
                  href="https://www.linkedin.com/in/mhalla-sounia/"
                  target="_blank"
                  className="flex flex-col justify-center items-center cursor-pointer bg-slate-200 p-3 rounded-lg h-30 max-sm:h-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin-icon lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <p className="text-center text-sm">Find me on LinkedIn.</p>
                </a>
              </div>

              <div className="col-span-2 max-xs:w-full">
                <a
                  href="mailto:sounia.mhalla@hotmail.com"
                  className="cursor-pointer bg-slate-200 flex flex-col justify-center items-center p-3 rounded-lg h-30 max-sm:h-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail-icon lucide-mail"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  <p className="text-center text-sm">
                    I'm always available for new connections.
                  </p>
                </a>
              </div>
            </section>
          </section>

          <section className="w-2/4 h-90 flex flex-col justify-around items-center m-auto max-md:w-full max-md:h-full max-sm:flex-col max-sm:h-full">
            <div className="max-lg:w-60 max-md:w-full max-sm:w-full max-sm:p-3">
              <h3 className="text-2xl font-semibold text-slate-100 text-center  max-lg:text-lg max-lg:w-full">
                Feel free to reach out - I’d be happy to chat about topics, an
                opportunity, or simply to connect !
              </h3>
            </div>

            <div className="w-full h-50 flex justify-between flex flex-col bg-slate-200 p-3 rounded-lg max-lg:w-70 max-sm:w-full max-sm:bg-inherit max-md:bg-inherit max-md:w-full max-xs:h-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-quote-icon lucide-quote max-xs:size-7"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>
              {quotation && quotation.quote ? (
                <div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
                  <h3 className="text-center text-xl font-semibold max-lg:text-base max-sm:text-white max-sm:text-center max-md:text-white max-md:text-center">
                    {quotation.quote}
                    <span className="text-lg font-md italic max-lg:text-base max-sm:text-white">
                      - {quotation.author ? quotation.author : "Unknown"}
                    </span>
                  </h3>
                </div>
              ) : (
                <div className="w-full h-full flex justify-center items-center text-center text-xl font-semibold max-lg:text-lg max-sm:text-white max-md:text-white">
                  <p>Loading...</p>
                </div>
              )}

              <div className="w-full flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-quote-icon lucide-quote max-xs:size-7"
                >
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                </svg>
              </div>
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
