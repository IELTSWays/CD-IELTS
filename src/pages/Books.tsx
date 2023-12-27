import { useState } from 'react'
// mtu
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
// mtu
import ListBooks from "@/components/ListBooks";
import SkillsGuide from "@/components/SkillsGuide";
import iconAI from '@/assets/images/artificial-intelligence.gif'

const Books = () => {

  const [item, setItem] = useState<string | null>();
  const [marker, setMarker] = useState('ai');

  const handleItem = (
    _event: React.MouseEvent<HTMLElement>,
    newItem: string | null,
  ) => {
    setItem(newItem);
  };

  const listMarkers = [
    { id: 1, name: 'Mahdi Mohammadi' },
    { id: 2, name: 'Samane Naderi' },
    { id: 3, name: 'Reza Mohseni' },
    { id: 4, name: 'Sepide Shakiba' },
    { id: 5, name: 'Vahid Hadavi' },
  ]

  // console.log(marker);

  return (
    <>
      <Grid sx={{ py: 3 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item>
          <SkillsGuide />
        </Grid>
      </Grid>
      <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <ListBooks onChange={handleItem} />
        </Grid>
      </Grid>

      {/* select marker */}
      <Card variant="outlined" sx={{ py: 3, px: 2 }}>
        <Grid sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar sx={{ bgcolor: red[700] }}>
            <DriveFileRenameOutlineIcon />
          </Avatar>
          <Typography display="block" sx={{ px: 1, minWidth: '200px' }}> Select Marker </Typography>
        </Grid>
        <Grid sx={{ py: 3, px: 1 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: "center", sm: "flex-start" } }}>
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              flexWrap="wrap"
              sx={{
                mx: 1, cursor: 'pointer',
              }}
            >
              <Paper
                variant="outlined"
                id="ai"
                onClick={(e: any) => setMarker(e.currentTarget.id)}
                className={'ai' == marker && "active-box-marker"}
                sx={{
                  my: 1,
                  mx: 'auto',
                  p: 2,
                  "&:hover": {
                    backgroundColor: "#f5faff",
                    borderColor: "#1976d2",
                  },
                }}
              >
                <Stack spacing={2} direction="row" alignItems="center">
                  <Stack>
                    <Avatar src={iconAI}>W</Avatar>
                  </Stack>
                  <Stack sx={{ minWidth: '150px' }}>
                    <Typography>AI</Typography>
                  </Stack>
                  <IconButton id="ai" onClick={(e: any) => console.log(e.currentTarget.id)}>
                    <ChevronRightIcon />
                  </IconButton>
                </Stack>
              </Paper>
            </Stack>
          </Box>

          {listMarkers.map((i) => {
            return (
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                sx={{
                  mx: 1, cursor: 'pointer',
                  width: { xs: "100%", sm: "unset" }
                }}
              >
                <Paper
                  variant="outlined"
                  id={i.id}
                  onClick={(e: any) => setMarker(e.currentTarget.id)}
                  className={i.id == marker && "active-box-marker"}
                  sx={{
                    my: 1,
                    mx: 'auto',
                    p: 2,

                    "&:hover": {
                      backgroundColor: "#f5faff",
                      borderColor: "#1976d2",
                    },
                  }}
                >
                  <Stack spacing={2} direction="row" alignItems="center"
                  >
                    <Stack>
                      <Avatar>M</Avatar>
                    </Stack>
                    <Stack sx={{ minWidth: '150px' }}>
                      <Typography>{i.name}</Typography>
                    </Stack>
                    <IconButton id={i.id} onClick={(e: any) => console.log(e.currentTarget.id)}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </Stack>
                </Paper>
              </Stack>
            )
          })}
        </Grid>
      </Card>



      <Grid sx={{ py: 3, pr: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="success" sx={{ width: { xs: "100%", md: "auto" } }}>
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Books;