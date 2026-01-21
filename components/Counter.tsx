'use client';

import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import { increment, decrement, incrementByAmount, reset } from '@/lib/store/features/counterSlice';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-4 p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800">
      <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-50">
        Counter Example
      </h2>

      <div className="text-6xl font-bold text-center text-zinc-900 dark:text-zinc-50">
        {count}
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors font-medium"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors font-medium"
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors font-medium"
        >
          Add 5
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-zinc-500 hover:bg-zinc-600 text-white rounded-md transition-colors font-medium"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
