import React from "react";
import Splitter from "./Splitter";
import { useResizable } from "react-resizable-layout";
import { cn } from "./cn";
import "./style.css";

interface IdeCloneProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const IdeClone = ({ left, right }: IdeCloneProps): JSX.Element => {

  const {
    isDragging: isFileDragging,
    position: fileW,
    splitterProps: fileDragBarProps
  } = useResizable({
    axis: "x",
    initial: 750,
    min: 200
  });

  return (
    <div className="flex flex-column h-screen overflow-hidden">
      <div className="flex grow">
        <div
          className={cn("shrink-0 contents", isFileDragging && "dragging")}
          style={{ width: fileW }}
        >
          {left}
        </div>
        <Splitter isDragging={isFileDragging} {...fileDragBarProps} />
        <div className="flex grow">
          <div className="grow contents">
            {right}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(IdeClone);