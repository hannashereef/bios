import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import RecipeCard from './RecipeCard';
import RecipeDetail from './RecipeDetail';
import { Recipe, SearchResult } from '../types/Recipe';
import { searchRecipes, getRecipeDetails } from '../services/recipeApi';

interface SearchPageProps {
  onSaveRecipe: (recipe: Recipe) => void;
  onRemoveRecipe: (recipeId: number) => void;
  isRecipeSaved: (recipeId: number) => boolean;
}

const SearchPage: React.FC<SearchPageProps> = ({
  onSaveRecipe,
  onRemoveRecipe,
  isRecipeSaved,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError('');
    setSelectedRecipe(null);

    try {
      const results = await searchRecipes(searchQuery);
      setSearchResults(results);
    } catch (err) {
      setError('Failed to search recipes. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRecipeSelect = async (recipeId: number) => {
    setDetailLoading(true);
    setError('');

    try {
      const recipe = await getRecipeDetails(recipeId);
      setSelectedRecipe(recipe);
    } catch (err) {
      setError('Failed to load recipe details. Please try again.');
      console.error('Recipe detail error:', err);
    } finally {
      setDetailLoading(false);
    }
  };

  const handleBackToSearch = () => {
    setSelectedRecipe(null);
  };

  if (selectedRecipe) {
    return (
      <RecipeDetail
        recipe={selectedRecipe}
        onBack={handleBackToSearch}
        onSaveRecipe={onSaveRecipe}
        onRemoveRecipe={onRemoveRecipe}
        isRecipeSaved={isRecipeSaved}
        loading={detailLoading}
      />
    );
  }

  return (
    <div>
      {/* Search Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Amazing Recipes
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Search thousands of recipes and save your favorites for easy access
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for recipes (e.g., pasta, chicken curry, chocolate cake...)"
            className="block w-full pl-12 pr-32 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white shadow-sm"
          />
          <button
            type="submit"
            disabled={loading || !searchQuery.trim()}
            className="absolute inset-y-0 right-0 px-6 py-2 m-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center font-medium"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-600 text-center">{error}</p>
        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Search Results ({searchResults.length} recipes)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={handleRecipeSelect}
                isSaved={isRecipeSaved(recipe.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Welcome State */}
      {!loading && searchResults.length === 0 && !error && (
        <div className="text-center py-16">
          <div className="mx-auto h-24 w-24 bg-orange-100 rounded-full flex items-center justify-center mb-6">
            <Search className="h-12 w-12 text-orange-500" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Ready to cook something delicious?
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Enter a recipe name, ingredient, or cuisine type in the search box above to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;