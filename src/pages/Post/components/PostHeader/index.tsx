import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";

export function PostHeader() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1)
  }
  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          variant="iconLeft"
        />
        <ExternalLink text="Ver no Github" href="https://github.com/caiohmg/calendario-da-copa" target="_blank" />
      </header>

    
    </PostHeaderContainer>
  );
}
