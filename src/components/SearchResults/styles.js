import styled from 'styled-components';

export const SearchContainer = styled.section`
    min-width: 0;
    width: 100%;
`;

export const SearchLibrary = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin: 0 0 8px;
    gap: 16px;

    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
`;

export const SearchHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;

    > div {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;

export const SearchTitle = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1.25rem;
    font-weight: 700;
`;

export const SearchBar = styled.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 12px;
    margin-bottom: 4px;

    @media (max-width: 600px) {
        grid-template-columns: minmax(0, 1fr) auto;
    }
`;

export const SearchLabel = styled.label`
    color: #D8CBD8;
    font-size: 0.85rem;

    @media (max-width: 600px) {
        grid-column: 1 / -1;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    min-width: 0;
    padding: 10px 12px;

    background-color: ${({ theme }) => theme.colors.inputBackground};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    border-radius: 9px;
    outline: none;

    &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px rgba(240, 138, 184, 0.12);
    }
`;

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
        background-color: ${({ theme }) => theme.colors.surfaceHover};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }
`;

export const SearchIcon = styled.img`
    display: block;
    width: 25px;
    height: 25px;
    object-fit: contain;
`;

export const AlbumList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
`;

export const StatusMessage = styled.p`
    margin: 0;
    color: ${({ $status, theme }) =>
        $status === 'error'
            ? theme.colors.error
            : theme.colors.primaryLight};
    font-size: 1rem;
    font-weight: 500;
    overflow-wrap: anywhere;
`;