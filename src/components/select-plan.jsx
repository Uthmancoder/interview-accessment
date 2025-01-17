import React, { useState } from "react";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementStep,
  incrementStep,
  setUserPlan,
} from "../redux/userDetails";

const SelectPlan = () => {
  const dispatch = useDispatch();
  const { userPlan } = useSelector((state) => state.personalInfo);

  // Default values for plan selection
  const {
    duration = "monthly",
    title = "Arcade",
    monthlyPrice = 9,
    icon = arcade,
  } = userPlan;

  const plans = [
    {
      icon: arcade,
      title: "Arcade",
      monthlyPrice: 9,
    },
    {
      icon: advanced,
      title: "Advanced",
      monthlyPrice: 12,
    },
    {
      icon: pro,
      title: "Pro",
      monthlyPrice: 15,
    },
  ];

  const [switchDuration, setSwitchDuration] = useState(
    duration === "yearly" // Set toggle based on previous selection
  );
  const [selectedPlan, setSelectedPlan] = useState({
    title,
    icon,
    monthlyPrice,
  });

  // Helper function to calculate the price
  const getPrice = (price) => {
    if (switchDuration) {
      // Yearly pricing with a 10% discount
      const yearlyPrice = price * 12 * 0.9;
      return `$${yearlyPrice.toFixed(2)}/yr`;
    }
    return `$${price}/mo`;
  };

  // Save selected plan and move to the next step
  const handleNextStep = () => {
    dispatch(
      setUserPlan({
        ...selectedPlan,
        price: getPrice(selectedPlan.monthlyPrice),
        duration: switchDuration ? "yearly" : "monthly",
      })
    );
    dispatch(incrementStep());
  };

  return (
    <div>
      <div className="p-6 md:max-w-3xl lg:max-w-2xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950">
            Select Plan
          </h1>
          <p className="text-black/40 text-md leading-relaxed tracking-wider">
            You have the option of monthly or yearly billing
          </p>
        </div>

        {/* Plans List */}
        <div className="grid md:flex items-center gap-4 my-5 md:my-10">
          {plans.map((plan) => (
            <div
              key={plan.title}
              onClick={() => setSelectedPlan(plan)}
              className={`border p-6 flex md:grid gap-6 rounded-md w-full cursor-pointer ${
                selectedPlan.title === plan.title
                  ? "border-blue-800 bg-blue-50"
                  : "border-slate-300"
              }`}
            >
              <img className="w-10 h-10 rounded-full" src={plan.icon} alt="" />
              <div className="grid gap-2 md:gap-6">
                <h2 className="text-xl text-blue-950 font-semibold">
                  {plan.title}
                </h2>
                <h2>{getPrice(plan.monthlyPrice)}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Duration */}
        <div className="flex rounded-md items-center justify-center p-2 gap-5 bg-blue-50">
          <p>Monthly</p>
          <div onClick={() => setSwitchDuration(!switchDuration)}>
            {switchDuration ? (
              <PiToggleRightFill size={35} className="text-blue-950" />
            ) : (
              <PiToggleLeftFill size={35} className="text-blue-950" />
            )}
          </div>
          <p>Yearly</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-[20%] hidden md:flex">
          <h2
            onClick={() => dispatch(decrementStep())}
            className="cursor-pointer text-gray-500 font-semibold"
          >
            Go Back
          </h2>
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

export default SelectPlan;
