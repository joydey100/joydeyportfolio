import { useEffect, useState } from "react";

const useProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return [projects, setProjects];
};

export default useProject;
