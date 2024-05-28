import React from "react";
import { Col, Row ,Button, Form, Input, message } from 'antd';
import logoutpic from '../assets/xiaomai2.jpeg'
import { Card } from 'antd';
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

function LogOut(){

    const Navigate = useNavigate()

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
                    <img src={logoutpic} className="logout-pic"/>

                    <Card title='小埋的学习系统'>
                        <Form 
                            labelCol={{
                                md:{
                                    span:4,
                                }
                            }}
                            onFinish={(n) =>{
                                console.log(n)
                                 message.success('登录成功')
                                 Navigate('/study_type') 
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
                                <Button 
                                    htmlType="submit" style={{marginBottom:'10px', margin:'0 auto',display:'block'
                                    } }>登录
                                </Button>
                                <Link to="/register" className="register_bt">没有账户？来注册一个吧！</Link>
                            </Form.Item>
                        </Form>
                    </Card>                        
                </Col>
            </Row>
        </div>
    );
}
export default LogOut