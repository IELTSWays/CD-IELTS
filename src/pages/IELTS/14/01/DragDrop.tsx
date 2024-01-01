import { useState } from "react";
import { useDrop } from "react-dnd";
import { useTranslation } from 'react-i18next';
// mtu
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// mtu
import QDragBox from "@/components/IELTS/QDragBox/index";
import DragInitBox from "@/components/IELTS/QDragBox/DragInitBox";

const DND = () => {
  const { t } = useTranslation();

  const [allOptions, setAllOptions] = useState({
    "1": { id: 1, title: t('00071'), },
    "2": { id: 2, title: t('00072'), },
    "3": { id: 3, title: t('00073'), },
  });

  const [q26, setQ26] = useState([]);
  const [q27, setQ27] = useState([]);
  const [q28, setQ28] = useState([]);
  const [q29, setQ29] = useState([]);
  const [q30, setQ30] = useState([]);

  // 26
  const [{ }, dropQ26] = useDrop(() => ({
    accept: "ali",
    drop: (item) => {
      console.log("item drop", item);
      setQ26((): any => [item]);

      const temp = { ...allOptions }
      const asArray = Object.entries(temp);
      const filtered = asArray.filter(([key, value]) => value.id !== item.id);
      const justStrings: any = Object.fromEntries(filtered);
      console.log(justStrings);
      setAllOptions(justStrings)
      console.log('[allOptions]', allOptions);
    },
  }));

  // 27
  const [{ }, dropQ27] = useDrop(() => ({
    accept: "ali",
    drop: (item) => {
      console.log("item drop", item);
      setQ27((): any => [item]);

      const temp = { ...allOptions }
      const asArray = Object.entries(temp);
      const filtered = asArray.filter(([key, value]) => value.id !== item.id);
      const justStrings: any = Object.fromEntries(filtered);
      console.log(justStrings);
      setAllOptions(justStrings)
      console.log('[allOptions]', allOptions);
    },
  }));

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: '350px' }}>
        <Typography><strong> DROG - DROP </strong></Typography>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            sx={{ alignItems: 'center' }}
            ref={dropQ26}
          >
            <Paper elevation={0} sx={{ height: '60px', display: 'flex', alignItems: 'center' }}>
              <Typography>Lorem, ipsum dolor.</Typography>
            </Paper>
            <Paper elevation={0}>
              {!q26.length && (' 26 ') }
              {q26.map((i, index) => {
                return (
                  <Paper
                    key={index}
                    elevation={0}
                    className="ielts-dragbox active"
                    sx={{ p: 0.5, my: 1.5, cursor: 'pointer' }}>
                    {i.title}
                  </Paper>
                )
              })}
            </Paper>
          </Stack>


          <div
            ref={dropQ27}
          >
            <div className="d-flex">
              2 -
              {q27.map((i, index) => {
                return (
                  <div key={index}>
                    {i.title}
                  </div>
                );
              })}
            </div>
          </div>
        </Box>

        <ul>
          <p>Drag box</p>
          {Object.keys(allOptions).map((key) => {
            const item: any = allOptions[key];
            return <QDragBox item={item} tag="ali" />;
          })}
        </ul>
      </div>
    </>
  );
};

export default DND;