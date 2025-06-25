import { useAuth } from "../auth/AuthContext";
import ActivitiesList from "./ActivitiesList.jsx";
import ActivitiesForm from "./ActivitiesForm.jsx";

const ActivitiesPage = () => {
  const { token } = useAuth();

  return (
    <>
      <h1>Activities</h1>
      <ActivitiesList />
      {token && <ActivitiesForm />}
    </>
  );
};

export default ActivitiesPage;
