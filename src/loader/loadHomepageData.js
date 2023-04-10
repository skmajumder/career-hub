"use strict";

async function fetchHomeData() {
  try {
    const response1 = await fetch("category.json");
    const category = await response1.json();

    const response2 = await fetch("jobs.json");
    const jobs = await response2.json();

    return [category, jobs];
  } catch (error) {
    console.error(error);
  }
}

export { fetchHomeData };
