import useMutation from "../api/useMutation";

const ActivitiesForm = () => {
  const { mutate: add, loading, error } = useMutation();

  const addActivity = (formData) => {
    const name = formData.get("name");
    const description = formData.get("description");
    add({
      method: "POST",
      resource: "/activities",
      body: { name, description },
      tagsToInvalidate: ["activities"],
    });
  };

  return (
    <>
      <h2>Add new activity</h2>
      <form action={addActivity}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Description
          <input type="text" name="description" />
        </label>
        <button>{loading ? "Adding..." : "Add activity"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  );
};

export default ActivitiesForm;
