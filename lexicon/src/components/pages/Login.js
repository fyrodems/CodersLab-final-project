import React from 'react';
import {initializeApp} from "firebase/app";
import { useRef , useState , useEffect} from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4jAceDaHiQQOj4snL_AMSO-cu4xiO3c8",
    authDomain: "lexicon-0.firebaseapp.com",
    projectId: "lexicon-0",
    storageBucket: "lexicon-0.appspot.com",
    messagingSenderId: "972771676628",
    appId: "1:972771676628:web:4d759116050e13fb61c641",
    measurementId: "G-JJK6RTL9DR"
};

initializeApp(firebaseConfig);

const auth = getAuth();

function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

function logout() {
    return signOut(auth);
}

function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}

const Login = () => {

    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {
        setLoading(true);
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Ble!");
        }
        setLoading(false);
    }

    async function handleLogin() {
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Error!");
        }
        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true);
        try {
            await logout();
        } catch {
            alert("Error!");
        }
        setLoading(false);
    }

    return (
        <section className="login__container">
            <div className="container">
                {/*<div className="login__header">Currently logged in as: { currentUser?.email } </div>*/}
                {setLoading === true ? <span className="login__header">Currently logged in as: { currentUser?.email } </span> : <span className="login__header">Learning is better with an account</span>}

                <div className="login__field">
                    <input className="login__input" ref={emailRef} placeholder="Email" />
                    <input className="login__input" ref={passwordRef} type="password" placeholder="Password" />
                </div>

                <button className="login__btn" disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
                <button className="login__btn" disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
                <button className="login__btn" disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
            </div>
        </section>
    );
};

export default Login;