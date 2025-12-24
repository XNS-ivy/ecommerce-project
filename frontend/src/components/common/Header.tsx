import React, { useState } from 'react';
import { Package, ShoppingCart, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { LoginModal } from '../auth/LoginModal';
import { RegisterModal } from '../auth/RegisterModal';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { items:  cartItems } = useCart();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const cartItemCount = cartItems. length;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <Package className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Hazmat Logistics</h1>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition">
                Home
              </a>
              <a href="/products" className="text-gray-600 hover:text-blue-600 transition">
                Produk
              </a>
              {isAuthenticated && (
                <a href="/orders" className="text-gray-600 hover:text-blue-600 transition">
                  Pesanan
                </a>
              )}
            </nav>

            {/* Right side - Cart & Auth */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <button
                onClick={() => navigate('/cart')}
                className="relative text-gray-600 hover:text-blue-600 transition"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Auth Buttons */}
              {! isAuthenticated ?  (
                <div className="hidden md:flex space-x-2">
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
                  >
                    Masuk
                  </button>
                  <button
                    onClick={() => setShowRegisterModal(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Daftar
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-4">
                  <div className="text-sm">
                    <p className="font-semibold text-gray-800">{user?. name}</p>
                    <p className="text-gray-600">{user?.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition"
                  >
                    Logout
                  </button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-600 hover:text-blue-600"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md: hidden mt-4 space-y-2 pb-4">
              <a
                href="/"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="/products"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600"
              >
                Produk
              </a>
              {! isAuthenticated ?  (
                <>
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 text-left"
                  >
                    Masuk
                  </button>
                  <button
                    onClick={() => {
                      setShowRegisterModal(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700"
                  >
                    Daftar
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
    </>
  );
};