
import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import PhotoSlot from './PhotoSlot';

interface Props {
  item: MenuItemType;
}

const MenuItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-500 group">
      <PhotoSlot src={item.image} alt={item.name} />
      
      <div className="flex flex-col gap-1 px-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-bold tracking-tight text-white/90 leading-tight group-hover:text-red-500 transition-colors duration-300">
            {item.name}
          </h3>
          <div className="flex-shrink-0 bg-red-600 text-white px-2.5 py-1 rounded-lg text-sm font-black shadow-lg shadow-red-900/20">
            ${item.price}
          </div>
        </div>
        
        <p className="text-neutral-400 text-xs md:text-sm leading-relaxed capitalize font-medium">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
