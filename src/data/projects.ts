export interface PortfolioProject {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  context: string;
  challenge: string;
  approach: string[];
  focusAreas: string[];
  deliverables: string[];
  nextProject?: string;
}

export const projects: PortfolioProject[] = [
  {
    slug: "kaizenx",
    number: "01",
    title: "KaizenX",
    category: "Brand & web experience",
    year: "2026",
    summary: "A clear digital presence for a connected ecosystem of crypto products.",
    context: "KaizenX brings multiple digital-product ideas under one ecosystem. The experience needs to help visitors understand that breadth without making the brand feel complicated.",
    challenge: "When a brand represents several products, the website can quickly become a catalogue of disconnected features. The design challenge is to communicate the ecosystem first, then give each product a clear route of its own.",
    approach: [
      "Lead with one simple ecosystem-level message before introducing individual product areas.",
      "Use consistent visual patterns and concise labels to make the relationships between products easier to scan.",
      "Give high-intent visitors clear next steps instead of treating every product link as equally important."
    ],
    focusAreas: ["Information hierarchy", "Ecosystem storytelling", "Marketing web design", "Reusable UI patterns"],
    deliverables: ["Homepage and section structure", "Product discovery patterns", "Interface visual direction", "Responsive component concepts"],
    nextProject: "cinebit"
  },
  {
    slug: "cinebit",
    number: "02",
    title: "Cinebit",
    category: "Digital product & UI/UX",
    year: "2026",
    summary: "A product-interface exploration centred on content discovery and a considered viewing experience.",
    context: "A streaming-style product has to help people move from browsing to choosing something to watch. Its interface should make discovery feel inviting without letting shelves, metadata and controls compete for attention.",
    challenge: "A content-heavy interface can feel overwhelming when every title, category and action asks for equal attention. The design focus is to establish a clear viewing hierarchy and make common actions feel predictable.",
    approach: [
      "Prioritise featured content, then organise supporting rows around clear browsing intent.",
      "Keep key actions such as viewing details and saving to a list easy to recognise.",
      "Use restrained motion and consistent card behaviour to support discovery rather than distract from it."
    ],
    focusAreas: ["Content discovery", "Card and shelf behaviour", "Interaction states", "Responsive UI"],
    deliverables: ["Home-screen concept", "Content-card patterns", "Interaction-state direction", "Navigation hierarchy"],
    nextProject: "zugic"
  },
  {
    slug: "zugic",
    number: "03",
    title: "Zugic",
    category: "Corporate digital experience",
    year: "2025",
    summary: "A structured corporate presence designed to bring a multi-industry business into focus.",
    context: "A business spanning several industries needs a digital introduction that feels coherent while still making its different areas understandable.",
    challenge: "Corporate websites can become difficult to navigate when every business line receives the same emphasis. The experience needs a steady hierarchy, clear language and room for each area to be understood in context.",
    approach: [
      "Establish a strong corporate introduction before expanding into individual areas.",
      "Use typography, spacing and repeatable layout patterns to create a calm, consistent experience.",
      "Keep navigation and section labels direct so visitors can understand where to go next."
    ],
    focusAreas: ["Corporate storytelling", "Content hierarchy", "Responsive layouts", "Visual consistency"],
    deliverables: ["Corporate page structure", "Content hierarchy", "Web visual direction", "Reusable page sections"]
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
