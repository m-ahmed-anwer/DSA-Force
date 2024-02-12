import "animate.css";
import Link from "next/link";
import HomePageTitle from "./page.title";
import Modal from "../data/dsa.data";
import Footer from "./footer";

export default function Home() {
  const data = Modal.DSAModel;

  return (
    <main>
      <HomePageTitle />

      <div className="grid gap-5 mb-20 md:grid-cols-2 lg:grid-cols-3 ">
        {/*  ALl Courses Mapped */}
        {data.map((item) => (
          <Link
            href={item.href}
            className="p-5 duration-300 transform hover:-translate-y-2 "
            key={item.id}
          >
            <div className="mockup-window border border-base-300 shadow-xl animate__animated animate__flipInX">
              <div className="flex justify-center px-4 py-1 border-t border-base-300">
                <div
                  className={`card bg-slate-400  relative py-2 px-2 w-full my-4`}
                >
                  <div className="card-body">
                    <div className="flow-root">
                      <h2 className=" float-left card-title text-3xl">
                        {item.dsaType}
                      </h2>

                      <button
                        className={`float-right px-1-0 btn  border-none rounded-full text-white text-lg ${
                          item.count === 0
                            ? "bg-[#28a745] hover:bg-[#28b745]"
                            : "bg-[#007bff] hover:bg-[#407af1]"
                        }`}
                      >
                        {item.count === 0 ? "Start Now" : "Solve Now"}
                      </button>
                    </div>
                    <p>Total Questions: {item.questions.length}</p>
                    <p>
                      {item.count === 0 ? `Not yet started` : `${"10"}% Done`}
                    </p>
                    <p></p>
                    <progress
                      className="progress  w-full h-4"
                      value={"10"}
                      max={"100"}
                    ></progress>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </main>
  );
}
