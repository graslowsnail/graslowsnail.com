'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';
import { event } from '@/lib/firebaseAnalytics'; // Import the custom event function

import { fetchPicturesForAlbum } from '@/util'

// Constants for image dimensions
const IMAGE_WIDTH = 700;
const IMAGE_HEIGHT = 700;

// PictureList component definition with TypeScript props
const PictureList: React.FC<PictureListProps> = ({ albumId }) => {
  
  // State to hold pictures fetched from the API
  const [pictures, setPictures] = useState<Picture[]>([]);
  
  // State to hold image loading status
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  // Fetch pictures when component mounts
  useEffect(() => {
  async function loadPictures() {
    const pics = await fetchPicturesForAlbum(albumId);
    setPictures(pics);
  }
  loadPictures();
}, []);

  // Function to update image loading status
  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true  // Set this image as loaded
    }));
  };

  const handlePhotoClick = (pictureTitle: string) => {
    event({
      action: 'photo_click',
      category: 'User Interaction',
      label: 'Photo Click',
      value: `Title: ${pictureTitle}`,
    });
  };


 // Define the breakpoint columns object to control the number of columns at different screen sizes.
  const breakpointColumnsObj = {
    default: 2, 
    1100: 2, // screen sizes this has 2 cols at pixle with 1000
    700: 2,
    550: 1
  };


return (
  <div className='hero'>
    <div className='flex-1 pt-20 padding-x hero'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {pictures?.map((picture) => {

          return (
            <div key={picture._id} className="relative">
              <Link 
                href={`/pictures/${picture.album_id}/${picture._id}`}
                passHref
                onClick={() => handlePhotoClick(picture.title)} 
              >
                {/* Actual Image */}
                <div>
                  <Image 
                    priority={true}
                    src={picture.imageURL} 
                    alt={picture.description} 
                    width={IMAGE_WIDTH} 
                    height={IMAGE_HEIGHT}
                    onLoadingComplete={() => handleImageLoad(picture._id)}
                  />
                  {/* Conditional Sold Out text */}
                  {picture.isSold && (
                    <div className="absolute inset-0 flex justify-center items-center">
                      <button className="w-80 h-9 bg-red-700 text-white font-semibold px-4 cursor-pointer transition-opacity duration-200 hover:opacity-80 shadow-md">
                        SOLD OUT
                      </button>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </Masonry>
    </div>
  </div>
);
};


export default PictureList;

