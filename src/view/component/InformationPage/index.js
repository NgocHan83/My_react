import React, { Component } from 'react';
import { Field } from 'redux-form';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './styles.scss';

class InformationPage extends Component {
 
  render() {
    const { onSubmit, pristine } = this.props;

    return (
      <div className='wrapper-form'>
        <form className='form-info' onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor='firstName'>First Name</label>
            <div>
              <Field
                className='form-control'
                name='firstName'
                type='text'
                component='input'
                placeholder='First Name' />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <div>
              <Field
                className='form-control'
                name='lastName'
                type='text'
                component='input'
                placeholder='Last Name' />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='email' >Email</label>
            <div>
              <Field
                className='form-control'
                name='email'
                type='email'
                component='input'
                placeholder='Email' />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='gender'>Gender</label>
            <div>
              <label className='male'>
                <Field
                  name='gender'
                  type='radio'
                  component='input'
                  value='male' /> {' '} Male
              </label>
              <label className='female'>
                <Field
                  name='gender'
                  type='radio'
                  component='input'
                  value='female' /> {' '} Female
              </label>
            </div>
          </div>
          <div className='form-group wrapper-btn'>
            <button className='btn btn-primary' disabled={pristine}>Submit</button>
            <input type='text' className='dv' />
            <p className='dv'>HAN HAN</p>
          </div>
        </form>
      </div>    )
  }
}

export default InformationPage;