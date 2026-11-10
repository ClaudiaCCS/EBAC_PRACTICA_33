
import SearchResults from '../../components/SearchResults/index'
import Library from '../../components/Library/index'
import useFetchSong from '../../Hooks/useFetchSong'
import { PrincipalContainer } from './styles'

function Principal() {

    const {
        songs,
        isLoading,
        error,
        searchSongs
    } = useFetchSong()

    return (
        <PrincipalContainer>

            <SearchResults
                songs={songs}
                onSearch={searchSongs}
                isLoading={isLoading}
                error={error}
            />

            <Library />

        </PrincipalContainer>
    );
}

export default Principal

