import React from "react";
import css from "./Filter.module.css";
import { nanoid } from "nanoid";

const filterInputId = nanoid();

const Filter = ({filter, onChangeFilter}) => (
    <div className={css.filter}>
        <label htmlFor={filterInputId}>Find contacts by name</label>
        <input type="text" id={filterInputId} value={filter} onChange={onChangeFilter} className={css.search}/>
    </div>
)

export default Filter;