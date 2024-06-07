import { taksContract } from "@/lib/getContract";
import { ITask } from "@/types";
import { useState, useEffect } from "react";
import { Checkbox } from "./ui/checkbox";

export default function TaskList() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const showTasks = async () => {
    const taskCount = await taksContract.taskCount();
    console.log(taskCount);
    let tasks: ITask[] = [];
    for (var i = 1; i <= taskCount; i++) {
      const task = await taksContract.tasks(i);
      const taskId = task[0].toNumber();
      const taskContent = task[1];
      const taskCompleted = task[2];

      tasks.push({
        id: taskId,
        content: taskContent,
        completed: taskCompleted,
      });
    }
    setTasks(tasks);
  };

  const toggleCompleted = async (taskId: number) => {
    await taksContract.toggleCompleted(taskId);
  };

  useEffect(() => {
    showTasks();
  }, []);
  console.log(tasks);

  return (
    <ul className="grid gap-4 w-full">
      {tasks.map((task) => (
        <li key={task.id} className="py-2 shadow px-2 flex items-center gap-2">
          <Checkbox
            onClick={() => toggleCompleted(task.id)}
            checked={task.completed}
          />
          <span className={`${task.completed && "line-through text-gray-400"}`}>
            {task.content}
          </span>
        </li>
      ))}
    </ul>
  );
}
