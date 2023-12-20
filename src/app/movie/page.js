import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";
import { resolve } from "styled-jsx/css";

const movie = async () => {
  // for loading animation
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Using a free api key from Rapid api to get dynamic movie data
  const url = process.env.API_URL;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ce875efff9msh6d8182ef77616f0p1da92cjsn4412774b6ad1",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={`${styles.movieSection}`}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((curEle) => {
              return <MovieCard key={curEle.id} {...curEle} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default movie;
