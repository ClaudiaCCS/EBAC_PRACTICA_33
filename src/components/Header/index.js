import imgLogo from '../../img/logo.png';
import imgPerfil from '../../img/perfil.png';

import {
    HeaderContainer,
    HeaderImage,
    HeaderTitle
} from './styles';

function Header() {
    return (
        <HeaderContainer>
            <HeaderImage src={imgLogo} alt="Logo de SoundGloss" />

            <HeaderTitle>
                Sound<span>Gloss</span>
            </HeaderTitle>

            <HeaderImage
                src={imgPerfil}
                alt="Icono de perfil"
            />
        </HeaderContainer>
    );
}

export default Header;