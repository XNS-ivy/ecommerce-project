import React from 'react';
import { Package } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Package className="w-6 h-6 text-blue-400" />
              <h3 className="font-bold text-lg">Hazmat Logistics</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sistem logistik bahan berbahaya terpercaya dengan standar keamanan internasional.  Kami berkomitmen untuk keselamatan dan kepercayaan Anda.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Tentang</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Bantuan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@hazmatlog.com</li>
              <li>Phone: +62 858-7915-6391</li>
              <li>WhatsApp: +62 878-6231-2255</li>
              <li>Wonosobo, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <h4 className="font-semibold mb-4 text-blue-400">Ikuti Kami</h4>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Hazmat Logistics. Semua hak dilindungi undang-undang.
          </p>
          <p className="mt-2 text-xs">
            Layanan Pelanggan tersedia 24/7 | Pengiriman Aman Terjamin | Standar Internasional
          </p>
        </div>
      </div>
    </footer>
  );
};