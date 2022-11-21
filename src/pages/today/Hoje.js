import styled from "styled-components"
import { TokenContext } from "../../contexts/TokenContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import Records from "./Records"
import { useNavigate } from "react-router-dom"

export default function Today() {
    const navigate = useNavigate()
    const { token } = useContext(TokenContext)
    const [infos, setInfos] = useState([])
    const [user, setUser] = useState()

    useEffect(getInfos, [token])

    function getInfos() {
        const URL = "https://my-wallet-ccyq.onrender.com/user"
        const config = {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }
        if (token) {
            const promise = axios.get(URL, config)
            promise.then(res => {
                setUser(res.data.user)
                setInfos(res.data.registry)
            })
            promise.catch(err => {
                console.log(err)
            })
        }
    }

    function exit() {
        const URL = "https://my-wallet-ccyq.onrender.com/user"
        const config = {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }
        if(token){
            const promise = axios.delete(URL, config)
            promise.then(res => {
                navigate("/")
            })
            promise.catch(err => {
                console.log(err)
            })
        }
    }


    return (
        <Container>
            <div>
                <h1>{user ? `Olá ${user.name}` : ""}</h1>
                <ion-icon onClick={exit} name="exit-outline"></ion-icon>
            </div>
            <Records infos={infos} />
            <Botoes>
                <div>
                    <ion-icon onClick={() => navigate("/entrada")} name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </div>
                <div>
                    <ion-icon onClick={() => navigate("/saida")} name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </div>
            </Botoes>

        </Container>)
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top:  25px;
    ion-icon{
        font-size: 24px;
        cursor: pointer;
    }
    &>div{
        display: flex;
        justify-content: space-between;
        width: 70vh;
        font-size: 20px;
        font-weight: 700;
        color: white;
        margin-bottom: 22px;
    }
`

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70vh;
    ion-icon{
        font-size: 30px;
        cursor: pointer;
    }
    
    &>div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30vh;
        height: 114px;
        background-color: #A863D6;
        padding: 10px;
        border-radius: 10px;
    }
`
