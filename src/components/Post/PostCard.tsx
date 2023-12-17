/* @jsx createElement */
import { createElement } from "@react/render";
import { Link } from "@react-router-dom/Link";

export const PostCard = (data: any) => {
  return (
    <Link to={`/article/${data.post.key}`}>
      <article>
        <img
          src={data.post.thumbnailConfig.imageUrl}
          alt={data.post.thumbnailConfig.imageAlt}
          width={300}
          height={200}
        />
        <div>
          <h3>{data.post.title}</h3>
          <p>{data.post.subtitle}</p>
        </div>
      </article>
    </Link>
  );
};
