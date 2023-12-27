import { useState } from 'react'
// mtu
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Grid from "@mui/material/Grid";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HeadphonesIcon from '@mui/icons-material/Headphones';
// mtu
import Book1 from '@/assets/images/Books/01.jpg'

const ListBooks = ({onChange} :any ) => {

  // const [item, setItem] = useState<string | null>();
  
  // const handleItem = (
  //   _event: React.MouseEvent<HTMLElement>,
  //   newItem: string | null,
  // ) => {
  //   setItem(newItem);
  // };
  
  return <>
    {Array.from(Array(5)).map((_, index) => (
      <Grid item xs={4} sm={4} md={2}>
        <Card variant="outlined" id="book-item">
          <>
            <CardMedia
              component="img"
              image={Book1}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body1" align="center">
                IELTS Book 2
              </Typography>
            </CardContent>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <ToggleButtonGroup
                value={index}
                exclusive
                sx={{ width: '100%', display: 'flex' }}
                onChange={onChange}
              >
                <ToggleButton value="01-writing">
                  <Badge color="success" badgeContent={3} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}>

                    <BorderColorIcon color="action" />
                  </Badge>
                </ToggleButton>
                <ToggleButton value="01-listening">
                  <Badge color="success" badgeContent={0} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}>

                    <HeadphonesIcon color="action" />
                  </Badge>
                </ToggleButton>
                <ToggleButton value="01-reading">
                  <Badge color="success" badgeContent={0} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}>
                    <LibraryBooksIcon color="action" />
                  </Badge>
                </ToggleButton>
              </ToggleButtonGroup>
            </CardContent>
          </>
        </Card>
      </Grid>
    ))}

  </>
};

export default ListBooks;