import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import Goal from "./components/Goal";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const updatedGoals: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, updatedGoals];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }
  
    return (
      <main>
        <Header image={{ src: goalsImage, alt: "List of goals" }}>
          <h2>Course Goals</h2>
        </Header>
        <NewGoal onAddGoal={handleAddGoal} />
        <ul>
          {goals.map((goal) => (
            <Goal
              onDelete={handleDeleteGoal}
              key={goal.id}
              id={goal.id}
              title={goal.title}
              description={goal.description}
            />
          ))}
        </ul>
      </main>
    );
  }

