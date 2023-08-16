"use client";

import { BlockType } from "@/types/main";
import { Story } from "@/components/Blocks";
import { Prose } from "@/components/Ui";

interface BlockRendererProps {
  block: BlockType;
}

function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case "story":
      return <Story block={block} />;
    default:
      return <div className="py-4">Placeholder: {block.name}</div>;
  }
}

export default BlockRenderer;
