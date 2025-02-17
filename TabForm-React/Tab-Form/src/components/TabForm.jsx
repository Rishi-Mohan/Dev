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
  // config driven architecture
  const tab = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Setting",
      component: Setting,
    },
  ];
  const ActiveTabComponent = tab[activeTab].component;

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const handlePrevClick = () => {
    setActiveTab((cur) => cur - 1);
  };
  const handleNextClick = () => {
    setActiveTab((cur) => cur + 1);
  };
  const handleSubmitClick = () => {
    // make api call
    console.log("Radha Radha");
  };
  return (
    <>
      <div className="heading-container">
        {tab?.map((t, index) => (
          <div className="heading" onClick={() => changeTab(index)}>
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
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
