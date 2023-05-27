export default function Photos({ photos }) {
  return (
    <div className="grid-container">
      {photos.slice(0, 9).map((element) => (
        <div className="grid-item">
          <img className="image" src={element.previewURL} alt="" />
        </div>
      ))}
    </div>
  );
}
