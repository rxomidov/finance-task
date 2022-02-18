import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import {Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons/lib";
import {loginStart} from "../../services/actions/loginActions";

const schema = yup.object().shape({
    login: yup.string().required().default("This field is required!"),
    password: yup.string().required().default("This field is required!"),
});

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const {handleSubmit, control, formState: {errors}, reset, register} = methods;

    const onSubmit = (data: object) => {
        console.log(data);
        dispatch(loginStart(data));
    };

    const resetForm = () => {
        reset({
            login: null,
            password: null,
        });
    };

    return (
        <LoginWrapper>
            <div className="container-flui">
                <div className="row">
                    <div className="col-md-6">
                        <div className="login-left">
                            <div className="text-center" style={{marginTop: "20%", marginBottom: "10%"}}>
                                <h3>Logo</h3>
                                <h3 className="mt-4">Sign In</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="login-form">
                            <div style={{width: 400}}>
                                <div className="text-center">
                                    <h3>logo</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label className="my-1">Login</label>
                                        <Controller
                                            name="login"
                                            rules={{required: true}}
                                            render={({
                                                         field: {onChange, onBlur, value, ref},
                                                         fieldState: {invalid, isTouched, isDirty, error},
                                                         formState,
                                                     }) => (
                                                <Input
                                                    onChange={onChange} onBlur={onBlur} value={value}
                                                    placeholder="Enter your login here"
                                                />
                                            )}
                                            control={control}
                                            defaultValue=""
                                        />
                                        {errors.login && <div className="text-danger float-end">login is required</div>}
                                    </div>
                                    <div className="mt-2">
                                        <label className="my-1">Password</label>
                                        <Controller
                                            name="password"
                                            rules={{required: true}}
                                            render={({
                                                         field: {onChange, onBlur, value, ref},
                                                         fieldState: {invalid, isTouched, isDirty, error},
                                                         formState,
                                                     }) => (
                                                <Input.Password
                                                    onChange={onChange} onBlur={onBlur} value={value}
                                                    placeholder="Enter your password here"
                                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                                />
                                            )}
                                            control={control}
                                            defaultValue=""
                                        />
                                        {errors.password && <div className="text-danger float-end">password is required</div>}
                                    </div>
                                    <div className="mt-2">
                                        <div className="text-center">
                                            <Link to="/register" className="sign-up">Register</Link>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="text-uppercase sign-in">Sign In</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoginWrapper>
    );
};

export default Login;

const LoginWrapper = styled.div`
  background: var(--background-color);
  width: 100%;
  height: 100%;
  padding: 2rem;
  .login-left{
    color: #ffffff;
    display:flex;
    justify-content: center;
    h3{
      font-weight: 700;
      color: #ffffff;
      font-size: 48px;
      line-height: 30px;
      text-transform:uppercase;
    }
  }
  .login-form{
    background: #ffffff;
    padding: 2rem;
    box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    height: calc(100vh - 4rem);
    display:flex;
    align-items: center;
    justify-content:center;
    h3{
      font-weight: 700;
      font-size: 26px;
      line-height: 30px;
      text-transform:uppercase;
    }
  }
  .sign-up{
    color: var(--text-color);
  }
  .sign-in{
    background: var(--text-color);
    transition: var(--main-transition);
    color: #fff;
    padding: 0.5rem 3rem;
    border: none;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
    border-radius: 1.5px;
    :hover{
      background: #444;
    }
  }
`;