import { useState } from 'react'

// mtu
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import ToggleButton from '@mui/material/ToggleButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HeadphonesIcon from '@mui/icons-material/Headphones';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCart } from '@/store/slices/user/userSlice'
// store

import List from '@/pages/Products/List.json'

const ListBooks = () => {

  const dispatch = useAppDispatch()

  const cart = useAppSelector((state) => state.user.cart)

  const [item, setItem] = useState<string | null>();
  const [coverBook, setCoverBook] = useState(true);
  const [filter, setFilter] = useState('All');

  const handleAlignment = (event, newAlignment) => {
    setFilter(newAlignment);
  };

  const handleItem = (
    _event: React.MouseEvent<HTMLElement>,
    newItem: string | null,
  ) => {
    setItem(newItem);
    dispatch(setCart(Object.assign({}, cart, { 'id': newItem })))
  };

  const handleChange = (event: any) => {
    setCoverBook(event.target.checked);
  };

  return <>

    <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 3 }}>

      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="All">
          ALL
        </ToggleButton>
        <ToggleButton value="Academic">
          Academic
        </ToggleButton>
        <ToggleButton value="General">
          General
        </ToggleButton>
      </ToggleButtonGroup>

      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={coverBook}
              onChange={handleChange}
              defaultChecked
            />
          }
          label="Show Cover Books"
        />
      </FormGroup>
    </Grid>

    {(filter == 'All' ? List.data : List.data.filter(i => i.type === filter)).map((i) => (
      <Grid item xs={4} sm={4} md={2}>
        <Card variant="outlined" id="book-item">
          <>
            {coverBook &&
              <CardMedia
                component="img"
                image={`/Books/${i.type}/${i.book}.jpg`}
                alt={'book' + i.book}
              />
            }
            <CardContent>
              <Typography variant="body1" align="center" className="justify-content-space-between uppercase">
                <div>ielts {i.book}</div>
                <div>test {i.test}</div>
              </Typography>
              <Typography variant="body2" align="center">
                ({i.type})
              </Typography>
            </CardContent>
            <CardContent className="justify-content-space-between">
              <ToggleButtonGroup
                value={item}
                exclusive
                sx={{ width: '100%', display: 'flex' }}
                onChange={handleItem}
              >
                {i.tests.map((j) => (
                  <ToggleButton value={j.id} disabled={!j.enable}>
                    {j.skill === 'listening' && <HeadphonesIcon color="action" />}
                    {j.skill === 'reading' && <LibraryBooksIcon color="action" />}
                    {j.skill === 'writing' && <BorderColorIcon color="action" />}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </CardContent>
          </>
        </Card>
      </Grid>
    ))}
  </>
};

export default ListBooks;