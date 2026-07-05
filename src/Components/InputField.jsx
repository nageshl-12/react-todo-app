import { useEffect, useRef } from "react";
import { ListPlus, BrushCleaning } from "lucide-react";

const InputField = ({ input, setInput, onAdd, onClear }) => {
  const InputEl = useRef(null);
  useEffect(function () {
    InputEl.current.focus();
  }, []);

  return (
    <div className="flex justify-between gap-4 items-center">
      <input
        className="bg-blue-50 p-3 w-100 rounded-2xl transition duration-300 focus:outline-blue-400 hover:shadow-[0_10px_35px_rgba(0,0,255,0.3)]"
        type="text"
        name=""
        id=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="type anything....."
        ref={InputEl}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
      />

      <button
        onClick={onAdd}
        className="bg-white flex flex-row gap-2 border w-fit border-[rgba(0,0,0,0.2)] focus:outline-blue-300 p-2 rounded-2xl text-black cursor-pointer transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(0,0,255,0.4)]"
      >
        <ListPlus size={24} />
        Add
      </button>
      <button
        className="bg-white border w-fit flex gap-1 border-[rgba(0,0,0,0.2)] focus:outline-blue-300 p-2 rounded-2xl text-black cursor-pointer transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(0,0,255,0.4)]"
        onClick={onClear}
      >
        <BrushCleaning size={24} />
        Clear
      </button>
    </div>
  );
};

export default InputField;
