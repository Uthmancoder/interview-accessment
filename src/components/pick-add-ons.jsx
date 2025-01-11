import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementStep,
  incrementStep,
  setUserAddOns,
} from "../redux/userDetails";

const PickAddOns = () => {
  const { addOns } = useSelector((state) => state.personalInfo);
  const [selectedAddOns, setSelectedAddOns] = useState(addOns || []);
  const dispatch = useDispatch();

  // Data for Add-Ons
  const addOnsData = [
    {
      title: "Online Service",
      description: "Access to multiplayer games",
      price: "+$1/mo",
    },
    {
      title: "Large Storage",
      description: "Extra 1TB of cloud save",
      price: "+$2/mo",
    },
    {
      title: "Customizable Profile",
      description: "Custom theme on your profile",
      price: "+$2/mo",
    },
  ];

  // Handle Add-On Selection
  const toggleAddOn = (addOn) => {
    const isAlreadySelected = selectedAddOns.some(
      (selected) => selected.title === addOn.title
    );
    if (isAlreadySelected) {
      setSelectedAddOns((prev) =>
        prev.filter((selected) => selected.title !== addOn.title)
      );
    } else {
      setSelectedAddOns((prev) => [...prev, addOn]);
    }
  };

  // Move to Next Step
  const handleNextStep = () => {
    // Filter unique add-ons (in case of unexpected duplicates)
    const uniqueAddOns = [
      ...new Map(selectedAddOns.map((addOn) => [addOn.title, addOn])).values(),
    ];
    dispatch(setUserAddOns(uniqueAddOns));
    dispatch(incrementStep());
  };

  return (
    <div>
      <div className="p-6 md:max-w-3xl lg:max-w-2xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950">
            Pick add-ons
          </h1>
          <p className="text-black/40 text-md leading-relaxed tracking-wider">
            Add-ons help enhance your gaming experience.
          </p>
        </div>

        <div className="grid gap-4 mt-4">
          {addOnsData.map((data) => (
            <div
              key={data.title}
              onClick={() => toggleAddOn(data)}
              className={`flex items-center gap-6 justify-between p-6 rounded-md border border-[1.2px] border-[#473dff] rounded-xl cursor-pointer ${
                selectedAddOns.some((addOn) => addOn.title === data.title)
                  ? "bg-blue-50"
                  : "bg-transparent"
              }`}
            >
              <div className="flex items-center gap-5">
                <input
                  type="checkbox"
                  checked={selectedAddOns.some(
                    (addOn) => addOn.title === data.title
                  )}
                  onChange={() => toggleAddOn(data)}
                  className="custom-checkbox"
                />
                <div>
                  <h2 className="text-md font-semibold">{data.title}</h2>
                  <p className="text-sm">{data.description}</p>
                </div>
              </div>
              <h2 className="text-lg text-[#473dff] font-light">
                {data.price}
              </h2>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-[20%] hidden md:flex">
          <div>
            <h2
              onClick={() => dispatch(decrementStep())}
              className="cursor-pointer text-gray-500 font-semibold"
            >
              Go Back
            </h2>
          </div>

          <button
            onClick={handleNextStep}
            type="submit"
            className="bg-blue-950 text-white py-3 ml-auto px-10 rounded-md hover:bg-blue-700 w-fit"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default PickAddOns;
