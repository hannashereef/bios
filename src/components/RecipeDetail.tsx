import React from 'react';
import { ArrowLeft, Clock, Users, Heart, Loader2 } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
  onSaveRecipe: (recipe: Recipe) => void;
  onRemoveRecipe: (recipeId: number) => void;
  isRecipeSaved: (recipeId: number) => boolean;
  loading: boolean;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({
  recipe,
  onBack,
  onSaveRecipe,
  onRemoveRecipe,
  isRecipeSaved,
  loading,
}) => {
  const saved = isRecipeSaved(recipe.id);

  const handleSaveToggle = () => {
    if (saved) {
      onRemoveRecipe(recipe.id);
    } else {
      onSaveRecipe(recipe);
    }
  };

  const cleanSummary = (html: string) => {
    return html.replace(/<[^>]*>/g, '');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-orange-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading recipe details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to search</span>
      </button>

      {/* Recipe Header */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="relative h-64 md:h-80">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.title}</h1>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{recipe.readyInMinutes} minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-600 leading-relaxed">
                {cleanSummary(recipe.summary)}
              </p>
            </div>
            <button
              onClick={handleSaveToggle}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                saved
                  ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                  : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
              }`}
            >
              <Heart className={`h-5 w-5 ${saved ? 'fill-current' : ''}`} />
              <span>{saved ? 'Saved' : 'Save Recipe'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ingredients */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🥘</span>
            Ingredients
          </h2>
          <ul className="space-y-3">
            {recipe.extendedIngredients.map((ingredient) => (
              <li
                key={ingredient.id}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-orange-400 rounded-full mt-3"></div>
                <span className="text-gray-700">{ingredient.original}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">👨‍🍳</span>
            Instructions
          </h2>
          <div className="space-y-4">
            {recipe.analyzedInstructions[0]?.steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:border-orange-200 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <p className="text-gray-700 leading-relaxed">{step.step}</p>
              </div>
            )) || (
              <p className="text-gray-500 italic">No detailed instructions available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;