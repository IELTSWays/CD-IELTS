import { useState, useEffect, forwardRef } from "react";

// mtu
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import Turn from '@mui/icons-material/TurnedIn';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { green } from '@mui/material/colors';
import TextField from "@mui/material/TextField";
// mtu

import DateObject from "react-date-object";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";

import useGetOrders from '@/services/Requests/useGetOrders';
import useGetOrdersWriting from "@/services/Requests/useGetOrdersWriting";
import useGetOrdersSpeaking from "@/services/Requests/useGetOrdersSpeaking"

import useGetZarinpal from '@/services/Requests/useGetZarinpal';
import usePostManualPayment from '@/services/Requests//usePostManualPayment';

import iBankMellat from '@/assets/images/bank-mellat.svg'

const items = [
  { title: 'Book5 IELTS General', icon: <AssignmentIcon /> },
  { title: 'Reading', icon: <Turn /> },
  { title: '1,200,000 IRR', icon: <PaymentsIcon /> },
  { title: '25-09-2023', icon: <CalendarMonthIcon /> },
]

const paymentInformation = [
  { title: '14/10/2023 10:12 ', icon: <CreditScoreIcon /> },
  { title: '10/09/1402 10:12 ', icon: <CreditScoreIcon /> },
  { title: '129085431', icon: <RequestPageIcon /> },
  { title: 'Online Payment', icon: <AccountBalanceWalletIcon /> },
]

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide children={undefined} direction="up" ref={ref} {...props} />;
});

