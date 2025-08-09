import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Heart, Clock, Users, ChefHat } from 'lucide-react';
import SearchPage from './components/SearchPage';
import SavedRecipesPage from './components/SavedRecipesPage';
import { Recipe } from './types/Recipe';

function App() {
  const [currentPage, setCurrentPage] = useState<'search' | 'saved'>('search');
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedRecipes');
    if (saved) {
      setSavedRecipes(JSON.parse(saved));
    }
  }, []);

  const saveRecipe = (recipe: Recipe) => {
    const updatedRecipes = [...savedRecipes, recipe];
    setSavedRecipes(updatedRecipes);
    localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
  };

  const removeRecipe = (recipeId: number) => {
    const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
    setSavedRecipes(updatedRecipes);
    localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
  };

  const isRecipeSaved = (recipeId: number) => {
    return savedRecipes.some(recipe => recipe.id === recipeId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-900">RecipeVault</h1>
            </div>
            
            <nav className="flex space-x-1">
              <button
                onClick={() => setCurrentPage('search')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === 'search'
                    ? 'bg-orange-100 text-orange-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
              <button
                onClick={() => setCurrentPage('saved')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                  currentPage === 'saved'
                    ? 'bg-emerald-100 text-emerald-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>Saved Recipes</span>
                {savedRecipes.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {savedRecipes.length}
                  </span>
                )}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === 'search' ? (
          <SearchPage
            onSaveRecipe={saveRecipe}
            onRemoveRecipe={removeRecipe}
            isRecipeSaved={isRecipeSaved}
          />
        ) : (
          <SavedRecipesPage
            savedRecipes={savedRecipes}
            onRemoveRecipe={removeRecipe}
          />
        )}
      </main>
    </div>
  );
}

export default App;