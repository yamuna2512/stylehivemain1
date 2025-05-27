import React from "react";
import { Link } from 'react-router-dom';

import SignInIcon from '../../assets/images/Sign-in.png';

export default function SignInLink(){
    return (
        <li>
            <Link ClassName= "menu__item" to="/sign-in">
            <img ClassName="sign-in-icon" src={SignInLink} alt="" />
            Sign In
            </Link>
        </li>
    );
}