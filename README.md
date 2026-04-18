<div align="center">
  <img src="public/models/apollo_evo.glb" alt="Apollo Evo" width="0" />
  <h1 align="center">APOLLO PROJECT EVO 🏎️ × CYBERPUNK 🔌</h1>
  <h3>High-Performance Portfolio</h3>
  <br />
  <p>
    An ultra-immersive, high-fidelity single-page portfolio (SPW) bridging automotive aesthetics with a cyberpunk terminal design. Built with Next.js 15 and powered by React Three Fiber for WebGL rendering at 60fps.
  </p>
</div>

<br />

> **[SYS_LOG]:** R.A.V.E. System Initialized. Welcome, Pilot.

## 🌟 Visual & Audio Features
- **Cinematic 3D Scene**: Fully interactive Apollo Project Evo 3D model utilizing Image-Based Lighting (`studio.hdr`), with OrbitControls baked-in.
- **Post-Processing Glow**: Integrated WebGL `EffectComposer` rendering hardware-accelerated **Bloom** and **Chromatic Aberration** for that true neon aesthetic.
- **Dynamic Terminal Glitch**: Component-based typewriter effects that naturally "glitch" out characters (`@#$%*`) simulating a corrupted command prompt.
- **Cyberpunk UI Cursor**: Replaces the native OS pointer with an interactive data-reticle crosshair that snaps and reacts to HTML elements.
- **Global Sound Engine**: Subtle, non-intrusive UI interactions with audio feedback (hover clicks & terminal blips) manipulating psychological weight.
- **Live GitHub Uplink**: The Portfolio section doesn't just read from a static array—it makes real-time asynchronous API requests to GitHub to pull deployed and active repositories autonomously.

## ⚡ Extreme Optimizations
WebGL and 3D in the browser can heavily choke mid-range devices. This site employs surgical Performance Strikes:
- **Zero-Cost Contact Shadows:** Overrode R3F's native rendering by setting shadow maps to bake on `[FRAME_01]` (`frames={1}`), converting dynamic shadows to completely static textures. **Saves 60+ draw calls per second.**
- **Post-Processing Anti-Aliasing Hack**: Disabled native Canvas multisampling to prevent the GPU from computing redundant pixel smoothing while running the EffectComposer pass.
- **Asset Preloading**: Background compilation of WebGL shaders using `<Preload all />` prior to DOM Hydration, avoiding heavy stutter spikes on scroll.
- **Component Lazy-Loading**: All heavy UI slices wrapped using Next.js `next/dynamic` (`ssr: false`) to bypass DOM payload sizes until interactively necessary.

## 🛠️ Technology Stack
### Core Frameworks
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Graphics & Animation
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `gsap` (ScrollTrigger)

### Integrations
- `EmailJS` (Terminal Comm-Link form)
- GitHub REST API

## 🚀 Installation & Local Deployment

### 1. Requirements
Ensure you have the latest stable [Node.js](https://nodejs.org/en) installed.

### 2. Clone & Install
```bash
git clone https://github.com/Rasshqa/apollo-evo-portfolio.git
cd apollo-evo-portfolio
npm install
```

### 3. Environment Config
To make the Terminal Contact Form functional, duplicate the example env and register your API keys from [EmailJS](https://www.emailjs.com/):

Create a `.env.local` file at the root directory:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_id_here
```

### 4. Ignite the Engine!
```bash
npm run dev
```
Access the local environment running at `http://localhost:3000`.

---
<div align="center">
  <i>"Optimization without sacrificing visual depth."</i>
  <br/>
  <b>Designed & Built by Rashqa Andrean Fitrah S.</b>
</div>
