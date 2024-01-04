import { useEffect, useState } from "react";
import JobList from "../components/JobList";
import { getJobs } from "../lib/graphql/queries";

function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await getJobs();
      setData(data);
    };
    fetch();
  }, []);
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={data} />
    </div>
  );
}

export default HomePage;
