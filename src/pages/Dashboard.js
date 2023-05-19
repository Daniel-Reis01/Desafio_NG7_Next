import Navigation from "@/components/menu-navigation/Navigation";
import useRandomUsers from "@/Axios-Api/RandomApi";
import styles from "../pages/Dashboard.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://randomuser.me/api/?results=500";

export default function dashboard() {
  const post = useRandomUsers();

  if (!post) return null;

  return (
    <>
      <section>
        <div>
          <h1>KPI Dashboard </h1>
         
        </div>
      {post.map((post, index) => (
          <div key={index}>
            <h1>{post.name.first} </h1><br/>
            <p>{post.gender}</p>
          </div>
        ))}
      </section>
      <Navigation />
    </>
  );
}
