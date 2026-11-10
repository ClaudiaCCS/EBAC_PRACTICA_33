

import LibrarySong from '../LibrarySong/index'
import {useSelector, useDispatch} from 'react-redux'
import {removeSong} from '../../redux/libraryActions'

import {
    LibraryContainer,
    LibraryCard,
    LibraryHeader,
    LibraryIcon,
    LibraryTitle,
    LibraryList,
    EmptyLibraryMessage
} from './styles'

function Library() {

    const dataLibrary = useSelector(state => state)
    const dispatch = useDispatch()

    const removeLibrary = (id) => {
        dispatch(removeSong(id))
    }

    return (
        <LibraryContainer>
            <LibraryCard>
                <LibraryHeader>
                    <div>
                        <LibraryIcon
                            src={require('../../img/icon_list.svg').default}
                            alt="Icono de lista"
                        />

                        <LibraryTitle>
                            Tu biblioteca
                        </LibraryTitle>
                    </div>
                </LibraryHeader>

                <LibraryList>
                    {dataLibrary.length > 0 ? (
                        dataLibrary.map((album) => (
                            <LibrarySong
                                key={album.idAlbum}
                                album={album}
                                removeLibrary={removeLibrary}
                            />
                        ))
                    ) : (
                        <EmptyLibraryMessage>
                            Tu biblioteca está vacía. ¡Agrega tus álbumes favoritos!
                        </EmptyLibraryMessage>
                    )}
                </LibraryList>
            </LibraryCard>
        </LibraryContainer>
    );
}

export default Library;
