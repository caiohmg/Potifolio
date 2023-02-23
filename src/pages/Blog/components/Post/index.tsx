import { PostContainer } from './styles';

interface IPost {
  title: string;
  body: string;
  url: string;
  backgroundImage: string; // Aqui definimos que a prop é opcional
}

export function Post({ title, body, url, backgroundImage }: IPost) {
  return (
    <PostContainer to={url} backgroundImage={backgroundImage} target="_blank">
      
    </PostContainer>
    
    
  );
}




