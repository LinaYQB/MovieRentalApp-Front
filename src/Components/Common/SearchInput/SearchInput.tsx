import { FC, useState, ChangeEvent } from "react";
import classes from "./SearchInput.module.scss";



export const SearchInput: FC = () => {
  const [ value , setValue ] = useState<string>('');


  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value); 
  }

  return (
    <div className={classes.parent}>
        <div className={classes.searchInputWrapper}>
            <input type="text" className={classes.searchInput} value={value} onInput={handleInputChange} placeholder="Que recherchez-vous ?"/>
            {value.length > 0 && <div className={classes.searchInputReset} onClick={()=> setValue('')}/> }
        </div>
    </div>
  );
};