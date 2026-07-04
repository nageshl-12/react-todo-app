import { useState, useEffect } from "react";
import InputField from "./InputField";
import OutputField from "./OutputField";
import Footer from "./Footer";

const TodoApp = () => {
  // const [editToggle, setEditToggle] = useState(false);
  const [input, setInput] = useState("");
  const [list, setList] = useState(() => {
    {
      const items = JSON.parse(localStorage.getItem("listItems"));
      return items || [];
    }
  });

  const handleAdd = () => {
    if (!input.trim()) return;
    setList((prev) => [
      ...prev,
      { id: Date.now(), text: input, checked: false, edit: false },
    ]);
    setInput("");
  };

  const handleDelete = (id) => {
    setList(list.filter((list) => list.id !== id));
  };

  const handleClear = () => {
    setList([]);
  };

  const handleCheck = (id) => {
    setList(
      list.map((items) =>
        items.id === id ? { ...items, checked: !items.checked } : items,
      ),
    );
  };

  const handleEdit = (id) => {
    setList(
      list.map((items) =>
        items.id === id ? { ...items, edit: !items.edit } : items,
      ),
    );
  };

  const handleOnedit = (id, editedText) => {
    setList(
      list.map((items) =>
        items.id === id ? { ...items, text: editedText } : items,
      ),
    );
  };

  useEffect(
    function () {
      localStorage.setItem("listItems", JSON.stringify(list));
    },
    [list],
  );

  return (
    <div className="flex flex-col bg-white border border-[rgba(0,0,0,0.3)] h-150 w-200 p-6 mt-8 items-center rounded-2xl gap-4 scale-50 md:scale-100 hover:shadow-[0_12px_26px_rgba(0,0,255,0.3)]">
      <InputField
        input={input}
        setInput={setInput}
        onAdd={handleAdd}
        onClear={handleClear}
      />
      <OutputField
        list={list}
        onDelete={handleDelete}
        onCheck={handleCheck}
        onEdit={handleEdit}
        setInput={setInput}
        onValueChange={handleOnedit}
      />
      <Footer list={list} />
    </div>
  );
};

export default TodoApp;
