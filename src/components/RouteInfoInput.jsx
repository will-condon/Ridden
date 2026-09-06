import Tag from "./Tag.jsx";
import './RouteInfoInput.css'
import { useState} from "react";

function RouteInfoInput({title,tags,placeholder}) {

  const [description, setDescription] =useState('');

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  const filledTags = tags.map((tag,index) => <Tag key={index} label={tag}></Tag>);

  return (
    <div className="route-info-input">
      <h3 className="route-info-title">{title}</h3>
      <div className="tags-container">
        {filledTags}
      </div>
      <textarea value={description} onChange={handleDescriptionChange}
      className="description-textfield" placeholder={placeholder}></textarea>
    </div>
  );
}
export default RouteInfoInput;