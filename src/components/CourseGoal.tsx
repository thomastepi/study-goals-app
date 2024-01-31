import { type PropsWithChildren } from "react";
import { GoalProps } from "./Goal";

type CourseGoalProps = PropsWithChildren<{title: string}>

export default function CourseGoal({title, children, onDelete, id}: CourseGoalProps & GoalProps) {
  const handleDelete = () => {
    onDelete(id);
  };

  return <article>
    <div>
        <h2>{title}</h2>
        {children}
    </div>
    <button onClick={handleDelete}>
        Delete Goal
    </button>
  </article>;
}