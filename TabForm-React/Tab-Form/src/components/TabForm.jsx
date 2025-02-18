import { useEffect, useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Setting from "./Setting";

const TabForm = () => {
  // central data : it make sure that the data will be persistent across the tabs
  const [data, setData] = useState({
    name: "Rishi",
    age: "25",
    email: "abc@gmail.com",
    interest: ["coding", "music"],
    theme: "dark",
  });
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});
  // config driven architecture
  const tab = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) err.name = "name is not valid";
        if (!data.age || data.age < 18) err.age = "age is not valid";
        if (!data.email || data.email.length < 2)
          err.email = "email is not valid";
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interest.length < 1)
          err.interest = " select atleast one interest";

        setErrors(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveTabComponent = tab[activeTab].component;

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const handlePrevClick = () => {
    if (tab[activeTab].validate()) setActiveTab((cur) => cur - 1);
  };
  const handleNextClick = () => {
    if (tab[activeTab].validate()) setActiveTab((cur) => cur + 1);
  };
  const handleSubmitClick = () => {
    // make api call
    console.log("Radha Radha");
  };
  return (
    <>
      <div className="heading-container">
        {tab?.map((t, index) => (
          <div
            className="heading"
            onClick={() => tab[activeTab].validate() && changeTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tab.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tab.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </>
  );
};

export default TabForm;
