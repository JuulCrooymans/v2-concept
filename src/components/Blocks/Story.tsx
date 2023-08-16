"use client";

import type { BlockType } from "@/types/main";
import { Prose } from "@/components/Ui";
import { useCount } from "@/context/count";

interface StoryProps {
  block: BlockType;
}

function Story({ block }: StoryProps) {
  const { count, setCount } = useCount();

  return (
    <div className="py-4">
      <Prose.h1 defaulStyles>test</Prose.h1>
      <button
        className="bg-gray-100 rounded-md px-4 py-2 tabular-nums"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  );
}

export default Story;
