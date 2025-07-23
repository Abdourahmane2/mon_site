import React from 'react';
import { Github, Linkedin, Mail, Database, FolderCog , BrainCircuit , Dices , Store , Twitter , LucideDownload ,  Brain, BarChart as ChartBar, Code2, Server, BookOpen } from 'lucide-react';

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
                src="/img.png"
                alt="Abdourahmane Timera - Data Science Student"
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl mx-auto "
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
                <FolderCog className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Développement & Programmation</h3>
                <p className="text-gray-600">html , css ,  c++ ,  javascript , php , git/Github</p>
            </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bases de Données & Big Data</h3>
                <p className="text-gray-600">  SQL(PostgreSQL, MySQL)</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <Brain className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                <p className="text-gray-600">TensorFlow, scikit-learn, NLP </p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <ChartBar className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visualisation & Analyse de Données </h3>
                <p className="text-gray-600">Matplotlib , Seaborn , Tableau , Power Bi </p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition">
                <LucideDownload className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cloud</h3>
                <p className="text-gray-600">AWS , Docker</p>
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
                <BrainCircuit className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Syteme de recommandation </h3>
                <p className="text-gray-600 mb-4">Ce projet est un système de recommandation de films basé sur un modèle de Neural Collaborative Filtering (NCF). Il utilise des techniques de machine learning pour suggérer des films aux utilisateurs en fonction de leurs préférences. 
                  L'application est déployée avec Streamlit, 
                  offrant une interface interactive pour visualiser les recommandations..  <a href="https://github.com/Abdourahmane2/Systeme_de_Recommandation/" className='bg-blue-100'>voir plus</a></p>
                  
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">scikit-learn</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Streamlite</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Neural Collaborative Filtering</span>
                 
                  
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Store className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analyse Exploratoire des Données de Ventes de Supermarché</h3>
                <p className="text-gray-600 mb-4">Ce projet est un système de prédiction des ventes d’un supermarché basé sur des techniques de modélisation statistique et machine learning. Il permet d'analyser les tendances de vente et de prédire les chiffres futurs grâce à des modèles comme Holt-Winters 

L’interface utilisateur est développée avec Streamlit, permettant aux utilisateurs d’importer leurs propres fichiers CSV et d’obtenir des prévisions détaillées, accompagnées de visualisations interactives.<a href="https://github.com/Abdourahmane2/Analyse-et-Prediction-des-Ventes-pour-un-Supermarche" className = "bg-blue-100">voir plus </a></p>
                <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Matplotlib / Seaborn</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Holt-Winters </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">streamlite</span>
                  
                </div>
              </div> 

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Twitter className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analayse de sentiment</h3>
                <p className="text-gray-600 mb-4">Ce projet a pour objectif de scraper des données Twitter et d’analyser les sentiments des utilisateurs pour déterminer s’ils sont plutôt contents ou malheureux.

Il utilise des techniques de web scraping, de traitement du langage naturel (NLP) et de machine learning pour extraire, nettoyer et classifier les tweets en positifs ou négatifs. <a href="https://github.com/Abdourahmane2/analyse_de-_sentiment/" className='bg-blue-100'>voir plus</a></p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Transformers</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Scraaping</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Dices  className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Jeu de Planing Poker</h3>
                <p className="text-gray-600 mb-4">L'objectif de l'application est de permettre à des joueurs de faire une partie de planning poker. Avec cette application les membres de l'application peuvent :
Participer à une session
Estimer la complexité des fonctionnalités
Importer un backlog sous forme de fichier JSON pour le traiter directement dans l'application.
Exporter les résultats des votes sous format JSON pour une analyse ou une documentation ultérieure.<a href="https://github.com/Abdourahmane2/Systeme_de_Recommandation/" className='bg-blue-100'>voir plus</a></p>
                  
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Django(python)</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">base de donne(sqlite)</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Html/css/javascript</span>
                  
                 
                  
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
                <p className="text-gray-500">2025 - Present</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-2xl w-full">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">license Informatique </h3>
                <p className="text-gray-600 mb-2">Parcours science des donnée </p>
                <p className="text-gray-500">2021-2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
            <div className="flex justify-center gap-8">
              <a href="mailto:abdourahmane.timera@univ-lyon2.fr" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
              <a href="https://github.com/Abdourahmane2/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/abdourahmane-timera-a49b05267/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Portfolio - Master 1 Informatique</p>
        </div>
      </footer>
    </div>
  );
}

export default App;