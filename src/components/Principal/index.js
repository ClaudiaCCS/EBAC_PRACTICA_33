

import SearchResults from '../../components/SearchResults/index'
import Library from '../../components/Library/index'
import { PrincipalContainer } from './styles'

function Principal() {

    return (
        <PrincipalContainer>

            <SearchResults />

            <Library />

        </PrincipalContainer>
    );
}

export default Principal;
