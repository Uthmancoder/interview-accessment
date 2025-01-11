import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementStep,
  incrementStep,
  setCurrentStep,
} from "../redux/userDetails";

const FinishUp = () => {
  const dispatch = useDispatch();
  const { userPlan, addOns } = useSelector((state) => state.personalInfo);

  const { title, duration, price: userPlanPrice } = userPlan;

  // Helper function to extract numeric values from price strings
  const extractPrice = (priceString) => {
    return parseFloat(priceString.replace(/[^\d.]/g, ""));
  };

  // Calculate total price
  const totalPrice =
    extractPrice(userPlanPrice) +
    addOns.reduce((total, addOn) => total + extractPrice(addOn.price), 0);

  return (
    <div className="pb-4 md:pb-0">
      <div className="p-6 md:max-w-3xl lg:max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-950">Finishing Up</h1>
        <p className="text-black/40 text-md leading-relaxed tracking-wider">
          Double check everything looks okay before confirming
        </p>
      </div>

      <div className="w-11/12 mx-auto">
        <div className="bg-blue-50 p-5 rounded-lg mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-blue-950 capitalize">
                {title} {duration}
              </h1>
              <small
                onClick={() => dispatch(setCurrentStep(2))}
                className="text-blue-700 border-b border-b-blue-700 cursor-pointer"
              >
                Change
              </small>
            </div>
            <div>
              <h2>{userPlanPrice}</h2>
            </div>
          </div>

          <div className="grid gap-5 mt-8 border-t border-t-black/30 pt-8 pb-6">
            {addOns.map((addOn) => (
              <div
                key={addOn.title}
                className="flex items-center justify-between"
              >
                <p>{addOn.title}</p>
                <p>{addOn.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between my-8 md:my-0 md:mt-6 lg:p-8">
          <p>Total (per month)</p>
          <p className="text-blue-800">+${totalPrice.toFixed(2)}/mo</p>
        </div>
      </div>

      <div className="flex items-center justify-between md:mt-[25%] lg:mt-[10%] px-4 md:pl-6 md:pr-5 lg:pl-8 lg:pr-4 hidden md:flex">
        <div>
          <h2
            onClick={() => dispatch(decrementStep())}
            className="cursor-pointer text-gray-500 font-semibold"
          >
            Go Back
          </h2>
        </div>

        <button
          onClick={() => dispatch(incrementStep())}
          type="submit"
          className="bg-[#473dff] text-white py-3 ml-auto px-10 rounded-md hover:bg-blue-700 w-fit"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FinishUp;
