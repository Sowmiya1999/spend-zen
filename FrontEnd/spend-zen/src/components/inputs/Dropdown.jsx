import {
  ArrowDownToDotIcon,
  ArrowDownWideNarrow,
  AsteriskIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { LuArrowDownWideNarrow } from "react-icons/lu";

const Dropdown = ({ dataList, label, placeholder, mandatoryField }) => {
  const [isDropDownClicked, setIsDropDownClicked] = useState(false);
  const [selectedDropDownValue, setSelectedDropdownValue] = useState("");

  const handleCashTypeSelected = (name) => {
    setSelectedDropdownValue(name);
    setIsDropDownClicked(false);
  };
  return (
    <div className="">
      <label className=" text-sm text-slate-800">
        {label}
        {mandatoryField && (
          <AsteriskIcon
            size={11}
            className="inline-block ml-0.5 text-red-600 align-text-top"
          />
        )}
      </label>

      <div className="bg-red-350 relative mt-3 mb-4">
        <div className="input-box flex items-center justify-between">
          <input
            className=""
            disabled
            placeholder={placeholder}
            value={selectedDropDownValue}
          />
          {isDropDownClicked ? (
            <ChevronUp
              size={20}
              className="inline-block text-slate-700"
              onClick={() => setIsDropDownClicked(false)}
            />
          ) : (
            <ChevronDown
              size={20}
              className="inline-block text-slate-700"
              onClick={() => setIsDropDownClicked(true)}
            />
          )}
        </div>
        {isDropDownClicked && (
          <div className="absolute bg-white w-full rounded-b shadow-2xl left-0 right-0 z-10 ">
            <ol>
              {dataList.map((item, index) => (
                <li
                  onClick={() => handleCashTypeSelected(item.name)}
                  className="px-2 py-1.5 hover:bg-primary rounded"
                  key={`cashType-${index}`}
                >
                  {item.name}
                </li>
              ))}
            </ol>
          </div>
        )}

      </div>
    </div>
  );
};

export default Dropdown;
