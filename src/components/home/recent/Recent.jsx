import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recentes projetos Produzidos"
            subtitle="Aqui está apresentado os mais recentes projetos produzidas"
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
