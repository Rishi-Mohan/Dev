const Profile = ({ data, setData, errors }) => {
  const { name, email, age } = data;
  const handleUpdate = (e, item) => {
    setData((prevState) => ({
      // we are passing new state as a object so here we are retrieving the previous state and then change the data
      ...prevState,
      [item]: e.target.value, // this is the way by which we can access specific label and we set the changed data from the input box
    }));
  };
  return (
    <div className=".label">
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleUpdate(e, "name")}
        />
      </div>
      {errors.name && <span className="error">{errors.name}</span>}
      <div>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleUpdate(e, "email")}
        />
      </div>
      {errors.email && <span className="error">{errors.email}</span>}
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleUpdate(e, "age")}
        />
      </div>
      {errors.age && <span className="error">{errors.age}</span>}
    </div>
  );
};

export default Profile;
