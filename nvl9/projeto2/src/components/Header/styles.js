import styled from "styled-components";

export const Container = styled.div`
 grid-area: header;
 height: 105px;
 width: 100%;
 border-bottom-width:1px;
 border-bottom-style: solid;
 border-bottom-color:${({theme}) => theme.COLORS.BACKGROUND_700};

 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 80px;
 background: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;
export const Profile = styled.div`
display: flex;
align-items: center;
gap: 10px;

> img{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}
>div{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 24px;

    span{
        font-size: 14px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    a{
        font-size:14px;
        color: ${({theme}) => theme.COLORS.GRAY_500};
    }
}
`;

export const SearchBar = styled.input`
    width: 630px;
    height: 56px;
    padding-left: 24px;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    background:${({theme}) => theme.COLORS.BACKGROUND_850};
    color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const TextTitleHeader = styled.h1`
 font-size: 24px;
 font-weight: 700;
 color: ${({theme}) => theme.COLORS.ROSE};
`;