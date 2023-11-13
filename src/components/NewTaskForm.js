// NewTaskForm.js
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure taskText is not empty before submitting
    if (taskText.trim() === "") {
      return;
    }

    // Create a new task object
    const newTask = {
      id: Date.now(), // Using timestamp as a simple unique identifier
      text: taskText,
      category: selectedCategory,
    };

    // Call the callback prop to submit the new task
    onTaskFormSubmit(newTask);

    // Reset form inputs
    setTaskText("");
    setSelectedCategory(categories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
