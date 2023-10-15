
interface ProgressProps {
  current: number;
  total: number;
}
const Progress = ({ current, total }: ProgressProps) => {
  const currentIndex = current - 1;
  const items = Array(total).fill(0).map((_, index) => {
    return {
      index,
      active: index <= currentIndex,
    }
  });
  return (
    <div className="flex items-center gap-1 justify-center">
      {
        items.map(item => (
          <div
            key={item.index}
            className={`w-2 h-2 rounded-full border-2 border-slate-300 ${item.active ? 'bg-slate-300' : ''}`}
          />
        ))
      }
    </div>
  );
}

export default Progress;