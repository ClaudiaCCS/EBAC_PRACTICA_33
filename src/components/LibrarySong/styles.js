import styled from 'styled-components';

export const LibrarySongCard = styled.article`
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr) auto;
    align-items: center;
    gap: 12px;
    width: 100%;
    min-width: 0;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    transition: background-color ${({ theme }) => theme.transitions.fast};

    &:hover {
        background-color: ${({ theme }) => theme.colors.surfaceHover};
    }

    
@media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 10px;

    > div:nth-child(1),
    > div:nth-child(2),
    > div:nth-child(3) {
        grid-column: 1;
        grid-row: auto;
    }

    > div:nth-child(3) {
        justify-content: flex-start;
        flex-wrap: wrap;
    }
}

`;

export const AlbumInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`;

export const PlayIcon = styled.img`
    display: block;
    width: 18px;
    height: 18px;
    object-fit: contain;
    flex-shrink: 0;
`;

export const AlbumCover = styled.img`
    display: block;
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    flex-shrink: 0;

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
    }
`;

export const AlbumName = styled.p`
    margin: 0;
    min-width: 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
    font-weight: 600;
    overflow-wrap: anywhere;
`;

export const ArtistInfo = styled.div`
    min-width: 0;

    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 0.8rem;
        overflow-wrap: anywhere;
    }
`;

export const AlbumActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
`;

export const AlbumYear = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 0.8rem;
    white-space: nowrap;
`;

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 5px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background: transparent;
    cursor: pointer;
    transition: background-color ${({ theme }) => theme.transitions.fast};

    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }
`;

export const RemoveIcon = styled.img`
    display: block;
    width: 24px;
    height: 24px;
    object-fit: contain;
`;