const Setting = ({ data, setData }) => {
  const { theme } = data;
  const handleUpdate = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleUpdate}
          />
          Dark Theme
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleUpdate}
          />
          Light Theme
        </label>
      </div>
    </div>
  );
};

export default Setting;
