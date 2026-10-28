import styled from 'styled-components';

export const HeaderContainer = styled.header`
    min-height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 12px 20px;

    @media (max-width: 480px) {
        min-height: 5rem;
        gap: 8px;
        padding: 10px 12px;
    }
`;

export const HeaderImage = styled.img`
    display: block;
    width: 48px;
    height: 48px;
    object-fit: contain;
    flex-shrink: 0;

    &:first-child {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 64px;
    }

    @media (max-width: 480px) {
        width: 32px;
        height: 32px;

        &:first-child {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 44px;
        }
    }
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    color: #FBDEE4;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(1.2rem, 4vw, 2rem);
    font-weight: 600;
    text-align: center;

    span {
        color: #FC8DB8;
        font-family: ${({ theme }) => theme.fonts.decorative};
        font-weight: 400;
        font-style: normal;
    }

    @media (max-width: 480px) {
        font-size: 1.25rem;
    }
`;