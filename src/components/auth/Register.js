import React, { useRef } from "react"
import { withRouter } from "react-router-dom"
import TokenAuth from "../../hooks/TokenAuth"



const Register = props => {
    const email = useRef()
    const userName = useRef()
    const lastName = useRef()
    const password = useRef()
    const firstName = useRef()
    const home_city = useRef()
    const home_state = useRef()
    const verifyPassword = useRef()
    const { register } = TokenAuth()

    const handleRegister = (e) => {
        e.preventDefault()

        const newUser = {
            "username": userName.current.value,
            "first_name": firstName.current.value,
            "last_name": lastName.current.value,
            "home_city": home_city.current.value,
            "home_state": home_state.current.value,
            "email": email.current.value,
            "password": password.current.value
        }

        register(newUser).then(() => {
            props.history.push({
                pathname: "/"
            })
        })
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register to use Saturday in the Park</h1>
                <fieldset>
                    <label htmlFor="userName"> Username </label>
                    <input ref={userName} type="text"
                        name="userName"
                        className="form-control"
                        placeholder="Username"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputAddress"> Home City </label>
                    <input ref={home_city} type="text"
                        name="home_city"
                        className="form-control"
                        placeholder="Home City"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputAddress"> Home State </label>
                    <input ref={home_state} type="text"
                        name="home_state"
                        className="form-control"
                        placeholder="Home State"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Register and Sign in
                    </button>
                </fieldset>
            </form>
        </main>
    )
}
export default withRouter(Register)