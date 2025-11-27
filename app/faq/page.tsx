import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "FAQ - HTML Compiler | Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about HTML Compiler, the online HTML editor with live preview and code editing features.",
  keywords: [
    "HTML compiler FAQ",
    "online code editor questions",
    "HTML editor help",
  ],
};

const faqs = [
  {
    question: "What is HTML Compiler?",
    answer:
      "HTML Compiler is a free online code editor that allows you to write HTML, CSS, and JavaScript code and see the results instantly in a live preview window. It's perfect for quick prototyping, learning web development, testing code snippets, or building web pages without any setup required.",
  },
  {
    question: "How do I use the live preview feature?",
    answer:
      "Toggle the 'Live Preview' switch in the header to enable automatic updates. When enabled, your preview will update in real-time as you type. When disabled, click the 'Run' button to manually update the preview only when you want to.",
  },
  {
    question: "Can I download my code?",
    answer:
      "Yes! Click the 'Download' button in the header to save your HTML file to your computer. The file will be saved as 'index.html' and can be opened in any web browser. This feature allows you to work offline and share your creations easily.",
  },
  {
    question: "Is my code saved automatically?",
    answer:
      "Currently, code is not saved automatically on our servers for privacy and security reasons. We recommend downloading your work regularly or copying it to your preferred code editor for long-term storage. The content in your editor is only stored locally in your browser.",
  },
  {
    question: "What features are supported?",
    answer:
      "HTML Compiler supports all standard HTML5, CSS3, and JavaScript (ES6+) features. You can use external libraries and frameworks by including CDN links in your HTML. The editor includes syntax highlighting, code completion, and error detection for better development experience. Frameworks like Bootstrap, React, Vue, and others can be used via CDN.",
  },
  {
    question: "Does it work on mobile devices?",
    answer:
      "Yes! HTML Compiler is fully responsive and optimized for tablets and mobile phones. On smaller screens, you can switch between Editor and Preview modes using the tabs below the header. The interface adapts to your screen size for the best possible experience.",
  },
  {
    question: "How do I view the preview in fullscreen?",
    answer:
      "Click the fullscreen icon (Maximize2) in the preview panel header to view your work in fullscreen mode. Press the ESC key or click the fullscreen icon again to exit fullscreen mode and return to the split view.",
  },
  {
    question: "Can I use external CSS frameworks?",
    answer:
      "Absolutely! You can include any CSS framework like Bootstrap, Tailwind CSS, Bulma, or others by adding their CDN links in the head section of your HTML. You can also use CSS preprocessors by including their CDN versions.",
  },
  {
    question: "Can I use JavaScript libraries?",
    answer:
      "Yes, you can use any JavaScript library or framework including jQuery, React, Vue.js, Angular, lodash, and many others. Simply include the library's CDN link in a script tag in your HTML. The editor supports modern JavaScript (ES6+) features.",
  },
  {
    question: "Is there a limit to the amount of code I can write?",
    answer:
      "While there's no strict character limit, extremely large files may impact performance. For best results, we recommend keeping your HTML under 10,000 lines. If you need to work with larger projects, consider downloading your work and using a local development environment.",
  },
  {
    question: "Can I share my code with others?",
    answer:
      "You can download your code as an HTML file and share it with anyone. They can open the file in any web browser to view your work. Unfortunately, we don't currently offer a public sharing feature, but this is on our roadmap for future development.",
  },
  {
    question: "Is HTML Compiler free to use?",
    answer:
      "Yes, HTML Compiler is completely free to use. There are no hidden charges, subscriptions, or premium features. We believe in making web development tools accessible to everyone, especially those learning to code.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account is required. You can start using HTML Compiler immediately without signing up. This ensures your privacy and allows you to start coding right away without any barriers.",
  },
  {
    question: "Can I use HTML Compiler for commercial projects?",
    answer:
      "Yes, you can use HTML Compiler for any purpose, including commercial projects. However, remember that your code is generated by you, so you'll need to ensure you have the proper licenses for any third-party libraries or assets you include.",
  },
  {
    question: "Why is my code not working?",
    answer:
      "If your code isn't working, check the browser console for error messages (F12 to open developer tools). Common issues include: missing closing tags, syntax errors in JavaScript, or missing semicolons. The editor provides syntax highlighting to help identify errors. Also ensure your HTML structure is valid.",
  },
  {
    question: "How do I add external images?",
    answer:
      "You can add images using the <img> tag with a URL pointing to an online image. You can use free image hosting services like Imgur, Unsplash, or any other publicly accessible URL. Make sure the image URLs are accessible and allow hotlinking.",
  },
  {
    question: "Can I save multiple projects?",
    answer:
      "Currently, each time you visit HTML Compiler, it starts with a fresh template. If you want to work on multiple projects, we recommend downloading each project separately and giving them unique filenames when saving, or using a local code editor for project management.",
  },
  {
    question: "Does HTML Compiler support server-side languages?",
    answer:
      "HTML Compiler is a client-side tool designed for HTML, CSS, and JavaScript. Server-side languages like PHP, Python, Ruby, or Node.js cannot be executed directly. However, you can preview how your HTML/JS will look when the page loads, but dynamic server-side features won't function.",
  },
  {
    question: "How can I contact support?",
    answer:
      "For questions, suggestions, or bug reports, please visit our Contact page. We typically respond to inquiries within 24-48 hours. You can also reach out through our social media channels or blog comments.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, your privacy and security are important to us. All code editing happens in your browser, and we don't store your code on our servers unless you explicitly use features that require it. Your work remains on your device unless you download it or share it yourself.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-balance text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Find answers to common questions about HTML Compiler, the online
              HTML editor with live preview
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="border-2 border-primary bg-card">
              <CardContent className="py-8">
                <h2 className="text-2xl font-bold mb-3 text-foreground">
                  Still have questions?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Can't find the answer you're looking for? We're here to help!
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Contact Us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
