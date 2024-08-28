import { IoCheckmarkSharp } from "react-icons/io5";

type StepIndecator = {
  step: number;
  title: string;
  currentStep: number;
};

const StepIndicator = ({ step, title, currentStep }: StepIndecator) => (
  <div className="flex items-center ">
    <div className="flex flex-col items-center">
      <div
        className={`rounded-full w-10 h-10 flex items-center justify-center ${
          step <= currentStep ? "bg-[#4cbfb0]" : "bg-gray-300"
        }`}
      >
        {step < currentStep ? (
          <IoCheckmarkSharp className="text-white" />
        ) : (
          <span
            className={`text-white ${step === currentStep ? "font-bold" : ""}`}
          >
            {step}
          </span>
        )}
      </div>
      <span className="mt-2 text-sm text-center ">
        {step < currentStep ? (
          <IoCheckmarkSharp className="text-white" />
        ) : (
          <span
            className={`text-[#7C3FFF] ${
              step === currentStep ? "font-bold" : ""
            }`}
          >
            <p className="text-[#4cbfb0]"> {title}</p>
          </span>
        )}
      </span>
    </div>
    {step < 4 && <div className="flex-1 border-t border-gray-300 mx-2"></div>}
  </div>
);

export default StepIndicator;
