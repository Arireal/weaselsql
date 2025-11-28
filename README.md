# WeaselSQL

> A modern, client-side JSON to SQL converter built for e-commerce and database migration workflows

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css)

## 📖 Overview

DataFlow Converter is a lightweight, browser-based application that transforms JSON product data into production-ready SQL files. Built to solve real-world e-commerce data migration challenges, this tool eliminates manual conversion errors and reduces migration time from hours to seconds.

### ✨ Key Features

- 🚀 **Instant Conversion** - Real-time JSON to SQL transformation
- 📤 **Drag & Drop Upload** - Intuitive file handling interface
- 🛡️ **Data Validation** - Built-in error handling and SQL injection protection
- ⚡ **Zero Backend** - Fully client-side processing for privacy and speed
- 🎨 **Modern UI/UX** - Glassmorphism design with smooth animations
- 💾 **One-Click Export** - Download production-ready SQL files
- 📊 **Smart Schema Detection** - Automatically handles arrays and nested objects

## 🎯 Problem Statement

E-commerce store owners frequently need to migrate product data from JSON format to SQL databases. Existing conversion tools are often:
- ❌ Incomplete or unreliable
- ❌ Require backend servers (privacy concerns)
- ❌ Time-consuming and error-prone
- ❌ Lack proper data validation

**DataFlow Converter solves these issues** by providing a fast, secure, and accurate client-side solution.

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI with hooks
- **Vite** - Next-generation build tool for faster development
- **Tailwind CSS** - Utility-first styling with custom glassmorphism
- **Lucide React** - Modern icon library

### Core Processing
- **JavaScript ES6+** - Async/await, destructuring, template literals
- **FileReader API** - Client-side file processing
- **Blob API** - Binary data handling for downloads
- **Custom SQL Generator** - Optimized CREATE TABLE and INSERT statements


### Expected Output

```sql
-- Products Database Export
-- Generated on [timestamp]

CREATE TABLE IF NOT EXISTS products (
  id INT PRIMARY KEY,
  img VARCHAR(500),
  title VARCHAR(255),
  description TEXT,
  reviews INT,
  price DECIMAL(10, 2),
  rating DECIMAL(3, 2),
  url VARCHAR(500),
  keywords TEXT,
  category TEXT
);

INSERT INTO products (id, img, title, description, reviews, price, rating, url, keywords, category)
VALUES (
  1,
  'https://example.com/product.jpg',
  'Product Name',
  'Product description',
  214,
  25.4,
  4.8,
  'https://example.com/product',
  'keyword1,keyword2',
  'Category1,All'
);
```

## 🏗️ Project Structure

```
dataflow-converter/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main converter component
│   ├── main.jsx        # Vite entry point
│   ├── index.css       # Global styles
│   └── assets/         # Images, fonts, etc.
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Customization

### Change Colors

Edit the Tailwind gradient in `App.jsx`:

```javascript
// Current gradient
className="bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400"

// Your custom gradient
className="bg-gradient-to-br from-pink-400 via-purple-400 to-red-400"
```


## 🔒 Security Features

- ✅ **SQL Injection Protection** - Escapes single quotes in data
- ✅ **Client-Side Only** - No data sent to external servers
- ✅ **Input Validation** - Verifies JSON format before processing
- ✅ **Error Handling** - Graceful failures with user feedback

## 🌟 Advantages

| Feature | DataFlow Converter | Traditional Tools |
|---------|-------------------|-------------------|
| Speed | ⚡ Instant | 🐌 Minutes to hours |
| Privacy | 🔒 100% local | ⚠️ Server upload required |
| Cost | 💚 Free | 💰 Often paid |
| Errors | ✅ Zero | ❌ Common |
| Setup | 🚀 Drag & drop | 🔧 Complex configuration |

## 🚧 Roadmap

- [ ] Support for multiple database types (PostgreSQL, MySQL, SQLite)
- [ ] Reverse conversion (SQL to JSON)
- [ ] Batch file processing
- [ ] Custom schema mapping
- [ ] Export to different SQL dialects
- [ ] Dark/light theme toggle
- [ ] PWA support for offline use

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ariane Souza**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Inspired by real-world e-commerce challenges



**⭐ Star this repo if you find it helpful!**

Made with ❤️ for the e-commerce community

</div>
