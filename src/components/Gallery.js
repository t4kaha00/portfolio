import { useCallback, useEffect, useState } from "react";
import "../styles/gallery.css";

// Replace these URLs with your own captured photos later.
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://picsum.photos/id/1015/800/600",
    alt: "River and mountains",
  },
  {
    id: 2,
    src: "https://picsum.photos/id/1025/800/600",
    alt: "Pug in a blanket",
  },
  { id: 3, src: "https://picsum.photos/id/1035/800/600", alt: "Waterfall" },
  {
    id: 4,
    src: "https://picsum.photos/id/1043/800/600",
    alt: "Street with view",
  },
  {
    id: 5,
    src: "https://picsum.photos/id/1053/800/600",
    alt: "Morning coffee",
  },
  { id: 6, src: "https://picsum.photos/id/1062/800/600", alt: "Nature path" },
  {
    id: 7,
    src: "https://picsum.photos/id/1070/800/600",
    alt: "Birds on a wire",
  },
  { id: 8, src: "https://picsum.photos/id/1084/800/600", alt: "Walrus" },
  {
    id: 9,
    src: "https://picsum.photos/id/1081/800/600",
    alt: "City buildings",
  },
  { id: 10, src: "https://picsum.photos/id/1082/800/600", alt: "Riverside" },
  {
    id: 11,
    src: "https://picsum.photos/id/1080/800/600",
    alt: "Sugarloaf peak",
  },
  {
    id: 12,
    src: "https://picsum.photos/id/1069/800/600",
    alt: "Coast and palm trees",
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const go = useCallback((index) => {
    setActiveIndex((index + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(activeIndex + 1);
      if (e.key === "ArrowLeft") go(activeIndex - 1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, go]);

  return (
    <div className="gallery">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {GALLERY_IMAGES.map((image, i) => (
          <button
            key={image.id}
            className="gallery-item"
            onClick={() => setActiveIndex(i)}
            aria-label={`Open image: ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="gallery-thumb"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button className="lightbox-close" onClick={close} aria-label="Close">
            ×
          </button>
          <button
            className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              go(activeIndex - 1);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            className="lightbox-image"
            src={GALLERY_IMAGES[activeIndex].src}
            alt={GALLERY_IMAGES[activeIndex].alt}
          />
          <button
            className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              go(activeIndex + 1);
            }}
            aria-label="Next image"
          >
            ›
          </button>
          <div className="lightbox-caption">
            {GALLERY_IMAGES[activeIndex].alt}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
