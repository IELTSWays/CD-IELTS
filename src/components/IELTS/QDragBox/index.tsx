import { useDrag } from "react-dnd";

// mtu
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// mtu

const index = (props: any) => {
  const { item, tag } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: tag,
    item: props.item,
    collect(monitor) {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));
  if (isDragging) {
    console.log('isDragging', item);
    return null;
  }
  return (
    <Box ref={drag} >
      <Paper elevation={0} className="ielts-dragbox" sx={{  p: 0.5, my: 1.5, cursor: 'pointer' }}>
        {item.title}
      </Paper>
    </Box>
  );
};

export default index;

