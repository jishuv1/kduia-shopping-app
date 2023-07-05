import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = (e) => {
    e.stopPropagation();
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'RED_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button style={{ border: 'none', backgroundColor: 'transparent' }}>
          <FaPlusCircle
            size='2.2em'
            color='green'
            onClick={(e) => {
              e.stopPropagation();
              increaseAllocation(props.name);
            }}
          />
        </button>
      </td>
      <td>
        <button style={{ border: 'none', backgroundColor: 'transparent' }}>
          <FaMinusCircle
            size='2.2em'
            color='red'
            onClick={(e) => {
              e.stopPropagation();
              decreaseAllocation(props.name);
            }}
          />
        </button>
      </td>
      <td>
        <button style={{ border: 'none', backgroundColor: 'transparent' }}>
          <FaTimesCircle size='1.8em' onClick={handleDeleteExpense} />
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
