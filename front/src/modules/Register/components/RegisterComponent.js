import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Radio, Button } from "antd";
import "../style.css";

function Register({ props }) {
  const [user, setUser] = useState({});
  const [form] = Form.useForm();
  console.log(props);

  const handleRegister = (data) => {
    setUser(data);
    console.log(user);
    form.resetFields();
    props.history.push("/login");
    window.location.reload();
  };

  return (
    <div className="container register-container">
      <h1 className="register-header">Registeration</h1>

      <div className="register-form">
        <Form
          form={form}
          onFinish={handleRegister}
          scrollToFirstError
          autoComplete="off"
        >
          <Form.Item
            name={"firstname"}
            label="First Name"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your first name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"lastname"}
            label="Last Name"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your last name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phone"}
            label="Phone Number"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your phone number",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            style={{ display: "block" }}
            rules={[
              {
                type: "email",
                message: "Please enter a valid email",
              },
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm_password"
            label="Confirm Password"
            style={{ display: "block" }}
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name={"isGraduated"}
            label="Are you graduated?"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please choose whether you are graduated or not",
              },
            ]}
          >
            <Radio.Group>
              <Radio className="d-block" value={true}>
                Yes
              </Radio>
              <Radio className="d-block" value={false}>
                No
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={"university"}
            label="University"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your university name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"faculty"}
            label="Faculty"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your faculty name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"department"}
            label="Department"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your department",
              },
            ]}
          >
            <Input placeholder="Write none if you are not in a specific department" />
          </Form.Item>
          <Form.Item
            name={"graduation_year"}
            label="Year of graduation"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your graduation year",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div className="register-submit-container">
            <Form.Item className="register-submit">
              <Button type="secondry" htmlType="submit" size="large">
                Register
              </Button>
            </Form.Item>
            <Link to="/login">
              <small>Already have an account?</small>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
