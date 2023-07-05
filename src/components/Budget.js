import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);

  const changeBudget = (val) => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
    if (val < totalExpenses) {
      alert("Can't do reduce budget below allocated values.");
    } else {
      dispatch({
        type: 'SET_BUDGET',
        payload: val,
      });
    }
  };
  return (
    <div className='alert alert-secondary p-2'>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>Budget: {currency} </span>
        </div>
        <input
          className='form-control'
          aria-label='Amount (to the nearest dollar)'
          required='required'
          type='number'
          step='10'
          id='cost'
          value={budget}
          size='2.2em'
          onInput={(event) => changeBudget(event.target.value)}
        />
      </div>
    </div>
  );
};
export default Budget;
