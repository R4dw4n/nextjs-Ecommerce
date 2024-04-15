//This component is used for login/register or any other form signing page
import { Button, ConfigProvider, Form, Input } from "antd"
import Link from "next/link"
import FormInput from "./FormInput"

const Login = (props) => {
  const paddingProp = {
    "94": "py-[96px]",
    "20": "py-[20px]"
  }
  return (
    <div className="flex h-full w-full">
      <div style={{
        backgroundImage: `url(${props.image})`,
        width: '50%',
        height: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50%'
      }}>
      </div>
      <div className={`${paddingProp[props.paddingY]} px-20 w-1/2 h-full`}>
        <div className="py-8 ">
          <h1 className="text-3xl text-maingold font-semibold">{props.title}</h1>
          <p className="text-base text-lightgray font-light">{props.text}</p>
        </div>
        <ConfigProvider 
          theme={{
            components: {
              Form: {
                labelColor: '#f5cd47',
                labelRequiredMarkColor: 'lightgray'
              },
            },
          }}>
          <Form layout="vertical" onFinish={props.onFinish}>
            {props.data.map((item, ind) => {
              return (
                <FormInput key={ind} input={item.input} formItemProps={item.formItemProps}/>
              )
            })}
            <Form.Item name="btn">
              <Button className="w-full h-12 bg-maingold text-white border-none" htmlType="submit">
                {props.btnText}
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>
        {/* FORM TAIL */}
        <div className="flex justify-between items-center mt-4">
          {props.tail.map((item, ind) => (
            <Link key={ind} href={item.linkUrl} className="text-sm text-lightgray hover:text-white">
              {item.linkText}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Login