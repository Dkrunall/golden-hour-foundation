# Golden Hour Foundation Website

A modern, responsive website built for the Golden Hour Foundation - a non-profit organization dedicated to saving lives through first aid and CPR training.

## 🌟 Features

### Design & UI
- **Modern Design**: Clean, professional interface with warm golden and deep red color scheme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessibility**: ARIA-compliant components with keyboard navigation support

### Pages & Sections
- **Home Page**: Hero section, about preview, programs overview, impact stats, gallery preview
- **About Page**: Mission/vision, organizational objectives, founders and advisors
- **Programs Page**: Training programs, detailed syllabus, conducted camps list
- **Gallery Page**: Filterable image gallery with lightbox functionality
- **Contact Page**: Contact information, interactive form, map integration ready

### Technical Features
- **Next.js 14**: Latest App Router with Server Components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Framer Motion**: Smooth animations and page transitions
- **Responsive Images**: Optimized loading with Next.js Image component
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd golden-hour-foundation
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── programs/          # Programs page
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components (Header, Footer)
│   ├── sections/          # Page section components
│   └── ui/                # Reusable UI components
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Design System

### Colors
- **Primary (Golden)**: `#FFC107` - Warm, welcoming, represents hope and care
- **Secondary (Red)**: `#C53030` - Medical emergency, urgency, life-saving
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Primary Font**: Inter - Modern, readable sans-serif
- **Responsive Sizing**: Fluid typography that scales with viewport

### Components
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Consistent card layout with shadows and hover effects
- **Navigation**: Sticky header with mobile hamburger menu

## 🔧 Customization

### Updating Content
1. **Hero Section**: Edit `src/components/sections/Hero.tsx`
2. **About Information**: Modify `src/components/sections/MissionVision.tsx`
3. **Programs Details**: Update `src/components/sections/TrainingBlocks.tsx`
4. **Contact Information**: Edit `src/components/sections/ContactDetails.tsx`

### Styling Changes
1. **Colors**: Update `tailwind.config.ts`
2. **Typography**: Modify font imports in `src/app/layout.tsx`
3. **Global Styles**: Edit `src/app/globals.css`

### Adding New Pages
1. Create new folder in `src/app/`
2. Add `page.tsx` file with page content
3. Update navigation in `src/components/layout/Header.tsx`

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

All components are built mobile-first with responsive breakpoints.

## 🔍 SEO Features

- Meta titles and descriptions for all pages
- Structured data markup
- Semantic HTML structure
- Image alt text
- Sitemap ready

## 📊 Performance

- Next.js optimizations (image optimization, code splitting)
- Lazy loading for images and components
- Efficient animations with Framer Motion
- Tailwind CSS purging for minimal bundle size

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
```bash
npm run build
npm start
```

## 📧 Contact Form Integration

The contact form is currently set up with client-side validation. To make it functional:

1. **Add Backend API**: Create API route in `src/app/api/contact/route.ts`
2. **Email Service**: Integrate with SendGrid, Nodemailer, or similar
3. **Database**: Store submissions in database if needed
4. **Validation**: Add server-side validation

## 🛠 Built With

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image

## 📄 License

This project is created for Golden Hour Foundation. All rights reserved.

## 🤝 Contributing

For major changes, please open an issue first to discuss what you would like to change.

## 📞 Support

For questions or support, please contact the Golden Hour Foundation team.

---

**Built with ❤️ for saving lives and building safer communities**
