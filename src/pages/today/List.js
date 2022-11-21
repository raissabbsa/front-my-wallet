import styled from "styled-components"

export default function Lis({ items }) {
    return (
        <Container color={items.type}>
            <Infos>
                <p>{items.date}</p>
                <h2>{items.description}</h2>
            </Infos>
            <h3>{Number(items.value).toFixed(2)}</h3>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    margin-bottom: 20px;
    width: 100%;
    font-size: 20px;   
    h3{
        color: ${props => props.color === "entrada" ? "#03AC00" : "#C70000"}
    }
`
const Infos = styled.div`
    display: flex;
    &>p{
        color: #C6C6C6;
        margin-right: 10px;

    }
    h2{
        color: #000000;
    }
`