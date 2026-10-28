
import styled from 'styled-components';

export const DetailPage = styled.main`
    min-height: 100vh;
    padding: 32px 20px 48px;
    background:
        radial-gradient(circle at 15% 15%, rgba(177, 91, 190, 0.12), transparent 35%),
        radial-gradient(circle at 85% 85%, rgba(232, 105, 175, 0.10), transparent 35%),
        ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 600px) {
        padding: 20px 12px 32px;
    }
`;

export const DetailCard = styled.section`
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: 36px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 28px;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.extraLarge};
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);

    @media (max-width: 768px) {
        grid-template-columns: minmax(0, 1fr);
        gap: 28px;
        padding: 20px;
    }

    @media (max-width: 480px) {
        gap: 22px;
        padding: 14px;
    }
`;

export const CoverSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0;
`;

export const AlbumCover = styled.img`
    display: block;
    width: 100%;
    max-width: 380px;
    aspect-ratio: 1;
    object-fit: cover;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px) {
        max-width: 300px;
    }

    @media (max-width: 480px) {
        max-width: 240px;
    }
`;

export const NoCover = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 380px;
    aspect-ratio: 1;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.inputBackground};
    border: 1px dashed ${({ theme }) => theme.colors.inputBorder};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: center;
`;

export const CoverLabel = styled.p`
    margin: 16px 0 0;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
`;

export const AlbumInfo = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
`;

export const BackButton = styled.button`
    align-self: flex-start;
    margin-bottom: 28px;
    padding: 9px 14px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryLight};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    font-size: 0.9rem;
    transition: background-color ${({ theme }) => theme.transitions.fast};

    &:hover {
        background-color: ${({ theme }) => theme.colors.surfaceHover};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 3px;
    }

    @media (max-width: 480px) {
        margin-bottom: 20px;
    }
`;

export const ArtistName = styled.p`
    margin: 0 0 8px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1rem;
    font-weight: 600;
    overflow-wrap: anywhere;
`;

export const AlbumTitle = styled.h1`
    margin: 0;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 700;
    line-height: 1.2;
    overflow-wrap: anywhere;
`;

export const Separator = styled.div`
    width: 100%;
    height: 2px;
    margin: 22px 0;
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary},
        transparent
    );
`;

export const AlbumData = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;

    > div {
        min-width: 0;
        padding: 14px;
        background-color: ${({ theme }) => theme.colors.inputBackground};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.borderRadius.medium};
    }

    @media (max-width: 480px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

export const DataLabel = styled.p`
    margin: 0 0 6px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.8rem;
`;

export const DataValue = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: 600;
    overflow-wrap: anywhere;
`;

export const DescriptionSection = styled.section`
    margin-top: 28px;

    h2 {
        margin: 0 0 12px;
        color: ${({ theme }) => theme.colors.primaryLight};
        font-family: ${({ theme }) => theme.fonts.heading};
        font-size: 1.25rem;
    }

    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 0.95rem;
        line-height: 1.8;
        overflow-wrap: anywhere;
        white-space: pre-line;
    }
`;

export const StatusMessage = styled.p`
    width: 100%;
    max-width: 700px;
    margin: 40px auto;
    color: ${({ $status, theme }) =>
        $status === 'error' ? theme.colors.error : theme.colors.primaryLight};
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: center;
`;
