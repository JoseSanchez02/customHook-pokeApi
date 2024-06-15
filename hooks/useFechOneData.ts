import { useEffect, useState } from "react";

const useFetchOneData = (link = "") => {
    const [pika, setPika] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const response = await fetch(link);
        if (response.status != 200) {
          throw new Error("Error en la peticion");
        }
        const data = await response.json();
        setPika(data);
      } catch (error) {
        setError(error as any);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);
  return { pika, loading, error };
};
export default useFetchOneData;
