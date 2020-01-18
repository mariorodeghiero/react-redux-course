import React from "react";
import { Field, reduxForm, getFormMeta } from "redux-form";
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import { parseISO } from 'date-fns';
import { zonedTimeToUtc, format , utcToZonedTime} from 'date-fns-tz';

const calendarTime = "2020-01-15T22:00:00" // time enviado do servidor no formato UTC
const timeZoneBR = Intl.DateTimeFormat().resolvedOptions().timeZone // Obtem o timezone do meu browser
const timeZoneNY = 'America/New_York'
const timeZoneAU = 'Australia/Brisbane'
const timeZoneCA = 'America/Los_Angeles'

const znDateBR = zonedTimeToUtc(calendarTime, timeZoneBR);
const znDateNY = zonedTimeToUtc(calendarTime, timeZoneNY);
const znDateAU = zonedTimeToUtc(calendarTime, timeZoneAU);
const znDateCA = zonedTimeToUtc(calendarTime, timeZoneCA);

console.log("Date of Reference UTC: ", calendarTime)
console.log("NY - 2 Hours front of BR: ", format(znDateNY,  "yyyy-MM-dd'T'HH:mm:ss", {timeZoneNY}))
console.log("AU - 14 Hours front of BR: ", format(znDateAU,  "yyyy-MM-dd'T'HH:mm:ss", {timeZoneAU}))
console.log("BR - 0 Hours front of BR: ", format(znDateBR,  "yyyy-MM-dd'T'HH:mm:ss", {timeZoneBR}))
console.log("PST - 5 Hours front of BR: ", format(znDateCA,  "yyyy-MM-dd'T'HH:mm:ss", {timeZoneCA}))

class StreamCreate extends React.Component {

  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.createStream(formValues)
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>

      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {

  }
  if (!formValues.title) {
    errors.title = "You must enter a title"
  }
  if (!formValues.description) {
    errors.description = "You must enter a description"
  }
  return errors
}

const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

export default connect(null, {createStream})(formWrapped)
