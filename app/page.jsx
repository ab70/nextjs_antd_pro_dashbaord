"use client"
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined
} from "@ant-design/icons"
import {
  LoginForm,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText
} from "@ant-design/pro-components"
import { message, Space, Tabs } from "antd"
import { useState } from "react"

const iconStyles = {
  marginInlineStart: "16px",
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "24px",
  verticalAlign: "middle",
  cursor: "pointer"
}

export default () => {
  const [loginType, setLoginType] = useState("phone")
  return (
    
      <div style={{ backgroundColor: "white" }}>
        <LoginForm
          logo="/octocat.png"
          title="Github"
          subTitle="Ab's Mod Antd Pro"
          actions={
            <Space wrap>
              Welcome
              <AlipayCircleOutlined style={iconStyles} />
              <TaobaoCircleOutlined style={iconStyles} />
              <WeiboCircleOutlined style={iconStyles} />
            </Space>
          }
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={activeKey => setLoginType(activeKey)}
          >
            <Tabs.TabPane key={"account"} tab={"Account"} />
            <Tabs.TabPane key={"phone"} tab={"Phone"} />
          </Tabs>
          {loginType === "account" && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: "large",
                  prefix: <UserOutlined className={"prefixIcon"} />
                }}
                placeholder={"User: admin or user"}
                rules={[
                  {
                    required: true,
                    message: "User Name required!"
                  }
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: "large",
                  prefix: <LockOutlined className={"prefixIcon"} />
                }}
                placeholder={"密码: ant.design"}
                rules={[
                  {
                    required: true,
                    message: "Password required"
                  }
                ]}
              />
            </>
          )}
          {loginType === "phone" && (
            <>
              <ProFormText
                fieldProps={{
                  size: "large",
                  prefix: <MobileOutlined className={"prefixIcon"} />
                }}
                name="mobile"
                placeholder={"手机号"}
                rules={[
                  {
                    required: true,
                    message: "请输入手机号！"
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: "手机号格式错误！"
                  }
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: "large",
                  prefix: <LockOutlined className={"prefixIcon"} />
                }}
                captchaProps={{
                  size: "large"
                }}
                placeholder={"请输入验证码"}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${"获取验证码"}`
                  }
                  return "获取验证码"
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: "请输入验证码！"
                  }
                ]}
                onGetCaptcha={async () => {
                  message.success("Obtained verification code successfully! The verification code is: 1234")
                }}
              />
            </>
          )}
          <div
            style={{
              marginBlockEnd: 24
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              Social Login
            </ProFormCheckbox>
            <a
              style={{
                float: "right"
              }}
            >
              Forgot Password
            </a>
          </div>
        </LoginForm>
      </div>
  )
}
