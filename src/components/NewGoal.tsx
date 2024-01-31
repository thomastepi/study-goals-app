import React, { useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>

      <p>
        <label>Short Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>

      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
