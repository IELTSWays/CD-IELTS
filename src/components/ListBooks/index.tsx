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

import useGetProducts from "@/services/Requests/useGetProducts"
import Book1 from '@/assets/images/Books/14.jpg'

const ListBooks = ({ onChange }: any) => {

  const [item, setItem] = useState<string | null>();

  const handleItem = (
    _event: React.MouseEvent<HTMLElement>,
    newItem: string | null,
  ) => {
    setItem(newItem);
  };

  console.log(item);
  

  const { data: allProducts } = useGetProducts()


  console.log(allProducts);

  const products = [
    {
      book: '14',
      type: "academic",
      test: 1,
      // img: Book1,
      tests: [
        {
          id: 'B14LT1',
          skill: 'listening',
          enable: true
        },
        {
          id: 'B14RT1',
          skill: 'reading',
          enable: true
        },
        {
          id: 'B14WT1',
          skill: 'writing',
          enable: true
        }
      ]
    },
    {
      book: '14',
      type: "academic",
      test: 2,
      // img: Book1,
      tests: [
        {
          id: 'B14LT2',
          skill: 'listening',
          enable: true
        },
        {
          id: 'B14RT2',
          skill: 'reading',
          enable: true
        },
        {
          id: 'B14WT2',
          skill: 'writing',
          enable: true
        }
      ]
    }
  ]
  
  return <>
    {/* {Array.from(Array(5)).map((_, index) => (
      <Grid item xs={4} sm={4} md={2}>
        <Card variant="outlined" id="book-item">
          <>
            <CardMedia
              component="img"
              // image={Book1}
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
                  <BorderColorIcon color="action" />
                </ToggleButton>

                <ToggleButton value="01-listening">
                  <HeadphonesIcon color="action" />
                </ToggleButton>

                <ToggleButton value="01-reading">
                  <LibraryBooksIcon color="action" />
                </ToggleButton>
              </ToggleButtonGroup>
            </CardContent>
          </>
        </Card>
      </Grid>
    ))} */}

    {products.map((i, index) => (
      <Grid item xs={4} sm={4} md={2}>
        <Card variant="outlined" id="book-item">
          <>
            <CardMedia
              component="img"
              image={i.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body1" align="center">
                {i.book}
              </Typography>
            </CardContent>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <ToggleButtonGroup
                value={item}
                exclusive
                sx={{ width: '100%', display: 'flex' }}
                onChange={handleItem}
              >
                {i.tests.map((j) => (
                  <ToggleButton value={j.id}>
                    <BorderColorIcon color="action" />
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