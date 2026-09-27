
import React, { useEffect, useState } from "react";
import { RiImage2Line } from "react-icons/ri";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const images = [
  {
    id: 1,
    src: "/images/gallery1.jpg",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    src: "/images/gallery2.jpg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: "/images/gallery3.jpg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    src: "/images/gallery4.jpg",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    src: "/images/gallery5.jpg",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    src: "/images/gallery6.jpg",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    src: "/images/gallery7.jpg",
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    src: "/images/gallery8.jpg",
    alt: "Gallery Image 8",
  },
  {
    id: 9,
    src: "/images/gallery9.jpg",
    alt: "Gallery Image 8",
  },
  {
    id: 10,
    src: "/images/gallery10.jpg",
    alt: "Gallery Image 8",
  },
  {
    id: 11,
    src: "/images/gallery11.jpg",
    alt: "Gallery Image 8",
  },
  {
    id: 12,
    src: "/images/gallery12.jpg",
    alt: "Gallery Image 8",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e?.stopPropagation();

    setSelectedImage((current) => {
      if (current === null) return null;

      return (current + 1) % images.length;
    });
  };

  const previousImage = (e) => {
    e?.stopPropagation();

    setSelectedImage((current) => {
      if (current === null) return null;

      return (current - 1 + images.length) % images.length;
    });
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        closeLightbox();
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  // Prevent body scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <section className="py-16 px-4 mt-15 rounded-2xl bg-white ">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Gallery
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Our Image Gallery
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Take a look at our latest photos and activities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">

          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-gray-100"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
                <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition duration-300">
                  <RiImage2Line />
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= LIGHTBOX ================= */}

      {selectedImage !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50
                       w-10 h-10 md:w-12 md:h-12
                       rounded-full bg-white/10 hover:bg-white/20
                       text-white flex items-center justify-center
                       transition"
            aria-label="Close gallery"
          >
            <FiX size={26} />
          </button>

          {/* Previous Button */}
          <button
            onClick={previousImage}
            className="absolute left-3 md:left-6 z-50
                       w-10 h-10 md:w-12 md:h-12
                       rounded-full bg-white/10 hover:bg-white/20
                       text-white flex items-center justify-center
                       transition"
            aria-label="Previous image"
          >
            <FiChevronLeft size={30} />
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] flex items-center justify-center"
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-3 md:right-6 z-50
                       w-10 h-10 md:w-12 md:h-12
                       rounded-full bg-white/10 hover:bg-white/20
                       text-white flex items-center justify-center
                       transition"
            aria-label="Next image"
          >
            <FiChevronRight size={30} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2
                          bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            {selectedImage + 1} / {images.length}
          </div>

        </div>
      )}
    </section>
  );
};

export default Gallery;