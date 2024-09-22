import EnterPost from "../components/EnterPost";
import Post from "../components/Post";
import avatar2 from "../assets/avatar2.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import forest from "../assets/forest.jpg";
import snow from "../assets/snow.jpg";
export default function Posts() {
  return (
    <>
      <EnterPost />
      <Post
        post={{
          name: "John Doe",
          avatarImg: avatar2,
          time: 1,
          post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          images: [
            {
              id: 1,
              src: forest,
              width: "50%",
            },
            {
              id: 2,
              src: snow,
              width: "50%",
            },
          ],
        }}
      />
      <Post
        post={{
          name: "Jane Doe",
          avatarImg: avatar5,
          time: 16,
          post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        }}
      />
      <Post
        post={{
          name: "Angie Jane",
          avatarImg: avatar6,
          time: 1,
          post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          images: [
            {
              id: 1,
              src: snow,
              width: "100%",
            },
          ],
        }}
      />
    </>
  );
}
