import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";

const ActivitiesList = () => {
  const {
    data: allActivities,
    loading: loadingActivities,
    error: activitiesError,
  } = useQuery("/activities", "activities");
  const { mutate: deleteActivity, loading, error } = useMutation();
  const { token } = useAuth();
  if (loadingActivities) {
    return <p>Loading...</p>;
  }
  if (!token) {
    return (
      <>
        <p>Imagine all the activities!</p>
        {allActivities && (
          <ul>
            {allActivities.map((activity) => {
              return <li key={activity.id}>{activity.name}</li>;
            })}
          </ul>
        )}
      </>
    );
  } else {
    return (
      <>
        <p>Imagine all the activities!</p>
        {allActivities && (
          <ul>
            {allActivities.map((activity) => {
              return (
                <section key={activity.id} id="individual-activity">
                  <li>{activity.name}</li>
                  <button
                    onClick={() =>
                      deleteActivity({
                        method: "DELETE",
                        resource: `/activities/${activity.id}`,
                        tagsToInvalidate: ["activities"],
                      })
                    }
                  >
                    {loading ? "Deleting" : "Delete"}
                  </button>
                </section>
              );
            })}
          </ul>
        )}
      </>
    );
  }
};

export default ActivitiesList;
