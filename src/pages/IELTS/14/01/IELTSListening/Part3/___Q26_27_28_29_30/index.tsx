// mtu
import Stack from '@mui/material/Stack';
// mtu

import DragBox from "./DragBox";
import Q26 from "./Q26";
import Q27 from "./Q27";
import Q28 from "./Q28";
import Q29 from "./Q29";
import Q30 from "./Q30";

const index = () => {

  const items = [
    { title: "use visuals", },
    { title: "keep it short", },
    { title: "involve other students", },
    { title: "check the information is accurate", },
    { title: "provide a handout", },
    { title: "focus on one example", },
    { title: "do online research", },
  ];

  return (
    <Stack
      direction="row"
      useFlexGap
      flexWrap="wrap"
    >
      <div>
        <Q26 qn={26} />
        <Q27 qn={27} />
        <Q28 qn={28} />
        <Q29 qn={29} />
        <Q30 qn={30} />
      </div>
      <div className="dragbox-container" style={{ width: '460px' }}>
        {items.map((i) => {
          return (
            <ul>
              <DragBox item={i} />
            </ul>
          )
        })}
      </div>
    </Stack>);
};

export default index;


