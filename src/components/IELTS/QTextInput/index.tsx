import { useState } from 'react';
// mtu
import TextField from '@mui/material/TextField';
// mtu

const index = ({ number, init = '', disabled = false }: any) => {

  const [q2, setQ2] = useState(init);
  
  const changeHandler = (e :any) => {
    setQ2(e.target.value)
  }

  return (
    <>
      <div className='text-field'>
        <TextField
          margin="normal"
          disabled={disabled}
          placeholder={number}
          value={q2}
          onChange={(e: any) => changeHandler(e)}
        />
      </div>
    </>
  )
};

export default index;