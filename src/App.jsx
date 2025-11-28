import React, { useState } from 'react';
import { Upload, Download, Check, Loader } from 'lucide-react';



export default function JsonToSqlConverter() {
  const [file, setFile] = useState(null);
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [converted, setConverted] = useState(false);
  const [sqlContent, setSqlContent] = useState('');
  const [error, setError] = useState('');

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === 'application/json') {
      setFile(uploadedFile);
      setConverted(false);
      setError('');
      setSqlContent('');
      setProgress(0);
    } else {
      setError('Please upload a valid JSON file');
    }
  };

  const convertJsonToSql = async () => {
    if (!file) return;

    setConverting(true);
    setProgress(0);
    setError('');

    try {
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          
          // Simulate progress
          setProgress(20);
          await new Promise(resolve => setTimeout(resolve, 300));
          
          let sql = `-- Products Database Export\n`;
          sql += `-- Generated on ${new Date().toLocaleString()}\n\n`;
          
          setProgress(40);
          await new Promise(resolve => setTimeout(resolve, 300));
          
          // Create table
          sql += `CREATE TABLE IF NOT EXISTS products (\n`;
          sql += `  id INT PRIMARY KEY,\n`;
          sql += `  img VARCHAR(500),\n`;
          sql += `  title VARCHAR(255),\n`;
          sql += `  description TEXT,\n`;
          sql += `  reviews INT,\n`;
          sql += `  price DECIMAL(10, 2),\n`;
          sql += `  rating DECIMAL(3, 2),\n`;
          sql += `  url VARCHAR(500),\n`;
          sql += `  keywords TEXT,\n`;
          sql += `  category TEXT\n`;
          sql += `);\n\n`;
          
          setProgress(60);
          await new Promise(resolve => setTimeout(resolve, 300));
          
          // Insert data
          const products = Array.isArray(jsonData) ? jsonData : [jsonData];
          
          products.forEach((product, index) => {
            const keywords = Array.isArray(product.keywords) 
              ? product.keywords.join(',') 
              : product.keywords || '';
            const category = Array.isArray(product.category) 
              ? product.category.join(',') 
              : product.category || '';
            
            sql += `INSERT INTO products (id, img, title, description, reviews, price, rating, url, keywords, category)\n`;
            sql += `VALUES (\n`;
            sql += `  ${product.id || index + 1},\n`;
            sql += `  '${(product.img || '').replace(/'/g, "''")}',\n`;
            sql += `  '${(product.title || '').replace(/'/g, "''")}',\n`;
            sql += `  '${(product.description || '').replace(/'/g, "''")}',\n`;
            sql += `  ${product.reviews || 0},\n`;
            sql += `  ${product.price || 0},\n`;
            sql += `  ${product.rating || 0},\n`;
            sql += `  '${(product.url || '').replace(/'/g, "''")}',\n`;
            sql += `  '${keywords.replace(/'/g, "''")}',\n`;
            sql += `  '${category.replace(/'/g, "''")}'\n`;
            sql += `);\n\n`;
          });
          
          setProgress(80);
          await new Promise(resolve => setTimeout(resolve, 300));
          
          setSqlContent(sql);
          setProgress(100);
          await new Promise(resolve => setTimeout(resolve, 500));
          
          setConverted(true);
          setConverting(false);
        } catch (err) {
          setError('Invalid JSON format. Please check your file.');
          setConverting(false);
        }
      };
      
      reader.readAsText(file);
    } catch (err) {
      setError('Error reading file. Please try again.');
      setConverting(false);
    }
  };

  const downloadSql = () => {
    const blob = new Blob([sqlContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products_export.sql';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-6 splatter-bg">




       
      {/* Decorative circles */}
     
      
      <div className="relative w-full max-w-md">
        {/* Main card */}
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
          {/* Mascot placeholder */}
          <div className="flex justify-center mb-6">
            <div className="w-50 h-50 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg">
              <div className="text-4xl"><img src="/wesel-icon.png" alt="description" /></div>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            WEASELSQL
          </h1>
          <p className="text-white/80 text-center mb-8 text-sm">
            Transform JSON to SQL instantly
          </p>
          
          {/* Upload section */}
          <div className="mb-6">
            <label className="flex flex-col items-center justify-center w-full h-40 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-dashed border-white/40 cursor-pointer hover:bg-white/20 transition-all">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 text-white mb-3" />
                <p className="text-sm text-white font-medium">
                  {file ? file.name : 'Click to upload JSON file'}
                </p>
                <p className="text-xs text-white/70 mt-1">
                  {file ? 'File ready to convert' : 'Drag and drop or click to browse'}
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".json"
                onChange={handleFileUpload}
              />
            </label>
          </div>
          
          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/30 backdrop-blur-md rounded-xl border border-red-300/50 text-white text-sm">
              {error}
            </div>
          )}
          
          {/* Convert button */}
          <button
            onClick={convertJsonToSql}
            disabled={!file || converting || converted}
            className="w-full bg-white/30 backdrop-blur-md text-white font-semibold py-4 rounded-2xl border border-white/40 hover:bg-white/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg mb-4"
          >
            {converting ? (
              <span className="flex items-center justify-center">
                <Loader className="w-5 h-5 mr-2 animate-spin" />
                Converting...
              </span>
            ) : converted ? (
              <span className="flex items-center justify-center">
                <Check className="w-5 h-5 mr-2" />
                Conversion Complete!
              </span>
            ) : (
              'Convert to SQL'
            )}
          </button>
          
          {/* Progress bar */}
          {converting && (
            <div className="mb-4">
              <div className="w-full bg-white/20 rounded-full h-3 backdrop-blur-md border border-white/30 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-300 shadow-lg"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-white text-xs text-center mt-2">
                {progress}% complete
              </p>
            </div>
          )}
          
          {/* Success message */}
          {converted && (
            <div className="mb-4 p-4 bg-green-500/30 backdrop-blur-md rounded-xl border border-green-300/50 text-white text-sm text-center">
              <Check className="w-6 h-6 mx-auto mb-2" />
              Your SQL file is ready to download!
            </div>
          )}
          
          {/* Download button */}
          <button
            onClick={downloadSql}
            disabled={!converted}
            className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold py-4 rounded-2xl hover:from-green-500 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            <span className="flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download SQL File
            </span>
          </button>
        </div>
        
        {/* Info card */}
        <div className="mt-6 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/30">
          <p className="text-white/90 text-xs text-center">
            Upload your JSON product data and convert it to SQL format for easy database integration
          </p>
        </div>
      </div>
    </div>
  );
}