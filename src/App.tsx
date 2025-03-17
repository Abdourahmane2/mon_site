import React from 'react';
import { Github, Linkedin, Mail, Database, Brain, BarChart as ChartBar, Code2, Server, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Abdourahmane Timera</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">À propos</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Compétences</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projets</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Data Science Étudiant
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Master 1 en Informatique | Science des Données
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Me Contacter
                </a>
                <a href="#projects" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
                  Voir mes projets
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Data Science Illustration" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Science</h3>
                <p className="text-gray-600">Python, R, SQL, Machine Learning, Data Visualization</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <Brain className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                <p className="text-gray-600">TensorFlow, scikit-learn, Deep Learning</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <ChartBar className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analyse de Données</h3>
                <p className="text-gray-600">Pandas, NumPy, Matplotlib, Tableau</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Projets Académiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Code2 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analyse Prédictive</h3>
                <p className="text-gray-600 mb-4">Projet de prédiction utilisant des algorithmes de machine learning.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">scikit-learn</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Server className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Big Data Processing</h3>
                <p className="text-gray-600 mb-4">Traitement de données massives avec des outils Big Data.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spark</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Hadoop</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Formation</h2>
            <div className="flex items-center justify-center">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-2xl w-full">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Master en Informatique</h3>
                <p className="text-gray-600 mb-2">Spécialisation en Science des Données</p>
                <p className="text-gray-500">2023 - Present</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
            <div className="flex justify-center gap-8">
              <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Portfolio - Master 1 Informatique</p>
        </div>
      </footer>
    </div>
  );
}

export default App;