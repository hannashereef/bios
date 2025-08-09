import React from 'react';
import { Clock, Users } from 'lucide-react';
import { SearchResult } from '../types/Recipe';

interface RecipeCardProps {
  recipe: SearchResult;
  onSelect: (id: number) => void;
  isSaved: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelect, isSaved }) => {
  return (
    <div
      onClick={() => onSelect(recipe.id)}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group relative"
    >
      {isSaved && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Saved
          </div>
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.readyInMinutes} mins</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;