import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
  const { dispatch, remaining, currency } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [action, setAction] = useState('');

  const submite = () => {
    if (cost > remaining) {
      alert('The value cannot exceed remaining funds  £' + remaining);
      setCost('');
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };
    if (action === 'Reduce') {
      dispatch({
        type: 'RED_EXPENSE',
        payload: expense,
      });
    } else {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
      });
    }
  };

  return (
    <div>
      <div className='row'>
        <div className='input-group mb-3' style={{ marginLeft: '2rem' }}>
          <div className='input-group-prepend '>
            <label className='input-group-text' htmlFor='inputGroupSelect01'>
              Department
            </label>
          </div>

          <select
            style={{ height: '2.4em' }}
            className='custom-select'
            id='inputGroupSelect01'
            onChange={(e) => setName(e.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value='Marketing' name='marketing'>
              {' '}
              Marketing
            </option>
            <option value='Sales' name='sales'>
              Sales
            </option>
            <option value='Finance' name='finance'>
              Finance
            </option>
            <option value='HR' name='hr'>
              HR
            </option>
            <option value='IT' name='it'>
              IT
            </option>
          </select>

          <div className='input-group-prepend' style={{ marginLeft: '2rem' }}>
            <label className='input-group-text' htmlFor='inputGroupSelect02'>
              Allocation
            </label>
          </div>
          <select
            style={{ height: '2.4em' }}
            className='custom-select'
            id='inputGroupSelect02'
            onChange={(e) => setAction(e.target.value)}
          >
            <option defaultValue value='Add' name='Add'>
              Add
            </option>
            <option value='Reduce' name='Reduce'>
              Reduce
            </option>
          </select>
          <div
            style={{ marginLeft: '2rem', marginRight: '0.5em', fontSize: 30 }}
            text-align='right'
          >
            {currency}
          </div>
          <input
            required='required'
            type='number'
            id='cost'
            value={cost}
            style={{ size: 10 }}
            onChange={(e) => setCost(e.target.value)}
          ></input>

          <button
            className='btn btn-primary'
            onClick={submite}
            style={{ marginLeft: '2rem' }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
