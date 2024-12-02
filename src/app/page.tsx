import React from "react";
import { Form, Input, Button, Divider, Typography } from "antd";
import {
  FacebookFilled,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { Item: FormItem } = Form;

// export default function HomePage() {
//   return (
//     <div className="appBg">
//         <Form className="loginForm">
//         <Title>Welcome to Ant Design</Title>
//         <Text>Text example</Text>
//         <Paragraph>This is a paragraph example.</Paragraph>
//           <FormItem label='Email' name={'myEmail'}>
//             <Input placeholder="Enter your email"/>
//           </FormItem>
//           <FormItem label='Password' name={'myPassword'}>
//             <Input placeholder="Enter your Password"/>
//           </FormItem>
//           <Button type="primary" htmlType="submit" block>
//             Login
//           </Button>
//           <Divider style={{borderColor: "black" }}>or Login with</Divider>
//           <div className="socialLogin">
//             <FacebookFilled className="socialIcon"  />
//             <GoogleOutlined className="socialIcon"  />
//             <TwitterOutlined className="socialIcon"  />
//         </div>
//         </Form>
//     </div>
//   );
// }  

const App: React.FC = () => {
  return (
    <div className="appBg">
      <Form className="loginForm">
        <Title level={1}>Welcome to Ant Design</Title>
        <Text>Text example</Text>
        <Paragraph>This is a paragraph example.</Paragraph>
        <FormItem label="Email" name="email">
          <Input placeholder="Enter your email" />
        </FormItem>
        <FormItem label="Password" name="password">
          <Input type="password" placeholder="Enter your password" />
        </FormItem>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default App;