
import {
    LibrarySongCard,
    AlbumInfo,
    PlayIcon,
    AlbumCover,
    AlbumName,
    ArtistInfo,
    AlbumActions,
    AlbumYear,
    RemoveButton,
    RemoveIcon
} from './styles';

export default function LibrarySong({ album, removeLibrary }) {
    const {
        idAlbum,
        strAlbumThumb,
        strAlbum,
        strArtist,
        intYearReleased
    } = album;

    return (
        <LibrarySongCard>
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

                <RemoveButton
                    type="button"
                    onClick={() => removeLibrary(idAlbum)}
                    aria-label={`Eliminar ${strAlbum} de mi biblioteca`}
                    title="Eliminar de mi biblioteca"
                >
                    <RemoveIcon
                        src={require('../../img/icono_eliminar.png')}
                        alt=""
                    />
                </RemoveButton>
            </AlbumActions>
        </LibrarySongCard>
    );
}
