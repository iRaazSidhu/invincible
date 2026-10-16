export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  featured: boolean;
  intro: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "structure-a-portfolio-homepage",
    title: "How to Structure a Portfolio Homepage That Makes Your Work Clear",
    description: "A practical framework for a designer or developer portfolio: clarify the offer, present selected work, explain your process and make the next step obvious.",
    category: "UI/UX & Web Design",
    publishedAt: "2026-10-16",
    readingTime: "6 min read",
    featured: true,
    intro: "A portfolio homepage has a small job with a big impact: help the right person understand what you do, see proof of your thinking and decide what to do next. The best structure is rarely the one with the most sections. It is the one that removes uncertainty in the right order.",
    sections: [
      {
        heading: "1. Start with a specific introduction",
        paragraphs: [
          "Your hero section should answer three questions quickly: what kind of work do you do, who is it useful for, and where can someone see the work? A broad line such as “I create digital experiences” can sound polished, but it leaves visitors guessing about your actual strengths.",
          "Pair a short headline with a supporting sentence that describes your focus in normal language. Then provide one primary action, such as viewing selected work, and a secondary path for people who already know they want to talk."
        ],
        bullets: [
          "Name your core discipline or service.",
          "Describe the outcome or type of experience you help create.",
          "Use a clear, descriptive label for the main link."
        ]
      },
      {
        heading: "2. Show selected work before a long biography",
        paragraphs: [
          "Visitors often want evidence before a detailed personal story. Choose a small set of relevant projects and explain the problem, your approach and the decisions that shaped the result. A project title and attractive thumbnail can earn attention, but the explanation helps people understand how you think.",
          "When a project is a concept, exploration or collaborative effort, label it accurately. Specific and honest context is more useful than invented metrics or vague claims about impact."
        ]
      },
      {
        heading: "3. Make the process easy to scan",
        paragraphs: [
          "A short process section gives potential clients or teammates a preview of what working together could feel like. Four plain-language steps—understand, structure, design and build, refine—are often enough for an independent portfolio.",
          "Avoid turning this section into a long manifesto. Focus on decisions that matter to the visitor: how you understand the brief, how you organise the work, how you test it and what happens before delivery."
        ]
      },
      {
        heading: "4. Give services their own destination",
        paragraphs: [
          "When every service is squeezed into a homepage card, there may not be enough room to explain scope, deliverables and fit. A dedicated services page lets people compare your offerings and arrive at the contact step with better expectations.",
          "Not every service needs its own URL immediately. Start with a useful overview, then create individual pages when you can support them with distinct examples and genuinely different search intent."
        ]
      },
      {
        heading: "5. Finish with a clear next step",
        paragraphs: [
          "A contact section should tell people what action is available and how to take it. If you use an external profile instead of a contact form, say so clearly. Never leave a placeholder email address or a button that looks functional but goes nowhere.",
          "Before publishing, test the homepage on a small screen, keyboard-navigate every link, check the page title and description, and make sure each project card opens a real case-study page."
        ]
      }
    ]
  },
  {
    slug: "webflow-vs-framer-for-a-portfolio",
    title: "Webflow vs Framer for a Designer Portfolio",
    description: "Compare Webflow and Framer by workflow, layout control, content needs, interaction design and the type of portfolio you plan to maintain.",
    category: "Webflow, Framer & No-Code",
    publishedAt: "2026-10-16",
    readingTime: "7 min read",
    featured: false,
    intro: "Webflow and Framer can both support polished portfolio websites, but choosing between them is less about finding a universal winner and more about matching the tool to your workflow. Think about how you design, how often your content changes and how much control you need after launch.",
    sections: [
      {
        heading: "Start with how you work",
        paragraphs: [
          "Framer can feel natural when your workflow starts in visual composition and you want to move quickly from a layout to a published interactive page. It is worth evaluating when your site is mostly a portfolio, landing pages and a small set of content templates.",
          "Webflow can be a strong fit when you want a visual web-building environment with detailed layout control, a structured CMS workflow and room to build more elaborate marketing-site systems. The learning curve and the amount of configuration you need should be part of the decision."
        ]
      },
      {
        heading: "Compare the work you need to maintain",
        paragraphs: [
          "A portfolio with a homepage, about page, a handful of case studies and a contact page is a different problem from a marketing site with many landing pages, repeatable CMS content and multiple editors. Map your actual pages before comparing tool features.",
          "Ask how you will add a new project, update a global component, keep spacing consistent and change a content template later. A tool that looks fast on day one can become frustrating if routine maintenance is difficult."
        ],
        bullets: [
          "Portfolio only: prioritise publishing speed and how comfortable the editor feels.",
          "Frequent case studies or articles: test the full CMS or content workflow before committing.",
          "Complex interactions: prototype the hardest interaction instead of judging from a showcase video.",
          "Custom code needs: check the limits and maintenance cost of your intended approach."
        ]
      },
      {
        heading: "Interactions should support the content",
        paragraphs: [
          "Both tools can be used to create movement and responsive interactions, but the deciding factor should be the behaviour you need to ship and maintain. Start with clear states, hover feedback, keyboard access and reduced-motion support. Add more elaborate motion only when it helps explain the interface.",
          "Test interactions on mobile as well as desktop. A hover-only feature may not translate to touch, and a page that feels impressive in a prototype can become slow or difficult to navigate when every section animates."
        ]
      },
      {
        heading: "Think about content and search from the beginning",
        paragraphs: [
          "Whichever builder you select, plan a separate URL for each important project and each substantial article. Give pages descriptive titles, unique summaries, clean internal links and a predictable hierarchy. Tool choice alone does not make a website rank.",
          "If publishing articles is central to the project, test how easy it is to create a post, edit metadata, group topics and maintain redirects. The right content workflow is the one you can realistically sustain."
        ]
      },
      {
        heading: "A simple decision checklist",
        paragraphs: [
          "Build a small prototype in the tool you are leaning toward. Include one responsive homepage, one project detail page and one article template. Then ask which tool makes the whole site—not just the hero—easier to design, publish and improve.",
          "Choose the system that fits your constraints today while leaving a maintainable path for the next few pages. Revisit the choice only when your content, team or technical requirements genuinely change."
        ]
      }
    ]
  },
  {
    slug: "build-a-multi-page-portfolio-with-astro",
    title: "How to Build a Fast Multi-Page Portfolio with Astro",
    description: "Plan Astro routes, shared layouts, reusable project data, article templates, metadata and a sitemap for a maintainable static portfolio.",
    category: "Front-End & Performance",
    publishedAt: "2026-10-16",
    readingTime: "7 min read",
    featured: false,
    intro: "A portfolio becomes easier to grow when pages share a stable design system but have URLs and content tailored to their purpose. Astro's file-based routing and static output can support that structure without requiring a backend for a mostly editorial website.",
    sections: [
      {
        heading: "1. Plan routes before components",
        paragraphs: [
          "Start by defining the pages a visitor needs: a homepage, work index, individual case studies, about page, services overview, blog index, article pages and contact page. Decide which routes are essential now and which should wait until you have enough content to justify them.",
          "A route plan also helps reveal which page patterns deserve reusable templates. Case studies are usually variations of one template; the homepage may need its own art direction and composition."
        ]
      },
      {
        heading: "2. Use a shared layout for the site-wide rules",
        paragraphs: [
          "Keep global metadata, typography, colour tokens and the document shell in a shared layout. Reuse a common header and footer so navigation and branding remain consistent when the site grows.",
          "A shared layout is also the right place for common SEO defaults such as a meta description, canonical URL, Open Graph title and social-sharing description. Pages should still be able to override those defaults with their own unique content."
        ]
      },
      {
        heading: "3. Separate content from presentation",
        paragraphs: [
          "Store repeated project details and article fields in a central data model or a Markdown-based content system. The template can handle layout while the content record supplies the title, summary, date, categories and sections.",
          "This structure reduces duplicated markup and makes it easier to fix the visual system in one place. Keep the authoring format simple enough that adding the next case study or article does not require rebuilding an entire page by hand."
        ]
      },
      {
        heading: "4. Add SEO infrastructure deliberately",
        paragraphs: [
          "Include a sitemap that lists canonical public URLs, a robots.txt file that points crawlers to the sitemap, and descriptive page titles. Use headings in a sensible order and connect related pages with ordinary crawlable links.",
          "Structured data can help search engines interpret a page, but it must describe visible, accurate content. Validate generated JSON-LD, avoid fake ratings or outcomes, and do not assume that adding schema guarantees rich results or higher rankings."
        ]
      },
      {
        heading: "5. Measure the shipped website",
        paragraphs: [
          "Before launch, build the static output and inspect the generated pages rather than relying only on the development server. Check links, title and description tags, canonical URLs, sitemap entries, image dimensions, keyboard focus and mobile layouts.",
          "After the site is live, verify the property in Google Search Console and inspect indexing and performance reports over time. A successful build confirms that the site compiles; it does not confirm that pages are indexed or that they rank for a particular query."
        ]
      }
    ]
  }
];
