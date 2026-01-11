# Navi Logistics Website

A modern, professional logistics company website built with Next.js 16, React, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan)

## 🚀 Features

- **Responsive Design** - Mobile-first, works on all devices
- **SEO Optimized** - 80+ keywords, JSON-LD structured data, geo tags
- **Contact Form** - Email notifications via Nodemailer
- **Smooth Animations** - Framer Motion powered transitions
- **Fast Performance** - Static generation with Next.js

## 📦 Pages

| Page     | Route       | Description                         |
| -------- | ----------- | ----------------------------------- |
| Home     | `/`         | Hero, services, stats, testimonials |
| About    | `/about`    | Company story, timeline, team       |
| Services | `/services` | Detailed service offerings          |
| Careers  | `/careers`  | Job openings and benefits           |
| Contact  | `/contact`  | Contact form and map                |
| News     | `/news`     | Company updates                     |
| Blog     | `/blog`     | Articles and posts                  |
| Terms    | `/terms`    | Terms of Service                    |
| Privacy  | `/privacy`  | Privacy Policy                      |

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Email**: Nodemailer
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## 📋 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/navi-logistics.git
cd navi-logistics

# Install dependencies
npm install

# Set up environment variables
cp env.template .env
# Edit .env with your Gmail App Password

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Email Configuration

To enable contact form emails:

1. Create a [Gmail App Password](https://myaccount.google.com/apppasswords)
2. Copy `env.template` to `.env`
3. Add your credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📍 Service Areas

**West Bengal**: Howrah, Kolkata, Asansol, Durgapur, Siliguri, Bardhaman, 24 Parganas, Hooghly

**Eastern India**: Bihar, Jharkhand, Odisha, Assam, Sikkim

**North India**: Delhi NCR, Uttar Pradesh, Haryana

**Central India**: Madhya Pradesh, Chhattisgarh

## 📧 Contact

**Navi Logistics**  
146 Foreshore Road, Shibpur  
Howrah, West Bengal - 711101

- Phone: +91 98300 32732
- Email: contact@navilogistics.in

## 📄 License

This project is proprietary. All rights reserved.
