import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import fotoPerfil from "../../../../assets/foto-perfil.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src={fotoPerfil} />

      <ProfileDetails>
        <header>
          <h1>Caio Henrique</h1>

          <ExternalLink
            text="Github"
            href="https://github.com/caiohmg"
            target="_blank"
          />
        </header>
        <p>
          Olá! Meu nome é Caio Henrique e sou um desenvolvedor front-end junior
          com habilidades em HTML, CSS, Bootstrap, JavaScript, TypeScript e
          React. Este é meu portfólio, onde você pode ver meu trabalho e avaliar
          minhas competências em desenvolvimento de aplicações web. Estou
          ansioso para contribuir com minhas habilidades e aprender mais no
          mundo do desenvolvimento front-end.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:caiohmg@gmail.com" target="_blank">caiohmg@gmail.com</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/caio-henrique-moraes-gon%C3%A7alves-5b4a74199/" target="_blank">Linkedin</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faWhatsapp} />
            <a href="https://wa.me/5511982813448" target="_blank">WhatsApp</a>
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
