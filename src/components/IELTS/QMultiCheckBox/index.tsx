import { useState, useEffect } from "react";

const index = ({ options }: any) => {
  const [checkBox, setCheckBox] = useState<any>([]);
  const [selectedVal, setSelectedVal] = useState(null);
  const handleChange = (e: any, val: any, index: any) => {
    let data: any = checkBox;
    data[index].selected = !data[index].selected;
    setCheckBox([...data]);
  };
  useEffect(() => {
    setCheckBox(options);
    let arr: any = [];
    checkBox.length != 0 &&
      checkBox.map((v: any, i: any) => {
        if (v.selected === true) {
          arr.push(v.value);
        }
      });
    setSelectedVal(arr);
  }, [checkBox]);
  return (
    <div
      className="input-checkbox"
    >
      {checkBox &&
        checkBox.map((val: any, i: any) => {
          return (
            <div key={i} className={`checkbox-item ${val.selected && 'active'}`}>
              <input
                type="checkbox"
                name={val.value}
                id={i}
                checked={val.selected}
                onChange={event => handleChange(event, val.value, i)}
              />
              <label htmlFor={i}>{val.text}</label>
            </div>
          );
        })}
      <br />
      {/* {JSON.stringify(selectedVal, null, 2)} */}
    </div>
  );
};

export default index;
