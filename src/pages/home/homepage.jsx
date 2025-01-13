// import React from "react";
import { steps } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementStep,
  incrementStep,
  setCurrentStep,
} from "../../redux/userDetails";
import PersonalInfo from "../../components/personal-info";
import SelectPlan from "../../components/select-plan";
import PickAddOns from "../../components/pick-add-ons";
import FinishUp from "../../components/finish-up";
import Compliment from "../../components/compliment";

const HomePage = () => {
  const dispatch = useDispatch();
  const { currentStep = 1 } = useSelector((state) => state.personalInfo);

  // Derive selectedStep directly from the steps array
  const selectedStep = steps[currentStep - 1]?.step || "Step 1";

  return (
    <div className="bg-black/5 md:min-h-screen flex items-center">
      <div className="w-full md:w-11/12  bg-white  lg:w-full max-w-[800px] mx-auto shadow-lg md:p-4 rounded-lg grid md:grid-cols-7">
        {/* Sidebar */}
        <div className="md:col-span-3 lg:col-span-2 sideBar">
          <div className="flex items-center justify-center md:grid md:justify-start ">
            {steps.map((data, index) => {
              const isSelected =
                currentStep === 5
                  ? index + 1 === 4
                  : selectedStep === data.step;

              return (
                <div
                  key={data.step}
                  onClick={() => {
                    dispatch(setCurrentStep(index + 1));
                  }}
                  className="flex items-center justify-start mx-5 md:mx-0 gap-4 mt-6 cursor-pointer"
                >
                  {/* Step Indicator */}
                  <div
                    className={`border border-white p-2 rounded-full flex items-center justify-center w-12 h-12 ${
                      isSelected ? "bg-blue-100 text-black" : "text-white"
                    }`}
                  >
                    <p className="text-2xl font-semibold">{index + 1}</p>
                  </div>
                  {/* Step Description */}
                  <div className="hidden md:block">
                    <h3
                      className={`font-semibold ${
                        isSelected ? "text-white" : "text-white/60"
                      }`}
                    >
                      {data.step}
                    </h3>
                    <p
                      className={`mt-[-2px] uppercase leading-relaxed text-md font-semibold ${
                        isSelected ? "text-white/80" : "text-white"
                      }`}
                    >
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="md:col-span-4 lg:col-span-5 px-2 h-full min-h-[70vh] md:min-h-full md:px-0 bg-black/10 md:bg-white  pb-10 md:pb-0">
          <div className="w-full lg:w-10/12 mx-auto bg-white rounded-lg mt-[-20%] md:mt-0 ">
            {currentStep === 1 ? (
              <PersonalInfo />
            ) : currentStep === 2 ? (
              <SelectPlan />
            ) : currentStep === 3 ? (
              <PickAddOns />
            ) : currentStep === 4 ? (
              <FinishUp />
            ) : currentStep === 5 ? (
              <Compliment />
            ) : null}
          </div>

          {currentStep === 1 ? (
            <div className="mt-6 flex items-center justify-end md:hidden">
              <button
                onClick={() => dispatch(incrementStep())}
                type="submit"
                className=" md:hidden  bg-blue-950 text-white py-3 ml-auto px-10 rounded-md hover:bg-blue-700 w-fit"
              >
                Next Step
              </button>
            </div>
          ) : (
            currentStep > 1 &&
            currentStep < 5 && (
              <div className="flex items-center justify-between pt-8 px-2 md:hidden">
                <div>
                  <h2
                    onClick={() => dispatch(decrementStep())}
                    className="cursor-pointer text-gray-500 font-semibold"
                  >
                    Go Back
                  </h2>
                </div>

                <button
                  onClick={() => {
                    dispatch(incrementStep());
                  }}
                  type="submit"
                  className="bg-blue-950 text-white py-3 ml-auto px-10 rounded-md hover:bg-blue-700 w-fit"
                >
                  {currentStep === 4 ? "Confirm" : "Next Step"}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
