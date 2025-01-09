import { Pause, Play } from "lucide-react"; // Import Play icon as well
import { useState, useRef } from "react"; // Use state and ref for video control
import "../../assets/banner.css"; // Optional for custom styles
import LazyLoad from "react-lazyload";

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(true); // State to track video play/pause
  const videoRef = useRef(null); // Ref to access video element

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause(); // Pause the video
    } else {
      videoRef.current.play(); // Play the video
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };
  return (
    <div className="banner-container">
      <div className="video-wrapper">
        <LazyLoad height={300} offset={100} once>
          <video
            ref={videoRef} // Attach ref to the video element
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
            poster="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c%2F6721ce01a860242b6a351f8b_The%20WORLD%20S%20SMOOTHEST%20cinematic%20PROPERTY%20VIDEO%20_%20SONY%20FX6%20%281%29-poster-00001.jpg"
          >
            <source
              src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c%2F6721ce01a860242b6a351f8b_The%20WORLD%20S%20SMOOTHEST%20cinematic%20PROPERTY%20VIDEO%20_%20SONY%20FX6%20%281%29-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c%2F6721ce01a860242b6a351f8b_The%20WORLD%20S%20SMOOTHEST%20cinematic%20PROPERTY%20VIDEO%20_%20SONY%20FX6%20%281%29-transcode.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </LazyLoad>
        <div className="video-overlay">
          <button
            type="button"
            className="play-pause-button"
            aria-label="Play or Pause Video"
            onClick={handlePlayPause} // Add click handler
          >
            <span className="flex items-center gap-5">
              {isPlaying ? (
                <>
                  <Pause size={36} className="bg-green-800 p-2 rounded-full" />
                  Pause Video
                </>
              ) : (
                <>
                  <Play size={36} className="bg-green-800 p-2 rounded-full" />
                  Play Video
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
