import React from "react";
import Form from "./components/Form";
import joi from "joi-browser";

class Login extends Form {
  state = {
    data: {
      username: "",
      phone: "",
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
    phone: joi
      .number()
      .integer()
      .less(1600000000)
      .greater(900000000)
      .positive()
      .required(),
    year: joi.string().required(),
    faculty: joi.string().required(),
    department: joi.string().required(),
    university: joi.string().required()
  };

  doSubmit = () => {
    // do server connection
    // post to Route events/_id
    console.log(this.state);
    console.log("submitted");
  };

  render() {
      const years = {
        Engineering: [
          { _id: "e3dady", name: "e3dady" },
          { _id: "1st", name: "1st" },
          { _id: "2nd", name: "2nd" },
          { _id: "3nd", name: "3nd" },
          { _id: "4nd", name: "4nd" }
        ],
        Other: [
          { _id: "1st", name: "1st" },
          { _id: "2nd", name: "2nd" },
          { _id: "3nd", name: "3nd" },
          { _id: "4nd", name: "4nd" }
        ]
      };
    
      const Faculty = [
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
      
    const { faculty } = this.state.data;
    return (
      <div className="shadow-lg  p-5 mb-5  rounded">
          <h1 className="mb-5">Registeration Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {this.renderInput("username", "UserName")}
            {this.renderInput("email", "email", "email")}
            {this.renderInput("phone", "Phone Number", "phone")}
            {this.renderSelect(
              "university",
              university,
              "Select your university"
            )}
            {this.renderSelect("faculty", Faculty, "Select your facaulty")}

            {faculty &&
              (faculty === "Engineering"
                ? this.renderSelect("year", years["Engineering"], "Select year")
                : this.renderSelect("year", years["Other"], "Select year"))}

            {faculty &&
              this.renderSelect(
                "department",
                department[faculty],
                "DepartMent"
              )}
            {this.renderSubmitBtn("Submit")}
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
