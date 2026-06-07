# Portfolio – Yvan DJASSAH

Portfolio personnel développé avec Next.js 15, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Lancer le projet

```bash
# Installer les dépendances
npm install

# Démarrer en développement
npm run dev

# Build pour la production
npm run build
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## 📁 Structure

```
portfolio/
├── app/              → Pages Next.js (App Router)
├── components/       → Composants React
├── data/             → Données (compétences, projets)
├── lib/              → Utilitaires
└── styles/           → CSS global
```

## ⚙️ Configuration

### Lien de Contact Email
- Le bouton **Email** dans la section Contact utilise un lien `mailto:djassahyvan@gmail.com`
- Quand on clique dessus, ça ouvre automatiquement l'application d'envoi de mail par défaut avec l'email renseigné
- Fonctionne sur tous les appareils et navigateurs

### CV téléchargeable
Placer votre fichier CV en PDF dans `public/cv.pdf`

### Photo de profil
Placer votre photo dans `public/profile.jpg`

## 🚀 Déploiement sur Vercel

### Prérequis
```bash
# Vérifier Node.js (v18+)
node --version

# Installer les dépendances
npm install
```

### Étapes de déploiement

**1. Initialiser le git et pousser sur GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio Yvan DJASSAH"
git branch -M main
git remote add origin https://github.com/votre-username/portfolio.git
git push -u origin main
```

**2. Connexion à Vercel**
- Aller sur [vercel.com](https://vercel.com)
- Cliquer sur "New Project"
- Sélectionner le dépôt GitHub
- Cliquer sur "Deploy"

**3. Build local (optionnel)**
```bash
npm run build
npm run start
```

**4. Vérifier en production**
```bash
# Test avec le serveur de production
npm run build
npm start
# Ouvrir http://localhost:3000
```

### Variables d'environnement (optionnel)
Si vous utilisez des variables secrets, créer un fichier `.env.local` :
```env
NEXT_PUBLIC_EMAILJS_KEY=your_public_key_here
NEXT_PUBLIC_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_TEMPLATE_ID=template_xxxxx
```

Puis mettre à jour `Contact.tsx` pour utiliser les variables :
```javascript
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_KEY);
```

## 📋 Checklist avant déploiement

- [ ] Vérifier le lien email mailto: fonctionne bien
- [ ] Mettre à jour les liens GitHub/LinkedIn dans Footer
- [ ] Ajouter votre CV dans `public/cv.pdf`
- [ ] Ajouter votre photo dans `public/profile.jpg`
- [ ] Vérifier les zones sombres/claires du thème
- [ ] Tester sur mobile
- [ ] Faire un build : `npm run build`
- [ ] Pousser sur GitHub
- [ ] Déployer sur Vercel

## 🛠 Stack

- **Framework** : Next.js 15
- **Langage** : TypeScript
- **Style** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Thème** : next-themes (dark/light)
- **Formulaire** : Formspree
- **Déploiement** : Vercel
