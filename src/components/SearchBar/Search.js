import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    OnChangeFilter: PropTypes.func.isRequired,
  };
function Filter({value,OnChangeFilter}){
    return(
<form >
      <label>
        <input
   
       placeholder="Search..."
       className="Search_form"
          type="text"
          value={value}
          onChange={event => OnChangeFilter(event.target.value)}></input>
      </label>
    </form>
    )
}

export default Filter;

