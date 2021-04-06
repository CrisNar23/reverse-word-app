import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useDispatch, useSelector } from 'react-redux'
import { getReverseStringAction } from '../redux/reverseStringDuck'

const ReverseStrings = () => {
  const dispatch = useDispatch()

  const { stringsReverseArr } = useSelector((store) => store.strings)

  // Handle input string
  const [stringToInvert, setStringToInvert] = useState('')

  // Flag to show error message
  const [flagError, setFlagError] = useState(false)

  const handleInput = (event) => {
    setStringToInvert(event.target.value)
    setFlagError(false)
  }

  const getReverse = () => {
    if (stringToInvert !== '') {
      dispatch(getReverseStringAction(stringToInvert))
      clearForm()
    } else {
      setFlagError(true)
    }
  }

  const clearForm = () => {
    document.getElementById('frmReverseString').reset()
    setStringToInvert('')
  }
  return (
    <>
      <nav className='navbar navbar-light bg-danger mb-3'>
        <div className='container justify-content-center'>
          <form id='frmReverseString' className='d-flex col-8 m-2'>
            <input
              id='stringToReverse'
              name='stringToReverse'
              type='text'
              className='form-control'
              placeholder='Insert Text'
              onChange={handleInput}
            />
            <button
              type='button'
              className='btn btn-primary ml-4'
              onClick={getReverse}
            >
              Send
            </button>
          </form>
        </div>
      </nav>
      {flagError === true && (
        <div className='alert alert-danger' role='alert'>
          Please, type something in the text field and try again!
        </div>
      )}
      <div className='container'>
        <div
          className='my-3 p-3 rounded shadow-sm'
          style={{ backgroundColor: 'white' }}
        >
          <h1>Results:</h1>
          <div className='row px-5 py-3 align-items-center justify-content-center'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Original Text</th>
                  <th scope='col'>Reverse Text</th>
                  <th scope='col'>Palindrome</th>
                </tr>
              </thead>
              <tbody>
                {stringsReverseArr.map((item) => (
                  <tr key={uuidv4()}>
                    <td key={uuidv4()}>{item.text}</td>
                    <td key={uuidv4()}>{item.reverseText}</td>
                    <td key={uuidv4()}>
                      {item.palindrome === false ? 'False' : 'True'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReverseStrings
