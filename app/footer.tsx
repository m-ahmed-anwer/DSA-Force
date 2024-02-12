import React from "react";

function Footer() {
  return (
    <div>
      <div className=" sm:container">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"></div>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 ">
        <div className="rounded-lg bg-[#000] px-4 py-3 text-white shadow-lg">
          <p className="text-center text-md font-medium">
            Made by{" "}
            <a
              href="https://github.com/m-ahmed-anwer"
              className="underline"
              target="_blank"
            >
              Ahmed
            </a>{" "}
            😊
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
