import { useEffect, useRef } from "react";

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
        className="bg-white flex flex-row gap-2 h-12 border w-fit border-[rgba(0,0,0,0.2)] focus:outline-blue-300 p-2 rounded-2xl text-black cursor-pointer transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(0,0,255,0.4)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-list-plus-icon lucide-list-plus"
        >
          <path d="M16 5H3" />
          <path d="M11 12H3" />
          <path d="M16 19H3" />
          <path d="M18 9v6" />
          <path d="M21 12h-6" />
        </svg>
        Add
      </button>
      <button
        className="bg-white border w-fit flex gap-1 border-[rgba(0,0,0,0.2)] focus:outline-blue-300 p-2 rounded-2xl text-black cursor-pointer transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(0,0,255,0.4)]"
        onClick={onClear}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="shrink-0"
        >
          <path d="m16 22-1-4" />
          <path d="M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1" />
          <path d="M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z" />
          <path d="m8 22 1-4" />
        </svg>
        Clear
      </button>
    </div>
  );
};

export default InputField;
