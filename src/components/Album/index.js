
import { useNavigate } from 'react-router-dom';

import {
    AlbumCard,
    AlbumInfo,
    PlayIcon,
    AlbumCover,
    AlbumName,
    ArtistInfo,
    AlbumActions,
    AlbumYear,
    AddButton,
    AddIcon,
    DetailsButton
} from './styles';

export default function Album({ album, addLibrary }) {
    const navigate = useNavigate();

    const {
        idAlbum,
        strAlbumThumb,
        strAlbum,
        strArtist,
        intYearReleased
    } = album;

    const verDetalles = () => {
        navigate(`/song/${idAlbum}`);
    };

    return (
        <AlbumCard>
            <AlbumInfo>
                <PlayIcon
                    src={require('../../img/icono_play.png')}
                    alt="Reproducir"
                />

                <AlbumCover
                    src={strAlbumThumb}
                    alt={`Portada del álbum ${strAlbum}`}
                />

                <AlbumName>{strAlbum}</AlbumName>
            </AlbumInfo>

            <ArtistInfo>
                <p>{strArtist}</p>
            </ArtistInfo>

            <AlbumActions>
                <AlbumYear>{intYearReleased}</AlbumYear>

                <AddButton
                    type="button"
                    onClick={() => addLibrary(album)}
                    aria-label={`Agregar ${strAlbum} a mi biblioteca`}
                    title="Agregar a mi biblioteca"
                >
                    <AddIcon
                        src={require('../../img/icono_agregar.png')}
                        alt=""
                    />
                </AddButton>

                <DetailsButton
                    type="button"
                    onClick={verDetalles}
                >
                    Ver detalles
                </DetailsButton>
            </AlbumActions>
        </AlbumCard>
    );
}
