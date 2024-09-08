import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newToursList = tours.filter((tour) => {
      return id !== tour.id;
    })
    setTours(newToursList);
  }

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const resp = await fetch(url);
      const toursList = await resp.json();
      setTours(toursList);
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }


  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }

  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <button
          className="btn"
          type="button"
          style={{ marginTop: '2rem' }}
          onClick={() => fetchTours()}>Refresh</button>
      </div>
    </main>
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
