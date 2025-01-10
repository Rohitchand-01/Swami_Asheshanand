import React from 'react';

const Gallery = () => {
  return (
    <section className="bg-gray-100 py-20 text-center text-gray-800">
      <h2 className="mb-6 font-semibold text-4xl">Gallery</h2>
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <img src="https://source.unsplash.com/600x400/?spirituality" alt="Spirituality" className="rounded-lg w-full h-full object-cover" />
        <img src="https://source.unsplash.com/600x400/?yoga" alt="Yoga" className="rounded-lg w-full h-full object-cover" />
        <img src="https://source.unsplash.com/600x400/?meditation" alt="Meditation" className="rounded-lg w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Gallery;
