"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IFormInput } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { taksContract } from "@/lib/getContract";

export default function TaskForm() {
  const { register, handleSubmit, getValues } = useForm<IFormInput>();

  const createTask: SubmitHandler<IFormInput> = async () => {
    const content = getValues("content");
    await taksContract.createTask(content);
  };

  return (
    <form
      className="grid w-full items-center gap-6"
      onSubmit={handleSubmit(createTask)}
    >
      <div className="grid gap-4">
        <Label htmlFor="task">Task</Label>
        <Input
          {...register("content")}
          type="task"
          id="task"
          placeholder="Add task..."
        />
      </div>
      <Button type="submit">Add task</Button>
    </form>
  );
}
