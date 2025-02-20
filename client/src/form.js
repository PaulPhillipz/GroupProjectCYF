import React, { Component } from "react";
import ButtonExampleInverted from "./Button";
import RadioExampleToggle from "./radio";
import CheckboxExampleShorthandElement from "./checkbox";
import DropdownExampleMultipleSelection from "./dropdown";
import DropdownExample2 from "./dropdown2";
import TableExamplePadded from "./table";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Application form is submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="exampleInputFname">What's your first name? </label>
          <input
            type={Text}
            class="form-control"
            id="exampleInputName1"
            name="firstName"
            placeholder="Type your answer here .."
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleInputLname">What's your last name? </label>
          <input
            type={Text}
            class="form-control"
            id="exampleInputLname1"
            name="lastName"
            placeholder="Type your answer here .."
            onChange={this.handleChange}
          />
        </div>
        <div>
          <div>
            <label>
              <h4>Which CYF city would you like to volunteer for? </h4>
            </label>
          </div>
          <div>
            <small id="cityHelp" class="form-text text-muted">
              If you're interested in bringing CYF to your city email us at
              contact@codeyourfuture.io.
            </small>
          </div>
          <div>
            <select onChange={this.handleChange} required>
              <option value="0">Select city</option>
              <option value="1">London</option>
              <option value="2">Manchester</option>
              <option value="3">Glasgow</option>
              <option value="4">Newcastle</option>
            </select>
          </div>
          <div>
            <label for="exampleInputEmail">What's your email address? </label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="exampleInputEmail1"
              placeholder="Type your email here .."
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label for="exampleInputNumber">What's your phone number? </label>

            <input
              type={Number}
              class="form-control"
              id="exampleInputNumber1"
              name="phone"
              placeholder="Type your number here If you don't mind us contacting you this way.."
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label for="interest" required>
              <h4>Cool ! What are you interested in helping with ? </h4>
            </label>
          </div>
          <CheckboxExampleShorthandElement label="Teaching code or agile methodologies" />
          <CheckboxExampleShorthandElement label="Running and growing the organisation" />
          <TableExamplePadded />
          <div>
            <label for="exampleInputSkill">
              What other web development related expertise could you bring to
              CYF?{" "}
            </label>

            <input
              type={Text}
              className="form-control"
              id="exampleInputSkill"
              placeholder=" Type your answer here .."
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="exampleInputAvail" required>
              <h4>
                Awesome. Would you be available to help during our classes on
                Saturdays/Sundays?
              </h4>
            </label>
            <RadioExampleToggle />
          </div>
          <div>
            <label>
              <h4>In which of these areas could you see yourself helping?</h4>
            </label>
          </div>
          <DropdownExampleMultipleSelection />
        </div>
        <div>
          <div>
            <label>
              <h4>Awesome. When would you be available to help?</h4>
            </label>
          </div>
          <DropdownExample2 />
          <br />
          <br />
          <br />
        </div>
        <div>
          <ButtonExampleInverted placeHolder="Submit" />
        </div>
      </form>
    );
  }
}
export default NameForm;
