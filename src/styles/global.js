import styled from 'styled-components'

export const DefaultContainer = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

    @media (max-width: 360px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`

export const SearchBar = styled.input`
    height: 60px;
    width: 100%;
    padding: 0 20px;   
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(10px);
`

export const WeatherCard = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 20px;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(10px);
`

export const WeatherGraph = styled.div`
    height: 500px;
    width: 100%;
    padding: 20px 20px;
    margin: 10px 0;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);    
`