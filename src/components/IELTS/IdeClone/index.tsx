import React, { useEffect, useRef, useState } from "react";

import * as Selection from 'selection-popover';
import Splitter from "./Splitter";
import { useResizable } from "react-resizable-layout";
import { cn } from "./cn";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setSidebar } from '@/store/slices/user/userSlice'
// store

interface IdeCloneProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const IdeClone = ({ left, right }: IdeCloneProps): JSX.Element => {

  const dispatch = useAppDispatch();
  const sidebar = useAppSelector((state: any) => state.user.sidebar)

  const {
    isDragging: isFileDragging,
    position: fileW,
    splitterProps: fileDragBarProps
  } = useResizable({
    axis: "x",
    initial: 750,
    min: 200
  });

  const containerRef = useRef(null);
  const [selectionIndexes, setSelectionIndexes] = useState<{ startIndex: number, endIndex: number } | null>(null);

  const [showDeleteBox, setShowDeleteBox] = useState(false)

  useEffect(() => {
    function getSelectionIndexes(containerNode: Node | null | undefined) {
      const sel = window.getSelection();
      if (sel?.rangeCount === 0) {
        return null;
      }

      const range = sel?.getRangeAt(0);
      const startNode = range?.startContainer;
      const endNode = range?.endContainer;
      let startIndex = range?.startOffset;
      let endIndex = range?.endOffset;

      let currentIndex = 0;
      let startFound = false;
      let endFound = false;

      function traverse(node: Node | undefined) {
        if (node === startNode) {
          startFound = true;
        }
        if (node === endNode) {
          endFound = true;
        }

        if (node?.nodeType === Node?.TEXT_NODE) {
          dispatch(setSidebar(Object.assign({}, sidebar, { 'text': window.getSelection().toString() })))
          if (node === startNode && !startFound) {
            startIndex += currentIndex;
          }
          if (node === endNode && !endFound) {
            endIndex += currentIndex;
          }
          currentIndex += node.textContent?.length;
        } else {
          for (let i = 0; i < node?.childNodes.length; i++) {
            traverse(node?.childNodes[i]);
          }
        }
      }

      traverse(containerNode);

      return { startIndex, endIndex };
    }

    function handleMouseUp(event: { target: { closest: (arg0: string) => any; }; }) {
      if (!event.target.closest('.left')) return;

      const selectionIndexes = getSelectionIndexes(containerRef?.current);
      setSelectionIndexes(selectionIndexes);
      if (selectionIndexes) {
        console.log("Start Index:", selectionIndexes?.startIndex);
        console.log("End Index:", selectionIndexes?.endIndex);
        dispatch(setSidebar(Object.assign({}, sidebar, { 'isOpen': '0' })));
      }
      if (window.getSelection().toString()?.length) {
        dispatch(setSidebar(Object.assign({}, sidebar, { 'text': window.getSelection().toString() })));
      }
    }

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dispatch, sidebar]);

  useEffect(() => {
    function addStyleToSelection() {
      const sel = window.getSelection();
      if (sel?.rangeCount) {
        const range = sel?.getRangeAt(0);
        const span = document.createElement('span');
        span.className = 'selected-text';
        if (sidebar?.type == 1) {
          span.style.backgroundColor = '#40AFA1';
          span.id = 'selected-note';
          dispatch(setSidebar(Object.assign({}, sidebar, { 'type': "0" })));
        }
        if (sidebar?.type == 2) {
          span.style.backgroundColor = 'gold';
          span.id = 'selected-highlight';
          dispatch(setSidebar(Object.assign({}, sidebar, { 'type': "0" })));
        }
        range?.surroundContents(span);
      }
    }

    addStyleToSelection();
  }, [selectionIndexes, sidebar]);

  const handleNoteClick = () => {
    dispatch(setSidebar(Object.assign({}, sidebar, { 'type': "1", 'isOpen': '1' })));
    const selectedNoteSpan = document.getElementById('selected-note');
    if (selectedNoteSpan) {
      selectedNoteSpan.style.backgroundColor = '#40AFA1';
    }
  };

  const handleHighlightClick = () => {
    dispatch(setSidebar(Object.assign({}, sidebar, { 'type': "2", 'isOpen': '0' })));
    const selectedHighlightSpan = document.getElementById('selected-highlight');
    if (selectedHighlightSpan) {
      selectedHighlightSpan.style.backgroundColor = 'gold';
    }
  };

  document.querySelector('.selected-text#selected-highlight')?.addEventListener('click', () => setShowDeleteBox(true));

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
                <Paper className="highlight-items">
                  <div
                    onClick={handleNoteClick}
                  >
                    <FormatQuoteIcon />
                    <Typography> Note </Typography>
                  </div>
                  <div
                    onClick={handleHighlightClick}
                  >
                    <BorderColorIcon />
                    <Typography> Highlight </Typography>
                  </div>
                </Paper>
              </Selection.Content>
            </Selection.Portal>
          </Selection.Root>
        </div>
        <Splitter isDragging={isFileDragging} {...fileDragBarProps} />
        <div className="flex grow">
          <div className="grow contents left" ref={containerRef}>
            {right}
          </div>
        </div>
      </div>
      {selectionIndexes && (
        <div>
          Start Index: {selectionIndexes.startIndex}
          <br />
          End Index: {selectionIndexes.endIndex}
        </div>
      )}
    </div>
  );
};

export default React.memo(IdeClone);