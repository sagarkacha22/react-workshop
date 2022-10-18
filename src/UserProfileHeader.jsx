import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Gravatar from "react-gravatar";
// import createResource from "./createResource";

// const userResource = createResource(
//   axios.get("http://localhost:3000/profile").then((res) => res.data)
// );

export default function UserProfileHeader() {
  //   const currentUser = userResource.read();
  const {
    data: currentUser,
  } = useQuery(
    ["userProfile"],
    () => axios.get("http://localhost:3000/profile").then((res) => res.data),
    {
      useErrorBoundary: true,
      suspense: true,
    }
  );
  // console.log(isLoading, isFetching, isError)

  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h3 mr-auto">To Do</span>
      <div style={{ overflow: "hidden" }} className="bg-info rounded-circle">
        <Gravatar
          style={{ width: "2rem", height: "2rem" }}
          title={currentUser?.name}
          email={currentUser?.email}
        />
      </div>
    </nav>
  );
}
