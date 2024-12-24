"use client";

import { deleteTodo, updateTodo } from "@/api";
import { ITask } from "@/types/tasks";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import Modal from "./Modal";
import FormModal from "./FormModal";
import { useThemeContext } from "@/context/useThemeContext";

const TodoItem: React.FC<{ task: ITask }> = ({ task }) => {
  const [completed, setCompleted] = useState(() => task.completed);
  const [isPending, startTransition] = useTransition();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const router = useRouter();
  const {isDarkMode} = useThemeContext();

  const handleDeleteModal = async (id: string) => {
    if (isPending) return;

    startTransition(async () => {
      setOpenModalDelete(false);
      await deleteTodo(id);
      router.refresh();
    });
  };

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(async () => {
      const todo = await updateTodo({
        completed: !completed,
        text: task.text,
        id: task.id,
      });
      setCompleted(todo.completed);
      router.refresh();
    });
  };
  return (
    <tr key={task.id}>
      <th className="w-[10%]">
        <label>
          <input
            type="checkbox"
            className={`checkbox ${isDarkMode ? 'checkbox-warning' : 'checkbox-primary'}`}
            onChange={handleCheckboxClick}
            disabled={isPending}
            checked={completed}
          />
        </label>
      </th>
      <td
        className={`${
          task.completed
            ? "line-through text-slate-300 italic"
            : "text-slate-600"
        } w-full font-lg`}
      >
        {task.text}
      </td>
      <td className="flex flex-row gap-1 text-base">
        <FiEdit
          cursor={"pointer"}
          className="text-blue-500"
          size={24}
          onClick={() => setOpenModalEdit(true)}
        />
        {openModalEdit && (
          <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <FormModal
              setModalOpen={setOpenModalEdit}
              value={task.text}
              title="Update todo"
              type="Update"
              completed={task.completed}
              id={task.id}
            />
          </Modal>
        )}
        <FiTrash2
          cursor={"pointer"}
          className="text-red-500"
          size={24}
          onClick={() => setOpenModalDelete(true)}
        />
        {openModalDelete && (
          <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
            <div className="m-10 flex flex-col gap-5">
              <p className="text-blue-950 text-center text-lg">{`You you sure want to delete " ${task.text}" todo?`}</p>
              <button
                className="btn btn-warning"
                type="button"
                onClick={(e) => handleDeleteModal(task.id)}
              >
                Delete
              </button>
            </div>
          </Modal>
        )}
      </td>
    </tr>
  );
};

export default TodoItem;
