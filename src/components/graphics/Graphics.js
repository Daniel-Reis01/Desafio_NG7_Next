import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables, CategoryScale } from "chart.js";

Chart.register(CategoryScale);
Chart.register(...registerables);

function Graphic({ users, selectedAge, selectedGender }) {
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

  const countries = {};
  filteredUsers.forEach((user) => {
    const country = user.location.country;
    if (countries[country]) {
      countries[country]++;
    } else {
      countries[country] = 1;
    }
  });

  const sortedCountries = Object.entries(countries).sort((a, b) => b[1] - a[1]);

  const labels = sortedCountries.map((country) => country[0]);
  const votes = sortedCountries.map((country) => country[1]);

  const newData = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: votes,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <div style={{ position: "relative", height: "300px" }}>
        <Bar data={newData} />
      </div>
    </div>
  );
}

export default Graphic;
