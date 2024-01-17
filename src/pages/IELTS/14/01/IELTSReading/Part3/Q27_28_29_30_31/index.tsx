// mtu
import Stack from '@mui/material/Stack';
// mtu

import DragBox from "./DragBox";
import Q27 from "./Q27";
import Q28 from "./Q28";
import Q29 from "./Q29";
import Q30 from "./Q30";
import Q31 from "./Q31";

const index = () => {

  const items = [
    { title: "Pfeffer", },
    { title: "Lucas", },
    { title: "Maroudas et al", },
    { title: "Ng and Sorensen", },
    { title: "provide a handout", },
    { title: "Enz and Siguaw", },
    { title: "Deery", },
  ];

  return (
    <Stack
      direction="row"
      useFlexGap
      flexWrap="wrap"
    >
      <div>
        <Q27 qn={27} />
        <Q28 qn={28} />
        <Q29 qn={29} />
        <Q30 qn={30} />
        <Q31 qn={31} />
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


