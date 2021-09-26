
const Post = ({match}) => {
  return (
    <>
      <div>id is {match.params.id}</div>
    </>
  );
};

export default Post;
