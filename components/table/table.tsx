import "animate.css";
import React from "react";

import Footer from "@/app/footer";
import TableBody from "./table.body";
type Data = {
  name: string;
};
const Table = async (props: Data) => {
  return (
    <div>
      <div className="animate__animated animate__fadeIn">
        <div className="overflow-x-auto">
          <table className="table mb-24">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-lg text-black font-bold">Id</th>
                <th className="text-lg text-black font-bold">Questions</th>
                <th className="text-lg text-black font-bold">link</th>
              </tr>
            </thead>
            <TableBody name={props.name} />
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Table;
