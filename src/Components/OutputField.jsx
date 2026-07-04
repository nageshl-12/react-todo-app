const OutputField = ({ list, onDelete, onCheck, onEdit, onValueChange }) => {
  return (
    <div className="bg-yellow-50 h-screen w-full rounded-2xl p-6 border border-[rgba(0,0,0,0.5)] hover:scrollbar-thumb-red-400 overflow-y-auto scrollbar-thumb-red-400 scrollbar-track-blue-200">
      <ul className="flex gap-3 flex-col ">
        {list.map((list, i) => (
          <div
            className="flex gap-4 justify-between flex-row"
            key={i}
            className={
              list.checked ? "line-through text-gray-500 opacity-70" : ""
            }
          >
            <li
              className="text-lg md:text-[19px] font-sans focus:outline-blue-400  flex gap-2 justify-start flex-1 items-center "
              key={list.id}
            >
              {list.edit ? (
                <textarea
                  autoFocus
                  className="bg-white/900 rounded-lg border w-full pl-3  resize-none "
                  type="text"
                  rows={3}
                  value={list.text}
                  onChange={(e) => onValueChange(list.id, e.target.value)}
                  onFocus={(e) =>
                    e.target.setSelectionRange(
                      e.target.value.length,
                      e.target.value.length,
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      onEdit(list.id);
                    }
                  }}
                />
              ) : (
                <span onDoubleClick={() => onEdit(list.id)}>{list.text}</span>
              )}

              <svg
                onClick={() => onDelete(list.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                name="deletIcon"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="shrink-0 cursor-pointer hover:text-red-500 transition-colors "
              >
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                <path d="M3 6h18" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>

              {list.edit ? (
                <svg
                  onClick={() => onEdit(list.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="hover:text-blue-500 transition-colors shrink-0 cursor-pointer"
                >
                  <path d="M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35" />
                  <path d="m16 19 2 2 4-4" />
                  <path d="M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                  <path d="M7 3v4a1 1 0 0 0 1 1h7" />
                </svg>
              ) : (
                <svg
                  onClick={() => onEdit(list.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="cursor-pointer shrink-0 hover:text-blue-500 transition-colors "
                >
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                </svg>
              )}
              <svg
                onClick={() => onCheck(list.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 24"
                fill={list.checked ? "#13d165" : "none"}
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="shrink-0 cursor-pointer hover:text-green-500 transition-colors "
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OutputField;
