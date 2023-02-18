import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import UpdateModal from "./UpdateMoal/UpdateModal";
const About = () => {
  const { data: about = [], refetch } = useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      const res = await axios.get(
        `https://social-media-job-task-server.vercel.app/about`
      );
      return res.data;
    },
  });
  return (
    <div>
      {about.map((abt) => (
        <>
          <div className="container w-1/2 mx-auto mt-28">
            <div className="flex ">
              <div className="text-start ">
                <h4 className="text-2xl">Hi,I'm</h4>
                <h1 className="text-6xl my-6 mx-2 text-primary">{abt.name}</h1>
                <h3 className="text-3xl">Front-end Developer</h3>
              </div>
              <label htmlFor="my-modal-5">
                <AiFillEdit className="text-2xl"></AiFillEdit>
              </label>
            </div>
            <div> </div>
            <div>
              <div className="mt-10">
                <table className="table ">
                  <tbody>
                    <tr>
                      <th>Email:</th>
                      <td>{abt.email}</td>
                    </tr>

                    <tr>
                      <th>University:</th>
                      <td>{abt.university}</td>
                    </tr>

                    <tr>
                      <th>Address</th>
                      <td>{abt.address}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <UpdateModal refetch={refetch} abt={abt}></UpdateModal>
        </>
      ))}
    </div>
  );
};

export default About;
