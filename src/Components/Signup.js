import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

const Signup = props =>{
   

        return (
            <form>
                <input type='email'
                    name='email'
                    placeholder='email address (required)'
                    value={ props.email }
                    onChange={ props.updateInput }
                />
                <input type='text'
                    name='username'
                    placeholder='username (required)'
                    value={ props.username }
                    onChange={ props.updateInput }
                />
                <input type='password'
                    name='password'
                    placeholder='password (required)'
                    value={ props.password }
                    onChange={ props.password }
                />
            </form>
        )
    
}

export default Signup;


