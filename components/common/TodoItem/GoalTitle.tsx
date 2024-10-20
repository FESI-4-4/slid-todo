import IconGoal from '@/public/icons/IconGoal';
import { Goal } from '.';

const GoalTitle = ({ goal }: { goal: Goal }) => {
  return (
    <div className='flex gap-x-1.5 ml-8 cursor-pointer hover:underline'>
      <IconGoal />
      {goal.title}
    </div>
  );
};

export default GoalTitle;
