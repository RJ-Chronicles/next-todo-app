"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import FormModal from "./FormModal";
import { useThemeContext } from "@/context/useThemeContext";
const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {isDarkMode} = useThemeContext();
  return (
    <div>
      <button
        className={`btn ${isDarkMode ? 'btn-accent text-white': 'btn-primary'} w-full`}
        onClick={(e) => setModalOpen(true)}
      >
        Add new task
        <FaPlus size={18} className="ml-3" />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <FormModal setModalOpen={setModalOpen} value = "" title="Add new todo" type="Add" completed= {false}  id = {new Date().getTime().toString()}/>
      </Modal>
    </div>
  );
};

export default AddTask;
