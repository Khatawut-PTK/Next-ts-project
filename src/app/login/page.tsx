"use client"

import React from 'react'
import { Form, Input, Button, Divider, Typography, message } from "antd";
import {
  FacebookFilled,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import Title from 'antd/es/typography/Title';
import "../globals.css";

interface LoginForm {
    myEmail: string;
    myPassword: string;
}

function LoginPage() {

    const [form] = Form.useForm<LoginForm>();

    const onLogin = () => {
      message.success("Login Successful!");
    };
  
    const onFinish = (values: LoginForm) => {
      console.log("Login Data:", values);
      onLogin();
    };
    
  return (
    <div className="appBg">
        <Form form={form} className="loginForm"  onFinish={onFinish} layout="vertical">
        <Typography>
            <Title>Welcome Back!</Title>
        </Typography>
        <FormItem label='Email' name={'myEmail'}>
            <Input placeholder="Enter your email"/>
        </FormItem>
        <FormItem label='Password' name={'myPassword'}>
            <Input placeholder="Enter your password"/>
        </FormItem>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        <Divider style={{borderColor: "black" }}>or Login with</Divider>
        <div className="socialLogin">
            <FacebookFilled  className="socialIcon"  onClick={onLogin}  />
            <GoogleOutlined  className="socialIcon"  onClick={onLogin}  />
            <TwitterOutlined className="socialIcon"  onClick={onLogin}  />
        </div>
        </Form>
    </div>
  )
}

export default LoginPage;