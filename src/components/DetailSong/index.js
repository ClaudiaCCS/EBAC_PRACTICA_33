
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {
    DetailPage,
    DetailCard,
    CoverSection,
    AlbumCover,
    NoCover,
    CoverLabel,
    AlbumInfo,
    BackButton,
    ArtistName,
    AlbumTitle,
    Separator,
    AlbumData,
    DataLabel,
    DataValue,
    DescriptionSection,
    StatusMessage
} from './styles';

function DetailSong() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [album, setAlbum] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await axios.get(
                    `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${id}`
                );

                const albumData = response.data.album;

                if (albumData && albumData.length > 0) {
                    setAlbum(albumData[0]);
                } else {
                    setAlbum(null);
                }
            } catch (error) {
                console.error('Error al consultar el álbum:', error);
                setError('No se pudieron cargar los detalles del álbum.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchAlbum();
    }, [id]);

    if (isLoading) {
        return (
            <DetailPage>
                <StatusMessage>
                    Cargando detalles del álbum...
                </StatusMessage>
            </DetailPage>
        );
    }

    if (error) {
        return (
            <DetailPage>
                <StatusMessage $status="error">
                    {error}
                </StatusMessage>
            </DetailPage>
        );
    }

    if (!album) {
        return (
            <DetailPage>
                <StatusMessage>
                    No se encontró el álbum.
                </StatusMessage>
            </DetailPage>
        );
    }

    return (
        <DetailPage>
            <DetailCard>
                <CoverSection>
                    {album.strAlbumThumb ? (
                        <AlbumCover
                            src={album.strAlbumThumb}
                            alt={`Portada de ${album.strAlbum}`}
                        />
                    ) : (
                        <NoCover>
                            Sin portada disponible
                        </NoCover>
                    )}

                    <CoverLabel>
                        DETALLES DEL ÁLBUM
                    </CoverLabel>
                </CoverSection>

                <AlbumInfo>
                    <BackButton
                        type="button"
                        onClick={() => navigate('/')}
                    >
                        ← Volver al inicio
                    </BackButton>

                    <ArtistName>
                        {album.strArtist || 'Artista desconocido'}
                    </ArtistName>

                    <AlbumTitle>
                        {album.strAlbum || 'Álbum sin título'}
                    </AlbumTitle>

                    <Separator />

                    <AlbumData>
                        <div>
                            <DataLabel>
                                Año de lanzamiento
                            </DataLabel>
                            <DataValue>
                                {album.intYearReleased || 'No disponible'}
                            </DataValue>
                        </div>

                        <div>
                            <DataLabel>Género</DataLabel>
                            <DataValue>
                                {album.strGenre || 'No disponible'}
                            </DataValue>
                        </div>

                        <div>
                            <DataLabel>Estilo</DataLabel>
                            <DataValue>
                                {album.strStyle || 'No disponible'}
                            </DataValue>
                        </div>
                    </AlbumData>

                    <DescriptionSection>
                        <h2>Acerca del álbum</h2>
                        <p>
                            {album.strDescription ||
                                'No hay una descripción disponible para este álbum.'}
                        </p>
                    </DescriptionSection>
                </AlbumInfo>
            </DetailCard>
        </DetailPage>
    );
}

export default DetailSong;
