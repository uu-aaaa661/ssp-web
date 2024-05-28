import React from "react";
import { Col, Row ,Button,  Form, Input, message } from 'antd';
import logoutpic from '../assets/xiaomai2.jpeg'
import { Card } from 'antd';
import { useNavigate} from "react-router-dom";
import registerpic from '../assets/xiaomai4.jpg'


function Register(){
    const Navigate = useNavigate();
    const [messageApi] = message.useMessage();
    const info = () => {
        messageApi.info('注册成功');
      };

    return (
        <div>
            <Row>
                <Col 
                    md={{
                        span:8,
                        push:8
                    }}
                    xs={{
                        span:22,
                        push:1
                    }}
                    >
                    <img src={registerpic} className="registerpic"/>

                    <Card title='小埋的学习系统'>
                        <Form 
                            labelCol={{
                                md:{
                                    span:4,
                                }
                            }}
                            onFinish={(info) =>{
                                console.log(info)
                                 message.success('注册成功')
                                 Navigate('/') 
                        }}
                        >
                            <Form.Item label='用户名' name='userName' rules={[
                                {
                                    required:true,
                                    message:'请输入用户名'
                                }
                            ]}>
                                <Input placeholder="请输入用户名"/>
                            </Form.Item>
                            <Form.Item label='密码' name='password' rules={[
                                {
                                    required:true,
                                    message:'请输入密码'
                                }
                            ]}>
                                <Input.Password placeholder="请输入密码"/>
                            </Form.Item>
                            <Form.Item >
                                <Button onClick={info}
                                    htmlType="register" style={{marginBottom:'10px', margin:'0 auto',display:'block'
                                    } }>
                                        注册
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>                        
                </Col>
            </Row>
        </div>
    );
}

export default Register