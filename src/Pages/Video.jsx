export default function Video() {
  return (
    <>
      <div className="p-2 m-2">
        <video
          className="background-video"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
          src="/assets/BD/video_1.mp4"
          autoPlay
          loop
          muted
        />
        <div className="content">
          <h1>Greeting Card Gallery</h1>
          <p>Find the perfect card for every occasion!</p>
        </div>
      </div>
    </>
  );
}
