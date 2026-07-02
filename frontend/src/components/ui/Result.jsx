import React from "react";
import "../Dashboard/Dashboard.css";
import { GiProgression } from "react-icons/gi";

export default function Result() {
  const pathname = window.location.pathname;
  const isHistoryPage = pathname.includes("history");
  return (
    <div className="profile-container">
      {!isHistoryPage && <h3>Result</h3>}
      <h2>
        75% <GiProgression color="orange" />
      </h2>
      {!isHistoryPage && <h5>Feedback</h5>}
      {isHistoryPage && (
        <h5 style={{ color: "blue" }}>Full Stack Mern Developer</h5>
      )}
      {isHistoryPage && <h5>Resume Name: Sachin Koli</h5>}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto
        quo aperiam ad porro recusandae, enim veniam debitis, perferendis omnis
        velit dolores consequuntur temporibus maxime deserunt, reiciendis ullam
        nihil dicta laboriosam sint. Maxime explicabo quis nisi eaque, aperiam
        velit magnam perferendis asperiores iste beatae reiciendis quaerat
        corrupti autem, necessitatibus molestias? eaque, aperiam velit magnam
        perferendis asperiores iste beatae reiciendis quaerat corrupti autem,
        necessitatibus molestias?
      </p>
      {isHistoryPage && (
        <span style={{ alignSelf: "flex-start" }}>Dated: 02-07-2026</span>
      )}
    </div>
  );
}
