import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';
import MyAccount from './MyAccount';
import Table from './Table';
import Breadcrumb from './Breadcrumb';
import ModalBox from './Modalbox';
import Toaster from './Toaster';
import DatePicker from './DatePicker';


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [displayError, setDisplayError] = useState(false);

    function handleOnChangeUsername(event){
        setUsername(event.target.value)
        console.log(username)
    }

    function handleOnChangePassword(event){
        setPassword(event.target.value)
        console.log(password)
    }

    function handleOnSubmit(event){
        event.preventDefault();
        if(!username || !password){
            setDisplayError(true);
        }
        else {
            setDisplayError(false);
        }
        console.log(event);
    }

    return (
        <div className="container">
            <br/>
            <h2>Sign in</h2>
            <p>Welcome back</p>
            <form className="d-flex flex-column align-items-center" onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="username"><b>Username</b></label>
                    <input 
                        value={username}
                        onChange={handleOnChangeUsername}
                        type="text" 
                        className="form-control user-input" 
                        placeholder="Enter username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd"><b>Password</b></label>
                    <input 
                        value={password}
                        onChange={handleOnChangePassword}
                        type="password" 
                        className="form-control user-input" 
                        id="pwd" 
                        placeholder="Enter password" 
                        name="password" 
                    />
                </div>
                {displayError ? (<div>
                    User or password incorrect
                </div>) : null}
                <div className="btn-container">
                    <button type="submit" className="btn btn-primary submit-btn">Sign in</button>
                </div>
            </form>
            <br/>
            <p>OR</p>
            <p>Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>.</p>
            <MyAccount user={{ 
                firstName: 'John', 
                lastName: 'Doe'
                }}/>
            <Table/>
            <Breadcrumb path="/" />
            <ModalBox/>
            <Toaster/>
            <DatePicker/>
        </div>
    )
}

export default LoginPage;