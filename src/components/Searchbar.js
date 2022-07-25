import { useContext, useState } from "react";
import Cardc from "./Cardc";
import { getFoodFromApi } from "../api/fetchApi";
import { DataContext } from "../dataContext/DataContext";

const Searchbar = () => {

    const [query, setQuery] = useState(" ");
    const { setData, data, setError, error } = useContext(DataContext);

      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=9d1d7e5acfb344e7b0028ac0144e5c87&query=${query}&maxFat=25&number=3`;


  return (
    <div className="bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getFoodFromApi(setData, url, setError);
          setQuery("");
        }}
      >
        <input
          type="text"
          placeholder="Search a recipe"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>

      {data ? (
        data.results.map((data) => (
          <div className="_container" key={data.id}>
                 <Cardc data={data} />
          </div>
        ))
      ) : (
        <div className="error">{error}</div>
      )}
      {data && data.results.length === 0 && (
        <h2 className="error">Sorry Item is not found</h2>
      )}
    </div>
  );
};

export default Searchbar;
