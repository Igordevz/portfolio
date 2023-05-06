import styled from "styled-components";

export const Container = styled.div`
    background: black;
    height: 1200vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .seta-flex{
        position: fixed;
        z-index: 9;
        bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .seta-flex img{
        width: 20px;
    }
    .seta-flex span{
        margin-inline: 20px;
    }
    .animations-one{
      position: fixed;
      top: 50%;
    }
    .Animation-two{
        height: 100vh;
        width: 40%;
        background: #121214;
        position: fixed;
        top: 0%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        right: 0;
        .content{
            margin-left: 20%;
        }
        h1{
            line-height: 30px;
            max-width: 70%;
            font-weight: 400;
            font-size: 15px;
        }
        .bg-photo{
            margin-bottom: 50px;
            margin-top: -50px;

            display: flex;
            align-items: center;
        }
        .bg-photo .quebra{
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .bg-photo img{
            border-radius: 100% 100% 100% 100%;
            width: 100px;
        }
    }
    #textRpd{
        top: 50%;
        position: fixed;
        max-width: 70%;
    }
    .papel{
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        background: #151419;
        
    }
`