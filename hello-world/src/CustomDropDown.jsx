import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';
import Collapse from 'react-bootstrap/lib/Collapse';
import countries from './countries';
import pure from './pure';

import Combobox from 'react-input-enhancements/lib/Combobox';

import './bootstrap-input-inline.css';
import './ie.css';

const styles = {
  wrapper: {
    height: '10vh',
    width: '60%',
    margin: '0 auto'
  },
  header: {
  },
  content: {
    paddingTop: '20px',
    paddingBottom: '30px'
  }
};

const ValueInput4 = pure(({ value, onChange }) =>
  <FormGroup>
    <Col componentClass={ControlLabel} xs={3}>
      Player Name:
    </Col>
    <Col xs={6}>
      <Combobox
        value={value}
        options={countries}
        dropdownProps={{ style: { width: '100%', position: 'relative' } }}
        onSelect={onChange}
        autocomplete
      >
        {(inputProps, otherProps, registerInput) =>
          <FormControl
            {...inputProps}
            ref={c => registerInput(ReactDOM.findDOMNode(c))}
            type='text'
            placeholder='No Country'
          />
        }
      </Combobox>
    </Col>
  </FormGroup>
);


export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries,
      value4: '',
      code4open: false,
      asyncAlterCountries: false
    };
  }

  componentDidMount() {
    window.setTimeout(this.setDelayedState, 200);
  }

  setDelayedState = () => {
    this.setState({ value4: 'value--Pick Player' });
  };


  toggleAsyncAlterCountries = () => {
    const asyncAlterCountries = !this.state.asyncAlterCountries;
    this.setState({ asyncAlterCountries, countDown: 5 });

    clearTimeout(this.alterCountriesTimeout);
    clearTimeout(this.countDownTimeout);
    if (asyncAlterCountries) {
      this.alterCountriesTimeout = setInterval(this.alterCountries, 5000);
      this.countDownTimeout = setInterval(this.countDown, 1000);
    }
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <PageHeader style={styles.header}>
          {process.env.npm_package_name}
          <small> {process.env.npm_package_version}</small>
        </PageHeader>
        <h5>{process.env.npm_package_description}</h5>
        <div style={styles.content}>
          <form className='form-horizontal'>


            <ValueInput4 value={this.state.value4}
              onChange={this.handleValue4Change} />

          </form>
        </div>
      </div>
    );
  }

  renderCode(code, key) {
    return (
      <div className='form-group'>
        <div className='col-xs-6 col-xs-offset-3'>
          <a role='button'
            onClick={() => this.setState({ [key]: !this.state[key] })}>Show code</a>
          <Collapse in={this.state[key]}>
            <pre>{code.replace(/^\n+/, '')}</pre>
          </Collapse>
        </div>
      </div>
    );
  }


  handleValue4Change = value => this.setState({ value4: value })

}
