"use client"

import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Building Scalable Design Systems",
    excerpt: "A deep dive into creating maintainable and flexible component libraries.",
    date: "Mar 2026",
    readTime: "8 min read",
    link: "#",
  },
  {
    title: "The Future of Web Performance",
    excerpt: "Exploring cutting-edge optimization techniques for modern web applications.",
    date: "Feb 2026",
    readTime: "6 min read",
    link: "#",
  },
  {
    title: "AI-Assisted Development Workflows",
    excerpt: "How AI tools are reshaping the way we write and review code.",
    date: "Jan 2026",
    readTime: "10 min read",
    link: "#",
  },
]

export function ContentSection() {
  return (
    <section id="content" className="min-h-screen flex items-center justify-center py-24 px-6 pb-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-8">Content</h2>
        
        <div className="space-y-1">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.link}
              className="group flex items-center justify-between py-6 border-b border-border/50 hover:border-primary/20 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">{article.excerpt}</p>
              </div>
              
              <div className="ml-4 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            Crafted with care · © 2026
          </p>
        </div>
      </div>
    </section>
  )
}
