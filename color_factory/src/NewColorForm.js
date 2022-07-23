import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import validColors from "./validColors.js";

const NewColorForm = ({addColor}) => {

  const [buttonText, setButtonText] = useState("Add this color");
  const [validColor, setValidColor] = useState(false);
  const [form, updateForm] = useState({color: ""});
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm(formData => ({
      ...formData,
      [name]: value
    }))
    if (validColors[e.target.value.trim()]) {
      setValidColor(true);
    } else {
      setValidColor(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(form.color);
    history.push("/colors");
  }

  const handleNoSubmit = (e) => {
    e.preventDefault();
    setButtonText("Enter a valid color name");
  }

  return (
    <div className="NewColor">
      <form>
        <div>
          <label htmlFor="color"></label>
          <input
            name="color"
            id="color"
            placeholder="Enter a color name"
            onChange={handleChange}
            value={form.color}
          />
        </div>
        <button 
        onClick={handleNoSubmit}
        style={{ display: validColor ? 'none' : 'inline'}} 
        >{buttonText}
        </button>
        <button 
        onClick={handleSubmit}
        style={{ display: validColor ? 'inline' : 'none'}} 
        >Add this color
        </button>
      </form>
    </div>
  );
}

export default NewColorForm;