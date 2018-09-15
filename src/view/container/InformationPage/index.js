import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { inputDataInfStart } from './actions';
import InformationPage from '../../component/InformationPage';

class InformationContainer extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(value) {
    const { inputData } = this.props;
    console.log()
    alert('Submit successed!')
    inputData(value);
  }

  render() {
    const { handleSubmit, pristine } = this.props;
    return (
      <InformationPage onSubmit={handleSubmit(this.onSubmit)} pristine={pristine} />
    )
  }
}
const formInfomation = reduxForm({
  form: 'informationForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(InformationContainer);

const mapStateToProps = ({ inputDataReducer }) => ({
  initialValues: inputDataReducer.inputData
});

const mapDispatchToProps = dispatch => ({
  inputData: (value) => dispatch(inputDataInfStart(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(formInfomation);