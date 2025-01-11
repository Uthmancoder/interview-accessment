import React from "react";
import gratitude from "../assets/icon-thank-you.svg";

const Compliment = () => {
  return (
    <div className="w-full h-full min-h-[50vh] md:min-h-[70vh] lg:min-h-[65vh] flex items-center">
      <div className="grid gap-4">
        <img
          className="w-20 h-20 rounded-full mx-auto"
          src={gratitude}
          alt=""
        />
        <h1 className="text-3xl lg:text-4xl font-semibold text-blue-950 text-center">
          Thank You
        </h1>
        <p className="text-center leading-snug md:tracking-wider text-black/60 text-md md:text-lg px-8">
          Thanks for confirming your subscription we hope you had fun using our
          platform. if you ever need any support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

export default Compliment;
