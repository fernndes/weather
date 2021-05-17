import styled from 'styled-components'

export const DefaultContainer = styled.div`
    width: 70%;
    margin: 40px auto;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`

export const SearchBar = styled.input`
    height: 60px;
    width: 100%;
    padding: 0 20px;   
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
`

export const WeatherCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 20px;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const WeatherGraph = styled.div`
    height: 500px;
    width: 100%;
    padding: 20px 20px;
    margin: 10px 0;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
`


