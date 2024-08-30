const VideoPlayer: React.FC<{ src: string }> = ({ src }) => {
    // Function to detect if the src is a YouTube URL
    const isYouTubeSrc = src && src.includes('youtube.com');
  
    return (
      <div className="video-player">
        {isYouTubeSrc ? (
          <iframe
            width="560"
            height="315"
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <video controls>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    );
  };
  
export default VideoPlayer;
  