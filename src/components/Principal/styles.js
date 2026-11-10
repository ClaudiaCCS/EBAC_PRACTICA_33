import styled from 'styled-components';

export const PrincipalContainer = styled.main`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
    width: 100%;
    min-height: 100vh;
    padding: 24px 16px;

    background:
        radial-gradient(
            circle at 15% 20%,
            rgba(177, 91, 190, 0.12),
            transparent 35%
        ),
        radial-gradient(
            circle at 85% 80%,
            rgba(232, 105, 175, 0.10),
            transparent 35%
        ),
        ${({ theme }) => theme.colors.background};

    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding: 40px 24px;
        gap: 20px;
    }
`;