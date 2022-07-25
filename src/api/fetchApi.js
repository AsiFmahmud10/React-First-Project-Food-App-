const getFoodFromApi = async (setData, url, setError) => {
         
  try {
          const local = await fetch(url);

          if (!local.ok) {
            throw new Error("Sorry api call limit exceeded");
          }
          const data = await local.json();
          setData(data);
          setError(null);
  } catch (err) {
        setData(null);
        setError(err.message);
  }
};

export { getFoodFromApi };
