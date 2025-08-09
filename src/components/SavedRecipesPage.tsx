import React, { useState } from 'react';
import { BookOpen, Search, Trash2 } from 'lucide-react';
import RecipeDetail from './RecipeDetail';
import { Recipe } from '../types/Recipe';

interface SavedRecipesPageProps {
  savedRecipes: Recipe[];
  onRemoveRecipe: (recipeId: number) => void;
}

const SavedRecipesPage: React.FC<SavedRecipesPageProps> = ({
  savedRecipes,
  onRemoveRecipe,
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = savedRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRecipeSelect = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToSaved = () => {
    setSelectedRecipe(null);
  };

  const handleRemove = (recipeId: number) => {
    onRemoveRecipe(recipeId);
    if (selectedRecipe && selectedRecipe.id === recipeId) {
      setSelectedRecipe(null);
    }
  };

  if (selectedRecipe) {
    return (
      <RecipeDetail
        recipe={selectedRecipe}
        onBack={handleBackToSaved}
        onSaveRecipe={() => {}}
        onRemoveRecipe={handleRemove}
        isRecipeSaved={() => true}
        loading={false}
      />
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Your Recipe Collection
        </h2>
        <p className="text-xl text-gray-600">
          {savedRecipes.length} saved recipe{savedRecipes.length !== 1 ? 's' : ''}
        </p>
      </div>

      {savedRecipes.length === 0 ? (
        <div className="text-center py-16">
          <div className="mx-auto h-24 w-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
            <BookOpen className="h-12 w-12 text-emerald-500" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            No saved recipes yet
          </h3>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Start building your personal recipe collection by searching and saving your favorite dishes.
          </p>
        </div>
      ) : (
        <>
          {/* Search Filter */}
          {savedRecipes.length > 3 && (
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter saved recipes..."
                  className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                />
              </div>
            </div>
          )}

          {/* Recipe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
                onClick={() => handleRecipeSelect(recipe)}
              >
                <div className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(recipe.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 hover:bg-red-50 rounded-full shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
                    title="Remove from saved"
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <span className="mr-1">🕐</span>
                      {recipe.readyInMinutes} mins
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">👥</span>
                      {recipe.servings} servings
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {searchQuery && filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No saved recipes match "{searchQuery}"
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SavedRecipesPage;