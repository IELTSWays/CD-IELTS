import { useRef } from 'react'
import { useDrag } from "react-dnd";

// mtu
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// mtu

const DragBox = (props: any) => {

  const { item } = props;
  const ref = useRef(null);
  const [{ isDragging }, drag, drop] = useDrag(() => ({
    type: "ielts",
    item: props.item,
    collect(monitor) {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));
  if (isDragging) {
    return null;
  }
  drag(drop(ref))

  return (
    <Box ref={ref}>
      <Paper elevation={0} className="ielts-dragbox" sx={{ p: 0.5, my: 1.5 }}>
        {item.title}
      </Paper>
    </Box>
  );
};

export default DragBox;