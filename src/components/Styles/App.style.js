import styled from 'styled-components';

export const AppContainer = styled.div`
    padding: 10px;
    height: 100vh;
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        border: 2px solid rgb(255, 255, 255);
        border-radius: 1px;
        background-color: rgb(255, 255, 255);
    }
    &::-webkit-scrollbar-thumb {
        background-color: #dbdada;
        border-radius: 4px;
}`

