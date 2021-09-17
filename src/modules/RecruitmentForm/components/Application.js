import React from "react";
import { Form, Input, Button } from "antd";

function Application({ submit, loading }) {
  const { TextArea } = Input;

  return (
    <div id="login" className="login row" style={{ marginTop: "1rem" }}>
      <div className="col-lg-1 col-sm-0"></div>
      <div className="col-lg-10 col-sm-8">
        <Form onFinish={submit} autoComplete="off">
          <Form.Item
            name={"fullname"}
            label="Full Name"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your full name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email Address"
            style={{ display: "block" }}
            rules={[
              {
                type: "email",
                message: "Please enter a valid email address",
              },
              {
                required: true,
                message: "Please enter your email address",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phone"}
            label="Phone Number (Active on WhatsApp)"
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
            name={"f_url"}
            label="Facebook Account URL"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your Facebook account URL",
              },
            ]}
          >
            <Input />
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
            name={"college"}
            label="College"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your college name",
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
            name={"a_year"}
            label="Academic Year"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please select your academic year",
              },
            ]}
          >
            <Input placeholder="Ex: First Year" />
          </Form.Item>
          <Form.Item
            name={"comments"}
            label="Any comments?"
            style={{ display: "block" }}
          >
            <TextArea rows={4} />
          </Form.Item>
          {!loading && (
            <Form.Item>
              <Button type="secondry" htmlType="submit" size="large" block>
                Apply
            </Button>
            </Form.Item>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Application;