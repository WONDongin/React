import  "./EmotionItem.css";
import React from "react";
const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
    const handleOnClick = () => {
            onClick(id);
    };

    return(
        <div className= 
        {["EmotionItem", isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`, ].join(" ")}
        onClick={handleOnClick}>
            <img src={img} alt={`emotion${id}`} />
            <span>{name}</span>
        </div>
    );
};
export  default  React.memo(EmotionItem);