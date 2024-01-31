import { useState } from 'react'

// mtu
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import ToggleButton from '@mui/material/ToggleButton';
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

  const handleItem = (
    _event: React.MouseEvent<HTMLElement>,
    newItem: string | null,
  ) => {
    setItem(newItem);
    dispatch(setCart(Object.assign({}, cart, { 'id': newItem })))
  };
  
  return <>

    {List.data.map((i) => (
      <Grid item xs={4} sm={4} md={2}>
        <Card variant="outlined" id="book-item">
          <>
            <CardMedia
              component="img"
              image={`/Books/${i.book}.jpg`}
              alt={'book' + i.book}
            />
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