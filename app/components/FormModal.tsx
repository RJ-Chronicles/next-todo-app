"use client";

import { addTodo, updateTodo } from "@/api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface FormModalProps {
  title: string;
  value: string;
  type: "Add" | "Update";
  setModalOpen: (value: boolean) => void;
  completed: boolean;
  id: string;
}
const FormModal: React.FC<FormModalProps> = ({
  title,
  setModalOpen,
  value,
  type,
  id,
  completed,
}) => {
  const [currentValue, setCurrentValue] = useState(() => value);
  const router = useRouter();

  const handleSubmitTodo: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    if (currentValue.trim().length === 0) return;
    const todo = {
      id,
      completed,
      text: currentValue,
    };
    if (type === "Add") await addTodo(todo);
    if (type === "Update") await updateTodo(todo);
    setCurrentValue("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmitTodo}>
      <h3 className="font-bold text-lg"> {title}</h3>
      <div className="modal-action">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-full"
          onChange={(e) => setCurrentValue(e.target.value)}
          value={currentValue}
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormModal;
