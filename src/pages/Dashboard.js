"use client";

import useRandomUsers from "@/Axios-Api/RandomApi";
import styles from "../pages/Dashboard.scss";
import axios from "axios";
import React, {useState} from "react";

const baseURL = "https://randomuser.me/api/?results=500";

export default function Dashboard() {
  const users = useRandomUsers();

  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  if (!users) return <div>Carregando...</div>;

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    if (selectedAge && selectedGender) {
      return (
        user.dob.age <= parseInt(selectedAge) && user.gender === selectedGender
      );
    } else if (selectedAge) {
      return user.dob.age <= parseInt(selectedAge);
    } else if (selectedGender) {
      return user.gender === selectedGender;
    }
    return true;
  });

  let counter = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].status === "0") counter++;
  }
  console.log(counter);
  return (
    <>
      <section>
        <div>
          <label htmlFor="age-select">Age</label>
          <select
            id="age-select"
            value={selectedAge}
            onChange={handleAgeChange}
          >
            <option value=""></option>
            <option value="28">18 ou menos</option>
            <option value="30">30 ou menos</option>
            <option value="50">50 ou menos</option>
          </select>
        </div>
        <div>
          <label htmlFor="gender-select">Selecione o gênero:</label>
          <select
            id="gender-select"
            value={selectedGender}
            onChange={handleGenderChange}
          >
            <option value="">Todos os gêneros</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
        </div>
        <div>{/* <h1>KPI Dashboard </h1> */}</div>
        {filteredUsers.map((user) => (
          <div key={user.login.uuid}>
            <p>
              Nome: {user.name.first} {user.name.last}
            </p>
            <p>Idade: {user.dob.age}</p>
            <p>Gênero: {user.gender}</p>
          </div>
        ))}
        ;
      </section>
   
    </>
  );
}
