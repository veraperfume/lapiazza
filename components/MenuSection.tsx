
import React from 'react';
import { MenuCategory } from '../types';
import MenuItem from './MenuItem';

interface Props {
  category: MenuCategory;
  id: string;
}

const MenuSection: React.FC<Props> = ({ category, id }) => {
  return (
    <section id={id} className="mb-20 fade-in scroll-mt-24">
      <div className="relative mb-8 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-script text-red-600 drop-shadow-md">
          {category.title}
        </h2>
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-red-600/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-red-600/50"></div>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-red-600/50"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {category.items.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
