import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { createContext } from "react";

export const JobCategoriesContext = createContext([]);
export const JobAvailableContext = createContext([]);

function App() {
  const [category, jobs] = useLoaderData();
  return (
    <>
      <JobCategoriesContext.Provider value={category}>
        <JobAvailableContext.Provider value={jobs}>
          <div className="App">
            <Header />
            <main className="main">
              <Outlet />
            </main>
            <Footer />
          </div>
        </JobAvailableContext.Provider>
      </JobCategoriesContext.Provider>
    </>
  );
}

export default App;
