"use client";

import useRandomUsers from "@/Axios-Api/RandomApi";
import styles from "../pages/Dashboard.scss";
import axios from "axios";
import React, { useState } from "react";

const baseURL = "https://randomuser.me/api/?results=500";

export default function Dashboard() {
  const users = useRandomUsers();

  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [ageCount, setAgeCount] = useState(0);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  if (!users) return <div className="loading">Carregando...</div>;

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
    const SelectedAge = event.target.value;

    const count = users.filter(
      (user) => user.dob.age >= parseInt(selectedAge)
    ).length;
    setAgeCount(count);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    const selectedGender = event.target.value;

    const maleCount = users.filter((user) => user.gender === "male").length;
    const femaleCount = users.filter((user) => user.gender === "female").length;
    setMaleCount(maleCount);
    setFemaleCount(femaleCount);
  };

  const filteredUsers = users.filter((user) => {
    if (selectedAge && selectedGender) {
      return (
        user.dob.age >= parseInt(selectedAge) && user.gender === selectedGender
      );
    } else if (selectedAge) {
      return user.dob.age >= parseInt(selectedAge);
    } else if (selectedGender) {
      return user.gender === selectedGender;
    }
    return true;
  });

const element = document.querySelector('.dash-navbar');

element.style.backgroundColor = 'rgb(218, 228, 235)';


  return (
    <>
      <section className="dashboard-user">
        <div className="nav-dash-user">
          <h1>KPI Dashboard </h1>

          <div>
            <select
              id="age-select"
              value={selectedAge}
              onChange={handleAgeChange}
              className="age-select"
            >
              dasd
              <option value="">age</option>
              <option value="18">18 or older </option>
              <option value="25">25 or older </option>
              <option value="30">30 or older </option>
              <option value="35">35 or older </option>
              <option value="40">40 or older </option>
              <option value="45">45 or older </option>
              <option value="50">50 or older </option>
            </select>
          </div>
          <div>
            <select
              id="gender-select"
              value={selectedGender}
              onChange={handleGenderChange}
              className="gender-select"
            >
              <option value="">gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="show-counter-user">
            <div>
              <img src="/Usuarios.png" width={51} height={50}/>
              <p>{ageCount}</p>
            </div>
            <div>
              <img src="/masculino.png" width={50} height={50}/>
              <p>{maleCount}</p>
            </div>
            <div>
              <img src="/feminino.png" width={50} height={50}/>
              <p>{femaleCount}</p>
            </div>
          </div>
        </div>
      </section>
        
        <div className="user-api">
          {filteredUsers.map((user) => (
            <div key={user.login.uuid}>
              <p>
                Name: {user.name.first} {user.name.last}
              </p>
              <p>Age: {user.dob.age}</p>
              <p>Gender: {user.gender}</p>
            </div>
          ))}
        </div>
    </>
  );
}
