import { useCallback, useState } from "react";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/Searchinput";
import { PostsListContainer } from "./styles";
import fotoBlog from "../../assets/blog.svg";
import DtMoney from "../../assets/DT-money.png";
import Cronometro from "../../assets/cronometro.svg";
import CoffeDelivery from "../../assets/coffeDelivery.svg";
import CalendarioCopa from "../../assets/CalendarioDaCopa.png";

const username = "caiohmg";
const repoName = "Github";

interface IPost {
  title: string;
  body: string;
  url: string;
  backgroundImage: string;
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );
        setPosts(
          response.data.items.map((item: any) => ({
            title: item.title,
            body: item.body,
            url: item.html_url,
          }))
        );
      } catch (err) {
        console.error(err);
      }
    },
    [username, repoName]
  );

  return (
    <>
      <Profile />
      <SearchInput
        postsLength={posts.length}
        getPosts={getPosts}
        onSearch={function (query?: string | undefined): Promise<void> {
          throw new Error("Function not implemented.");
        }}
      />
      <PostsListContainer>
        {posts.map((post) => (
          <Post
            key={post.url}
            title={post.title}
            body={post.body}
            url={post.url}
            backgroundImage={post.backgroundImage}
          />
        ))}
        <Post
          title=""
          body=""
          url="https://blogignite.netlify.app/"
          backgroundImage={fotoBlog}
        />
        <Post
          title=""
          body=""
          url="https://financasignite.netlify.app/"
          backgroundImage={DtMoney}
        />
        <Post
          title=""
          body=""
          url="https://temporizadorignite.netlify.app/"
          backgroundImage={Cronometro}
        />
        <Post
          title=""
          body=""
          url="https://prismatic-sawine-dbf9d4.netlify.app/"
          backgroundImage={CoffeDelivery}
        />

        <Post
          title=""
          body=""
          url="https://effulgent-gelato-945b73.netlify.app/"
          backgroundImage={CalendarioCopa}
          />
          
        
         
         
            
           
        
      </PostsListContainer>
    </>
  );
}
