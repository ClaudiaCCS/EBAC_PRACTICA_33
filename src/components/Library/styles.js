
import styled from 'styled-components';

export const LibraryContainer = styled.section`
    min-width: 0;
    width: 100%;
`;

export const LibraryCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const LibraryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    > div {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
    }
`;

export const LibraryIcon = styled.img`
    display: block;
    width: 25px;
    height: 25px;
    object-fit: contain;
    flex-shrink: 0;
`;

export const LibraryTitle = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.25rem;
    font-weight: 700;
`;

export const LibraryList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
    width: 100%;
`;

export const EmptyLibraryMessage = styled.p`
    margin: 8px 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.95rem;
    text-align: center;
    line-height: 1.5;
`;
