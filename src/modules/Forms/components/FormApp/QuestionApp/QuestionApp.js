import React from "react";
import { Form, Input, Button, Radio } from "antd";

function QuestionApp({ submit, loading, Fields }) {
  const { TextArea } = Input;
  const inputFields = (type, placeholder, options) => {
    if (type === "Selection")
      return (
        <Radio.Group>
          {options.map((option, index) => (
            <Radio
              style={{ display: "block" }}
              key={index}
              value={option.value}
            >
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      );
    if (type === "TextArea")
      return <TextArea placeholder={placeholder}></TextArea>;
    if (type === "Text") return <Input placeholder={placeholder}></Input>;
  };

  return (
    <div className="row" style={{ marginTop: "1rem" }}>
      <div className="col-lg-1 col-sm-0"></div>
      <div className="col-lg-10 col-sm-12">
        <Form onFinish={submit} autoComplete="off">
          <Form.Item noStyle>
            {Fields.map((f, index) => (
              <Form.Item
                name={f.label}
                label={f.label}
                rules={
                  f.isRequired && [
                    { required: true, message: "This Field is required!" },
                  ]
                }
                key={index}
                style={{ display: "block" }}
              >
                {inputFields(f.type, f.placeholder, f.options)}
              </Form.Item>
            ))}
          </Form.Item>
          <Form.Item>
            <Button
              type="secondry"
              htmlType="submit"
              size="large"
              block
              disabled={loading ? true : false}
            >
              Apply
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default QuestionApp;
