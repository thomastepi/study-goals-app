import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

export type GoalProps = {
    onDelete: (id: number) => void;
    id: number;
}

function Goal(props: CGoal & GoalProps) {
  return (
    <li key={props.id}>
      <CourseGoal title={props.title} onDelete={props.onDelete} id={props.id}>
        <p>{props.description}</p>
      </CourseGoal>
    </li>
  );
}

export default Goal;