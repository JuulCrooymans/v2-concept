import { twMerge } from "tailwind-merge";

interface ProseProps {
  children: string;
  removeStyles?: boolean;
  className?: string;
}

function Prose() {
  return <></>;
}

Prose.h1 = function H1({ children, className, removeStyles }: ProseProps) {
  if (removeStyles) {
    return <h1 className={className}>{children}</h1>;
  }

  return (
    <h1 className={twMerge("text-3xl text-blue-500", className)}>{children}</h1>
  );
};

export default Prose;
