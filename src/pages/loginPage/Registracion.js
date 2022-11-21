import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Registracion() {
    const navigate = useNavigate()
    const [isAble, setAble] = useState(true)
    const [form, setForm] = useState({ name: "", email: "", password: "", checkPassword: "" })
    let checkPassword

    function fillform(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function submitForm(e) {
        e.preventDefault()
        setAble(false)

        const user = {
            name: form.name,
            email: form.email,
            password: form.password
        }
        if (form.password === form.checkPassword) {
            const URL = "https://my-wallet-ccyq.onrender.com/sign-up"
            const promise = axios.post(URL, user)
            promise.then(res => {
                navigate("/")
            })
            promise.catch(err => {
                alert(err.response.data.message)
                setAble(true)
            })
        }else{
            setAble(true)
            alert("As senhas precisam ser iguais")
        }



    }

    return (
        <Container>
            <div>MyWallet</div>
            <form onSubmit={submitForm}>
                <input
                    placeholder="Nome"
                    name="name"
                    type="name"
                    value={form.name}
                    onChange={fillform}
                    disabled={isAble ? "" : "disabled"}
                    required
                />
                <input
                    placeholder="E-mail"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={fillform}
                    disabled={isAble ? "" : "disabled"}
                    required
                />
                <input
                    placeholder="Senha"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={fillform}
                    disabled={isAble ? "" : "disabled"}
                    required
                />
                <input
                    placeholder="Confirme a senha"
                    name="checkPassword"
                    type="password"
                    value={checkPassword}
                    onChange={fillform}
                    disabled={isAble ? "" : "disabled"}
                    required
                />

                <button disabled={isAble ? "" : "disabled"} type="submit">Cadastrar</button>
            </form>
            <p onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</p>

        </Container>
    )
}

const Container = styled.div`
    background-color: #9257BE;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &>div{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: white;
        margin-bottom: 24px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    
    input{
        width: 80vh;
        height: 58px;
        margin-bottom: 13px;
        border-radius: 5px;
        border: none;
        font-size: 18px;
        padding: 10px;
    }

    button{
        background-color: #A863D6;
        width: 83vh;
        height: 58px;
        margin-bottom: 13px;
        text-align: center;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        color: white;
        cursor: pointer;
    }
    &>p{
        margin-top: 20px;
        font-size: 20px;
        color: white;
        font-weight: 700;
        cursor: pointer;
        margin-bottom: 40px;    }
`