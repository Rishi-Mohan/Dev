const Profile = ({ data, setData }) => {
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
      <div>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleUpdate(e, "email")}
        />
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleUpdate(e, "age")}
        />
      </div>
    </div>
  );
};

export default Profile;
