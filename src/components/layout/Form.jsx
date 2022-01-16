import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../../Redux/Action";
const Form = (props) => {
  //Destructure the label field
  const { label, options } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  //HANDLE CHANGE FUNCTION
  const handleChange = (e) => {
    setValue(e.target.value);
    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(e.target.value));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(e.target.value));
        break;
      case "Type":
        dispatch(handleTypeChange(e.target.value));
        break;
      default:
        return;
    }
  };
  return (
    <div className="form-control pt-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        className="select select-bordered"
        label={label}
        value={value}
        onChange={handleChange}
      >
        {options.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Form;