const Orders = () => {

  const [filter, setFilter] = useState('ALL')
  const [open, setOpen] = useState(false);

  const [showMessageCopyCard, setShowMessageCopyCard] = useState(false);
  const [showMessageCopySheba, setShowMessageCopySheba] = useState(false);

  const [manualTransactionDate, setManualTransactionDate] = useState(new DateObject({ calendar: persian }));
  const [manualTransactionTime, setManualTransactionTime] = useState(new DateObject({ calendar: persian }));

  const [timePaid, setTimePaid] = useState<any>(new DateObject({ calendar: persian }))
  const [datePaid, setDatePaid] = useState<any>(new DateObject({ calendar: persian }))

  const [order, setOrder] = useState<any>()
  const [dataModal, setDataModal] = useState<any>(null)

  const { data,
    isLoading: isLoadingGetOrders,
    refetch: refetchGetOrders
  } = useGetOrders<any>();

  const { data: dataGetOrdersWriting,
    isLoading: isLoadingGetOrdersWriting,
    refetch: refetchGetOrdersWriting,
  } = useGetOrdersWriting<any>();

  const { data: dataGetOrdersSpeaking,
    isLoading: isLoadingGetOrdersSpeaking,
    refetch: refetchGetOrdersSpeaking,
  } = useGetOrdersSpeaking<any>()

  const { refetch: refetchGetZarinpal } = useGetZarinpal(order?.id, order)
  const { refetch: refetchPostManualPayment } = usePostManualPayment(order?.id, order, {
    description: {
      time: timePaid,
      date: datePaid
    }
  })

  const handleClickOpen = (i: any) => {
    setOpen(true);
    setDataModal(data[i])
    setManualTransactionDate(new DateObject({ calendar: persian }))
    setManualTransactionTime(new DateObject({ calendar: persian }))
  };

  console.log(dataModal)

  const handleClose = () => {
    setOpen(false);
  };

  const handleShowMessageCopyCard = () => {
    setShowMessageCopyCard(true);
    navigator.clipboard.writeText("6104337396377226");
  };

  const handleShowMessageCopySheba = () => {
    setShowMessageCopySheba(true);
    navigator.clipboard.writeText("680120000000005042963882");
  };

  const ManualPaymentHandler = () => {
    refetchPostManualPayment() && setOpen(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowMessageCopyCard(false);
    }, 3000);
  }, [showMessageCopyCard]);

  useEffect(() => {
    setTimeout(() => {
      setShowMessageCopySheba(false);
    }, 3000);
  }, [showMessageCopySheba]);

  useEffect(() => {
    setDatePaid(manualTransactionDate.toLocaleString())
    setTimePaid(manualTransactionTime.toLocaleString())
  }, [manualTransactionDate, manualTransactionTime])

  useEffect(() => {
    refetchGetOrders()
    refetchGetOrdersWriting()
    refetchGetOrdersSpeaking()
  }, [])

  const mergeSpeakingWriting = dataGetOrdersSpeaking?.concat(dataGetOrdersWriting)

  for (var i = 0; i < mergeSpeakingWriting?.length; i++) {
    mergeSpeakingWriting[i].description = `${mergeSpeakingWriting[i]?.name.split(' ')}`;
  }

  const allOrders = data?.concat(mergeSpeakingWriting)

  allOrders?.sort(function (a: any, b: any) {
    var c: any = new Date(a.created_at);
    var d: any = new Date(b.created_at);
    return d - c;
  });

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>Card to card payment</DialogTitle>
        <DialogContent>
          <DialogContentText>

            <List>
              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <AssignmentIcon />
                </ListItemIcon>
                <Typography variant="body1" sx={{ pl: 1 }}>
                  {
                    dataModal?.description
                      .replace("B", 'Book ')
                      .replace("G", ' General')
                      .replace("A", ' Academic')
                      .replace("T", ' Test ')
                      .replace("[", '  ')
                      .replace("]", '  ')
                      .replace(/\'/g, "")
                      .replace("L", " ")
                      .replace("R", " ")
                      .replace("W", " ")
                      .replace("S", " ")
                  }
                </Typography>
              </ListItem>

              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <PaymentsIcon />
                </ListItemIcon>
                <Typography variant="body1" sx={{ pl: 1 }}>
                  {dataModal?.amount.toLocaleString() + " IRR"}
                </Typography>
              </ListItem>
            </List>

            <Typography variant="body2" gutterBottom>
              After depositing into the following bank card, please send the exact date and time of the transaction, along with the last 4 digits of it, through the form below
            </Typography>
          </DialogContentText>
          <DialogContentText sx={{ py: 1 }}>

            {(showMessageCopySheba || showMessageCopyCard) ?
              <Typography variant="h6" sx={{ width: '100%', display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'center', color: green[700] }}>
                COPIED !
              </Typography>
              :
              <Typography variant="h6" sx={{ width: '100%', display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'center', visibility: 'hidden' }}>
                --
              </Typography>
            }

            <List>
              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Grid sx={{ display: 'flex' }}>
                    <ListItemIcon sx={{ minWidth: 0 }}>
                      <CreditCardIcon />
                    </ListItemIcon>
                    <Typography variant="body1" sx={{ pl: 1 }}>
                      6104-3373-9637-7226
                    </Typography>
                  </Grid>
                  <Grid sx={{ display: 'flex' }}>
                    {showMessageCopyCard &&
                      <Typography variant="button" sx={{ width: '100px', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end', fontSize: '12px' }}>
                        copied
                      </Typography>
                    }
                    <IconButton onClick={handleShowMessageCopyCard}>
                      <ContentCopyIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Grid sx={{ display: 'flex' }}>
                    <ListItemIcon sx={{ minWidth: 0 }}>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <Typography variant="body1" sx={{ pl: 1 }}>
                      IR680120000000005042963882
                    </Typography>
                  </Grid>
                  <Grid sx={{ display: 'flex' }}>
                    {showMessageCopySheba &&
                      <Typography variant="button" sx={{ width: '100px', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end', fontSize: '12px' }}>
                        copied
                      </Typography>
                    }
                    <IconButton onClick={handleShowMessageCopySheba}>
                      <ContentCopyIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={{ padding: 0, marginBottom: '10px', height: '40px' }}>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Grid sx={{ display: 'flex' }}>
                    <ListItemIcon sx={{ minWidth: 0 }}>
                      <img src={iBankMellat} width={20} />
                    </ListItemIcon>
                    <Typography variant="body1" sx={{ pl: 1.5 }}>
                      Mr. Mahdi Mohammadi - Bank Mellat
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </DialogContentText>
          <DialogContentText>
            <Typography variant="h6" gutterBottom>
              Payment Information:
            </Typography>
            <Grid container sx={{ py: 1 }} spacing={{ xs: 1, sm: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} id="orders-input">
              <Grid item xs={4} sm={4} md={6}>
                <DatePicker
                  id="datePicker-input"
                  calendar={persian}
                  locale={persian_fa}
                  value={manualTransactionDate}
                  className="rmdp-mobile"
                  onChange={(date: any) => setManualTransactionDate(date)}
                  maxDate={new Date()}
                  format="YYYY/MM/DD"
                />
              </Grid>
              <Grid item xs={4} sm={4} md={6} >
                <DatePicker
                  id="datePicker-input"
                  disableDayPicker
                  className="rmdp-mobile"
                  arrow={false}
                  format="HH:mm"
                  plugins={[<TimePicker hideSeconds />]}
                  calendar={persian}
                  locale={persian_fa}
                  mobileLabels={{
                    OK: "تایید",
                    CANCEL: "لغو",
                  }}
                  value={manualTransactionTime}
                  style={{ width: "100%" }}

                  onChange={(date: any) => setManualTransactionTime(date)}
                />
              </Grid>
              <Grid item xs={4} sm={8} md={6} >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="number"
                  label="Last 4 digits"
                  id="last4digits"
                  name="last4digits"
                />
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <CardContent sx={{ display: 'flex', justifyContent: 'flex-end', pt: 0, gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Button variant="contained" size="medium" color="error" onClick={handleClose} sx={{ width: { xs: '100%', sm: 'auto' } }}>
            close
          </Button>
          <Button variant="contained" size="medium" color="success" onClick={ManualPaymentHandler} sx={{ width: { xs: '100%', sm: 'auto' } }}>
            send
          </Button>
        </CardContent>
      </Dialog>

      {/* <Grid 
        sx={{ pt: 5, px: 4, display: 'flex', gap: 1, justifyContent: { xs: 'center', sm: 'flex-start' } }} 
        container 
        spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Chip
          label="ALL"
          variant={filter === 'ALL' ? '' : 'outlined'}
          onClick={() => setFilter("ALL")}
        />
        <Chip
          icon={<CreditScoreIcon />}
          label="PAID"
          variant={filter === 'PAID' ? '' : 'outlined'}
          onClick={() => setFilter("PAID")}
        />
        <Chip
          icon={<PaymentIcon />}
          label="UNPAID"
          variant={filter === 'UNPAID' ? '' : 'outlined'}
          onClick={() => setFilter("UNPAID")}
        />
      </Grid> */}

      <Grid
        sx={{ py: 3, px: 2 }}
        container
        spacing={{ xs: 2, sm: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>

        {(isLoadingGetOrders && isLoadingGetOrdersWriting && isLoadingGetOrdersSpeaking) &&

          Array.from(Array(2)).map((_, index) => (
            <Grid item key={index} xs={4} sm={8} md={12} >
              <Skeleton variant="rounded" width="100%" height={224.75} />
            </Grid>
          ))
        }

        {(!isLoadingGetOrders && !isLoadingGetOrdersWriting && !isLoadingGetOrdersSpeaking) &&

          allOrders?.map((i: any, index: any) => {

            return (
              <Grid item xs={4} sm={8} md={12} key={index}>
                <Card variant="outlined" sx={{ background: i.status === 'paid' && '#f8fffb' }}>
                  <CardContent sx={{ paddingBottom: 0 }}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                      <Grid item xs={4} sm={8} md={4} lg={4.5} >
                        <List>

                          <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                              <AssignmentIcon />
                            </ListItemIcon>
                            <Typography variant="body1" sx={{ pl: 1 }}>
                              {
                                (i.description)
                                  .replace("B", 'Book ')
                                  .replace("G", ' General')
                                  .replace("A", ' Academic')
                                  .replace("T", ' Test ')
                                  .replace("[", '  ')
                                  .replace("]", '  ')
                                  .replace(/\'/g, "")
                                  .replace("L", " ")
                                  .replace("R", " ")
                                  .replace("W", " ")
                                  .replace("S", " ")
                              }
                            </Typography>
                          </ListItem>

                          <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                              <Turn />
                            </ListItemIcon>
                            <Typography variant="body1" sx={{ pl: 1 }}>
                              {i.description.indexOf('W') > 0 && 'Writing'}
                              {i.description.indexOf('R') > 0 && 'Reading'}
                              {i.description.indexOf('S') > 0 && 'Speaking'}
                              {i.description.indexOf('L') > 0 && 'Listening'}
                            </Typography>
                          </ListItem>

                          <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                              <PaymentsIcon />
                            </ListItemIcon>
                            <Typography variant="body1" sx={{ pl: 1 }}>
                              {(i.amount*10).toLocaleString() + " IRR"} - id: {i.id}
                            </Typography>
                          </ListItem>

                          <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                              <CalendarMonthIcon />
                            </ListItemIcon>
                            <Typography variant="body1" sx={{ pl: 1 }}>
                              {new Date(Date.parse(i.created_at)).toLocaleString("en-IR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hour12: false, minute: "2-digit" })}
                            </Typography>
                          </ListItem>
                        </List>
                      </Grid>
                      {i.status === 'paid' &&
                        <>
                          <Grid item xs={4} sm={8} md={4} lg={4.5} >
                            <List>
                              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                  <RequestPageIcon />
                                </ListItemIcon>
                                <Typography variant="body1" sx={{ pl: 1 }}>
                                  id: {i.id}
                                </Typography>
                              </ListItem>

                              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                  <CreditScoreIcon />
                                </ListItemIcon>
                                <Typography variant="body1" sx={{ pl: 1 }}>
                                  i.title
                                </Typography>
                              </ListItem>

                              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                  <CreditScoreIcon />
                                </ListItemIcon>
                                <Typography variant="body1" sx={{ pl: 1 }}>
                                  i.title
                                </Typography>
                              </ListItem>

                              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                  <AccountBalanceWalletIcon />
                                </ListItemIcon>
                                <Typography variant="body1" sx={{ pl: 1 }}>
                                  i.payment_method
                                </Typography>
                              </ListItem>
                            </List>
                          </Grid>
                          <Grid item xs={4} sm={8} md={1.5} lg={1.5}
                            sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, justifyContent: 'flex-end' }}>
                            <TaskAltIcon color="success" sx={{ fontSize: 40 }} />
                          </Grid>
                        </>
                      }
                      {i.status === 'pending' &&
                        <>
                          <Grid item xs={4} sm={8} md={4} lg={4.5} >
                            <List>
                              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                  <RequestPageIcon />
                                </ListItemIcon>
                                <Typography variant="body1" sx={{ pl: 1 }}>
                                  id: {i.id}
                                </Typography>
                              </ListItem>

                              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                  <CreditScoreIcon />
                                </ListItemIcon>
                                <Typography variant="body1" sx={{ pl: 1 }}>
                                  i.title
                                </Typography>
                              </ListItem>

                              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                  <CreditScoreIcon />
                                </ListItemIcon>
                                <Typography variant="body1" sx={{ pl: 1 }}>
                                  i.title
                                </Typography>
                              </ListItem>

                              <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                  <AccountBalanceWalletIcon />
                                </ListItemIcon>
                                <Typography variant="body1" sx={{ pl: 1 }}>
                                  i.payment_method
                                </Typography>
                              </ListItem>
                            </List>
                          </Grid>
                          <Grid item xs={4} sm={8} md={1.5} lg={1.5}
                            sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, justifyContent: 'flex-end' }}>
                            <CircularProgress color="success" sx={{ fontSize: 40 }} />
                          </Grid>
                        </>
                      }
                    </Grid>
                  </CardContent>

                  {/* unpaid */}
                  {i.status === 'new' &&
                    <CardContent sx={{ display: 'flex', justifyContent: 'flex-end', pt: 0, gap: 1, flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
                      {/* <Button variant="contained" color="error" size="small" sx={{ width: { xs: '100%', sm: 'auto' } }}>
                        CANCEL
                      </Button> */}
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ width: { xs: '100%', sm: 'auto' } }}
                        onMouseEnter={() => setOrder(i)}
                        onClick={() => order?.id && refetchGetZarinpal()}
                      >
                        ONLINE
                      </Button>
                      <Tooltip title="کارت به کارت">
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ width: { xs: '100%', sm: 'auto' } }}
                          onMouseEnter={() => setOrder(i)}
                          onClick={() => handleClickOpen(index)}
                        >
                          Bank Card Transaction
                        </Button>
                      </Tooltip>
                    </CardContent>
                  }

                  {/* paid */}
                  {i.status === 'paid' &&
                    <CardContent sx={{ display: 'flex', justifyContent: 'flex-end', pt: 0, gap: 1, flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
                      <Button variant="contained" size="small" sx={{ width: { xs: '100%', sm: 'auto' } }}>
                        INVOICE
                      </Button>
                      <Button variant="contained" size="small" sx={{ width: { xs: '100%', sm: 'auto' } }}>
                        GO TO TEST
                      </Button>
                      <Button variant="outlined" size="small" color="success" sx={{ pointerEvents: 'none', width: { xs: '100%', sm: 'auto' } }}>
                        PAID
                      </Button>
                    </CardContent>
                  }

                  {/* pending */}
                  {i.status === 'pending' &&
                    <CardContent sx={{ display: 'flex', justifyContent: 'flex-end', pt: 0, gap: 1, flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
                      <Button variant="outlined" size="small" fullWidth sx={{ pointerEvents: 'none', width: { xs: '100%', sm: 'auto' } }}>
                        Checking payment information
                      </Button>
                    </CardContent>
                  }

                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    </>
  );
};

export default Orders;