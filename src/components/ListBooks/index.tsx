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

import useGetProducts from "@/services/Requests/useGetProducts"
import Book17 from '@/assets/images/Books/academic_17_vaziri.jpg'
import Book18 from '@/assets/images/Books/academic_18_vaziri.jpg'

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
  console.log(item);

  const { data: allProducts } = useGetProducts()
  console.log(allProducts);

  const products = [
    {
      book: '17',
      type: "Academic",
      test: 1,
      img: Book17,
      tests: [
        {
          id: 'B17LT1',
          skill: 'listening',
          enable: true
        },
        {
          id: 'B17RT1',
          skill: 'reading',
          enable: true
        },
        {
          id: 'B17WT1',
          skill: 'writing',
          enable: false
        }
      ]
    },
    {
      book: '17',
      type: "Academic",
      test: 2,
      img: Book17,
      tests: [
        {
          id: 'B17LT2',
          skill: 'listening',
          enable: true
        },
        {
          id: 'B17RT2',
          skill: 'reading',
          enable: true
        },
        {
          id: 'B17WT2',
          skill: 'writing',
          enable: true
        }
      ]
    },
    {
      book: '17',
      type: "Academic",
      test: 3,
      img: Book17,
      tests: [
        {
          id: 'B17LT3',
          skill: 'listening',
          enable: true
        },
        {
          id: 'B17RT3',
          skill: 'reading',
          enable: true
        },
        {
          id: 'B17WT3',
          skill: 'writing',
          enable: true
        }
      ]
    },
    {
      book: '17',
      type: "Academic",
      test: 4,
      img: Book17,
      tests: [
        {
          id: 'B17LT4',
          skill: 'listening',
          enable: true
        },
        {
          id: 'B17RT4',
          skill: 'reading',
          enable: true
        },
        {
          id: 'B17WT4',
          skill: 'writing',
          enable: true
        }
      ]
    },
    {
      book: '18',
      type: "Academic",
      test: 1,
      img: Book18,
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
      book: '18',
      type: "Academic",
      test: 2,
      img: Book18,
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
    },
    {
      book: '18',
      type: "Academic",
      test: 3,
      img: Book18,
      tests: [
        {
          id: 'B14LT3',
          skill: 'listening',
          enable: true
        },
        {
          id: 'B14RT3',
          skill: 'reading',
          enable: true
        },
        {
          id: 'B14WT3',
          skill: 'writing',
          enable: true
        }
      ]
    },
    {
      book: '18',
      type: "Academic",
      test: 4,
      img: Book18,
      tests: [
        {
          id: 'B14LT4',
          skill: 'listening',
          enable: true
        },
        {
          id: 'B14RT4',
          skill: 'reading',
          enable: true
        },
        {
          id: 'B14WT4',
          skill: 'writing',
          enable: true
        }
      ]
    }
  ]

  return <>

    {products.map((i) => (
      <Grid item xs={4} sm={4} md={2}>
        <Card variant="outlined" id="book-item">
          <>
            <CardMedia
              component="img"
              image={i.img}
              alt="green iguana"
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