import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation.js";

const Routines = () => {
  const {
    data: allRoutines,
    loading: loadingRoutines,
    error: routinesError,
  } = useQuery("/routines", "routines");
  const { data: addedRoutine, loading, error } = useMutation();
  // console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Routines</h1>
      {allRoutines && (
        <ul>
          {allRoutines.map((routine) => {
            console.log(routine);
            return <li key={routine.id}>{routine.name}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default Routines;
