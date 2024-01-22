import React, { createRef, useEffect, useState } from "react";

// mtu
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// mtu

const MIN_WIDTH = 75;

interface SplitViewProps {
  left: React.ReactElement;
  right: React.ReactElement;
  className?: string;
}

const LeftPane: React.FunctionComponent<{
  leftWidth: number | undefined;
  setLeftWidth: (value: number) => void;
}> = ({ children, leftWidth, setLeftWidth }) => {
  const leftRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (leftRef.current) {
      if (!leftWidth) {
        setLeftWidth(leftRef.current.clientWidth);
        return;
      }

      leftRef.current.style.width = `${leftWidth}px`;
    }
  }, [leftRef, leftWidth, setLeftWidth]);

  return <div ref={leftRef}>{children}</div>;
};

export const SplitView: React.FunctionComponent<SplitViewProps> = ({
  left,
  right,
  className
}) => {
  const [leftWidth, setLeftWidth] = useState<undefined | number>(900);
  const [separatorXPosition, setSeparatorXPosition] = useState<
    undefined | number
  >(undefined);
  const [dragging, setDragging] = useState(false);

  const splitPaneRef = createRef<HTMLDivElement>();

  const onMouseDown = (e: React.MouseEvent) => {
    setSeparatorXPosition(e.clientX);
    setDragging(true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setSeparatorXPosition(e.touches[0].clientX);
    setDragging(true);
  };

  const onMove = (clientX: number) => {
    if (dragging && leftWidth && separatorXPosition) {
      const newLeftWidth = leftWidth + clientX - separatorXPosition;
      setSeparatorXPosition(clientX);

      if (newLeftWidth < MIN_WIDTH) {
        setLeftWidth(MIN_WIDTH);
        return;
      }

      if (splitPaneRef.current) {
        const splitPaneWidth = splitPaneRef.current.clientWidth;

        if (newLeftWidth > splitPaneWidth - MIN_WIDTH) {
          setLeftWidth(splitPaneWidth - MIN_WIDTH);
          return;
        }
      }

      setLeftWidth(newLeftWidth);
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    onMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    onMove(e.touches[0].clientX);
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  React.useEffect(() => {
    document.getElementById('divider')?.addEventListener("mousemove", onMouseMove);
    document.getElementById('divider')?.addEventListener("touchmove", onTouchMove);
    document.getElementById('divider')?.addEventListener("mouseup", onMouseUp);

    return () => {
      document.getElementById('divider')?.removeEventListener("mousemove", onMouseMove);
      document.getElementById('divider')?.removeEventListener("touchmove", onTouchMove);
      document.getElementById('divider')?.removeEventListener("mouseup", onMouseUp);
    };
  });

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleMouseUp = () => {
  //   console.log(`[Selected text] ${window.getSelection().toString()}`);
  // }

  const handleClose = () => {
    setInterval(() => setOpen(false), 3000)
  };

  const handleMouseUp = () => {
    const selection = window.getSelection();

    if (!selection || selection.anchorOffset === selection.focusOffset) {
      handleClose();
      return;
    }

    const getBoundingClientRect = () =>
      selection.getRangeAt(0).getBoundingClientRect();

    setOpen(true);
    setAnchorEl({
      getBoundingClientRect,
    });
  };

  const id = open ? 'virtual-element-popper' : undefined;


  return (
    <div className={`splitView ${className ?? ""}`} ref={splitPaneRef}>
      <LeftPane leftWidth={leftWidth} setLeftWidth={setLeftWidth}>
        <span onMouseLeave={handleClose}>
          <span aria-describedby={id} onMouseUp={handleMouseUp} className="highlight">
            {left}
          </span>
        </span>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          placement="bottom-end"
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
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
            </Fade>
          )}
        </Popper>
      </LeftPane>
      <div
        className="divider-hitbox"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
      >
        <div className="divider" id="divider" />
      </div>
      <div className="rightPane">{right}</div>
    </div>
  );
};
