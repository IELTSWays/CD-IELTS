import React, { useEffect, useRef } from "react";

import * as Selection from 'selection-popover';
import Splitter from "./Splitter";
import { useResizable } from "react-resizable-layout";
import { cn } from "./cn";
import "./style.css";
import SelectionIndexesComponent from './SelectionIndexesComponent'

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

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

  document.onmouseup = () => {
    console.log(window.getSelection().toString());
  };


  const containerRef = useRef(null);

  useEffect(() => {
    function handleMouseUp() {
      const selectionIndexes = SelectionIndexesComponent(containerRef.current);
      if (selectionIndexes) {
        console.log("Start Index:", selectionIndexes.startIndex);
        console.log("End Index:", selectionIndexes.endIndex);
      }
    }

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="flex flex-column h-screen overflow-hidden">
      <div className="flex grow">
        <div
          className={cn("shrink-0 contents", isFileDragging && "dragging")}
          style={{ width: fileW }}
        >
          <Selection.Root>
            <Selection.Trigger>
              {left}
            </Selection.Trigger>
            <Selection.Portal>
              <Selection.Content className="SelectionContent">
                <Paper className="highlight-items"
                >
                  <div>
                    <FormatQuoteIcon />
                    <Typography> Note </Typography>
                  </div>
                  <div>
                    <BorderColorIcon />
                    <Typography> highlight </Typography>
                  </div>
                </Paper>
              </Selection.Content>
            </Selection.Portal>
          </Selection.Root>
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