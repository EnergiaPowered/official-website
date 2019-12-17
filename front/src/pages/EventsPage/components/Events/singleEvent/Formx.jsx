import React from "react";
import Form from "./components/Form";
import joi from "joi-browser";

class Login extends Form {
  state = {
    data: {
      username: "",
      email: "",
      year: "",
      faculty: "",
      department: "",
      university: ""
    },
    error: {}
  };

  schema = {
    username: joi
      .string()
      .required()
      .label("UserName"),
    email: joi
      .string()
      .required()
      .email()
      .label("Email"),
    year: joi.required(),
    faculty: joi.required(),
    department: joi.required(),
    university: joi.required()
  };

  doSubmit = () => {
    // do server connection
    console.log(this.state);
    console.log("submitted");
  };

  render() {
    const years = [
      { _id: "e3dady", name: "e3dady" },
      { _id: "1st", name: "1st" },
      { _id: "2nd", name: "2nd" },
      { _id: "3nd", name: "3nd" },
      { _id: "4nd", name: "4nd" }
    ];
    const faculty = [
      { _id: "Engineering", name: "Engineering" },
      { _id: "Science", name: "Science" },
      { _id: "Computer", name: "Computer" }
    ];

    const university = [
      { _id: "Ain-Shams", name: "Ain-Shams" },
      { _id: "Cairo", name: "Cairo" },
      { _id: "helwan", name: "helwan" }
    ];
    const department = {
      Engineering: [
        { _id: "Electrical", name: "Electrical" },
        { _id: "Mechanical", name: "Mechanical" },
        { _id: "civil", name: "civil" },
        { _id: "architicture", name: "architicture" }
      ],
      Science: [
        { _id: "Math", name: "Math" },
        { _id: "chemistry", name: "chemistry" }
      ],
      Computer: [
        { _id: "CS", name: "CS" },
        { _id: "IT", name: "IT" },
        { _id: "IS", name: "IS" },
        { _id: "Ai", name: "Ai" }
      ]
    };
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {this.renderInput("username", "UserName")}
            {this.renderInput("email", "email", "email")}
          </div>
          {this.renderSelect(
            "university",
            university,
            "Select your university"
          )}
          {this.renderSelect("faculty", faculty, "Select your facaulty")}
          {this.renderSelect("year", years, "Select year")}
          {this.state.data.faculty &&
            this.renderSelect(
              "department",
              department[this.state.data.faculty],
              "DepartMent"
            )}
          {this.renderSubmitBtn("Submit")}
        </form>
      </div>
    );
  }
}

export default Login;
