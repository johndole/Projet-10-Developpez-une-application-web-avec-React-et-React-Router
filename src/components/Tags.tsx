import '../styles/Tags.css'; 

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="rounded-tags">
      {tags.map((tag : string, index: number) => (
        <span key={index} className="rounded-tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;