import { useLocation, useParams } from "react-router";

const Post = () => {

  const {id} = useParams();

  return (
    <>
      <div>id is {id}</div>
    </>
  );
};

export default Post;
