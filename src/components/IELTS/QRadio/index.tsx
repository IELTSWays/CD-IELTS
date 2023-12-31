import { useState } from "react";

const index = ({ options, init }: any) => {

  const [radioValue, setRadioValue] = useState(init);

  return <div className="App">
    <div className="input-radio">
      {options.map((option: any) => (
        <label className={radioValue === option.value && 'active'}
        >
          <input
            type="radio"
            value={option.value}
            checked={radioValue === option.value}
            onChange={(e) => setRadioValue(e.target.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>

};

export default index;