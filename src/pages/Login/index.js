import { Form, Input, Button, Row, Col } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import "./Login.scss"
function Login() {
    const rules = [
        {
            required: true,
            message: "Không được để trống",
        }
    ]
    const handleLogin = () => {

    };
    return (
        <>
            <div className="login">
                <div className="login__card">
                    <div className="login__card--left">
                        <h1>Hello World.</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                            alias totam numquam ipsa exercitationem dignissimos, error nam,
                            consequatur.
                        </p>
                        <span>Don't you have an account?</span>
                        <Link to="/register">
                            <button>Register</button>
                        </Link>
                    </div>
                    <div className="login__card--right">
                        <h1>Login</h1>
                        <form>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login