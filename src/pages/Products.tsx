import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';

const Products: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'all';
  const initialFeatured = queryParams.get('featured') === 'true';
  
  const [category, setCategory] = useState<string>(initialCategory);
  const [featured, setFeatured] = useState<boolean>(initialFeatured);
  const [sortBy, setSortBy] = useState<string>('default');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const filteredProducts = products.filter(product => {
    if (category !== 'all' && product.category !== category) return false;
    if (featured && !product.featured) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (category !== 'all') params.set('category', category);
    if (featured) params.set('featured', 'true');
    
    const newUrl = `${location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);
  }, [category, featured, location.pathname]);
  
  const clearFilters = () => {
    setCategory('all');
    setFeatured(false);
    setSortBy('default');
    setPriceRange([0, 200]);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Mobile Filters Toggle */}
          <div className="w-full md:hidden flex justify-between items-center mb-4">
            <h1 className="font-heading text-2xl font-bold">Products</h1>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              Filters
            </Button>
          </div>
          
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 bg-white p-6 rounded-lg shadow-sm sticky top-28">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading font-semibold text-lg">Filters</h2>
              <button 
                onClick={clearFilters}
                className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
              >
                <X size={14} className="mr-1" />
                Clear all
              </button>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="category" 
                    checked={category === 'all'} 
                    onChange={() => setCategory('all')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">All Products</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="category" 
                    checked={category === 'bracelet'} 
                    onChange={() => setCategory('bracelet')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">Brazilian Bracelets</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="category" 
                    checked={category === 'art'} 
                    onChange={() => setCategory('art')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">Malagasy Arts</span>
                </label>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Other</h3>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={featured} 
                  onChange={() => setFeatured(!featured)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded"
                />
                <span className="ml-2 text-gray-700">Featured Items Only</span>
              </label>
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setMobileFiltersOpen(false)}></div>
                <div className="fixed inset-y-0 right-0 max-w-full flex">
                  <div className="w-screen max-w-md transform transition ease-in-out duration-300">
                    <div className="h-full flex flex-col bg-white shadow-xl">
                      <div className="flex-1 py-6 overflow-y-auto px-4">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="font-heading font-semibold text-lg">Filters</h2>
                          <button
                            type="button"
                            className="rounded-md text-gray-400 hover:text-gray-500"
                            onClick={() => setMobileFiltersOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <X size={24} aria-hidden="true" />
                          </button>
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="font-medium mb-3">Category</h3>
                          <div className="space-y-2">
                            <label className="flex items-center cursor-pointer">
                              <input 
                                type="radio" 
                                name="mobile-category" 
                                checked={category === 'all'} 
                                onChange={() => setCategory('all')}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                              />
                              <span className="ml-2 text-gray-700">All Products</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                              <input 
                                type="radio" 
                                name="mobile-category" 
                                checked={category === 'bracelet'} 
                                onChange={() => setCategory('bracelet')}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                              />
                              <span className="ml-2 text-gray-700">Brazilian Bracelets</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                              <input 
                                type="radio" 
                                name="mobile-category" 
                                checked={category === 'art'} 
                                onChange={() => setCategory('art')}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                              />
                              <span className="ml-2 text-gray-700">Malagasy Arts</span>
                            </label>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="font-medium mb-3">Price Range</h3>
                          <div className="px-2">
                            <input
                              type="range"
                              min="0"
                              max="200"
                              step="10"
                              value={priceRange[1]}
                              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between mt-2 text-sm text-gray-600">
                              <span>${priceRange[0]}</span>
                              <span>${priceRange[1]}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="font-medium mb-3">Other</h3>
                          <label className="flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={featured} 
                              onChange={() => setFeatured(!featured)}
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded"
                            />
                            <span className="ml-2 text-gray-700">Featured Items Only</span>
                          </label>
                        </div>
                        
                        <div className="mt-4 flex space-x-3">
                          <Button 
                            variant="primary" 
                            fullWidth 
                            onClick={() => setMobileFiltersOpen(false)}
                          >
                            Apply Filters
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={clearFilters}
                          >
                            Clear All
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Section */}
          <div className="flex-1">
            <div className="hidden md:flex justify-between items-center mb-6">
              <h1 className="font-heading text-2xl font-bold">Products</h1>
              
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                >
                  <option value="default">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>
            
            {/* Mobile Sort */}
            <div className="flex md:hidden justify-between items-center mb-6">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
            
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-gray-500 mb-4">No products found matching your criteria</p>
                <Button variant="primary" onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <>
                <p className="text-gray-500 mb-4">{sortedProducts.length} products found</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;