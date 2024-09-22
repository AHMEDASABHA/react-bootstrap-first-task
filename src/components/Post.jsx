import Avatar from "./ui/Avatar";
import { Image } from "react-bootstrap/Image";
import LikeButton from "./ui/LikeButton";
import CommentButton from "./ui/CommentButton";

export default function Post({ post }) {
  return (
    <div className="shadow-sm px-3 pt-3 bg-body-tertiary rounded">
      <div className="mb-3 p-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-center align-items-center">
            <Avatar
              className="mb-2 me-3"
              width="60px"
              height="60px"
              image={post.avatarImg}
            />
            <p className="h5">{post.name}</p>
          </div>
          <p>{post.time} min</p>
        </div>
        <hr />
        <div>
          <p style="text-align: justify">{post.post}</p>

          {post.images.length != 0 ? (
            <div className="d-flex flex-shrink-1 gap-2 mb-3">
              {post.images.map((image) => (
                <Image
                  key={image.id}
                  className="mb-2"
                  width={image.width}
                  src={image.src}
                />
              ))}
            </div>
          ) : null}

          <div>
            <LikeButton />
            <CommentButton />
          </div>
        </div>
      </div>
    </div>
  );
}
