import { SquarePen, Trash, SaveCheck, CircleCheckBig } from "lucide-react";

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

              <Trash
                size={21}
                onClick={() => onDelete(list.id)}
                className="shrink-0 cursor-pointer hover:text-red-500 transition-colors "
              />

              {list.edit ? (
                <SaveCheck
                  size={21}
                  className="cursor-pointer shrink-0 hover:text-blue-500 transition-colors "
                  onClick={() => onEdit(list.id)}
                />
              ) : (
                <SquarePen
                  size={21}
                  onClick={() => onEdit(list.id)}
                  className="hover:text-blue-500 transition-colors shrink-0 cursor-pointer"
                />
              )}
              <CircleCheckBig
                className="shrink-0 cursor-pointer hover:text-green-500 transition-colors "
                size={21}
                onClick={() => onCheck(list.id)}
              />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OutputField;
