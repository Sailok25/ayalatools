'use client';

import { useState } from 'react';

export default function PasswordTool() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false
  });

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let charset = '';
    if (options.uppercase) charset += uppercase;
    if (options.lowercase) charset += lowercase;
    if (options.numbers) charset += numbers;
    if (options.symbols) charset += symbols;
    
    if (!charset) {
      setPassword('Selecciona al menos una opción');
      return;
    }
    
    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    setPassword(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Contraseña copiada al portapapeles!');
  };

  const toggleOption = (option) => {
    setOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">🔒 Generador de Contraseñas</h1>
      <p className="text-gray-600 mb-8">Crea contraseñas seguras y personalizables</p>
      
      {/* Contraseña generada */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-8">
        <div className="text-center">
          <div className="text-2xl font-mono bg-white p-4 rounded-lg border mb-4 min-h-[60px]">
            {password || 'Tu contraseña aparecerá aquí'}
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={generatePassword}
              className="px-6 py-3 bg-green-100 text-black rounded-lg font-semibold hover:bg-green-200"
            >
              🎲 Generar Contraseña
            </button>
            {password && (
              <button
                onClick={copyToClipboard}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                📋 Copiar
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Opciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Configuración</h3>
          
          <div className="mb-6">
            <label className="block mb-2">
              Longitud: <span className="font-bold text-green-600">{length}</span> caracteres
            </label>
            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Corta (6)</span>
              <span>Media (12)</span>
              <span>Larga (32)</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={options.uppercase}
                onChange={() => toggleOption('uppercase')}
                className="mr-3 h-5 w-5"
              />
              <span>Letras mayúsculas (A-Z)</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={options.lowercase}
                onChange={() => toggleOption('lowercase')}
                className="mr-3 h-5 w-5"
              />
              <span>Letras minúsculas (a-z)</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={options.numbers}
                onChange={() => toggleOption('numbers')}
                className="mr-3 h-5 w-5"
              />
              <span>Números (0-9)</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={options.symbols}
                onChange={() => toggleOption('symbols')}
                className="mr-3 h-5 w-5"
              />
              <span>Símbolos (!@#$%^&*)</span>
            </label>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Consejos de seguridad</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Usa al menos 12 caracteres</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Combina mayúsculas, minúsculas y números</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Usa contraseñas diferentes para cada lugar</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Cambia tus contraseñas periódicamente</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}