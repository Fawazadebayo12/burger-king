export const NewsCard = ({ image, title, content, link }) => {
    return (
      <>
        <div className="burger1">
        <a href={link}>
          <img
            src={image}
            alt=""
            width={"70%"}
            className="image22"
            style={{ marginTop: "0.5rem" }}
          />
            <h2 className="title">{title}</h2>
            <p className="content1">{content}</p>
        </a>
        </div>
      </>
    );
  };
  