const Interest = ({ data, setData, errors }) => {
  const { interest } = data;
  const handleUpdate = (e) => {
    setData((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState.interest, e.target.name]
        : prevState.interest.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interest.includes("coding")}
            onChange={handleUpdate}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interest.includes("music")}
            onChange={handleUpdate}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Competitive Programming"
            checked={interest.includes("Competitive Programming")}
            onChange={handleUpdate}
          />
          Competitive Programming
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="movies"
            checked={interest.includes("movies")}
            onChange={handleUpdate}
          />
          Movies
        </label>
      </div>
      {errors.interest && <span className="error">{errors.interest}</span>}
    </div>
  );
};

export default Interest;
