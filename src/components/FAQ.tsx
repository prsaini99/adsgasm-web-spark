
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "While results can vary depending on your industry and campaign goals, most clients start seeing meaningful results within the first 30 days of campaign implementation."
    },
    {
      question: "What platforms do you work with?",
      answer: "We work across all major advertising platforms including Google Ads, Meta (Facebook & Instagram), LinkedIn, TikTok, and more."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes! We tailor our strategies to meet your specific business needs and objectives, ensuring the best possible outcomes for your campaigns."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including campaign setup, ongoing optimization, regular reporting, and dedicated account management."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-adsgasm-accent font-semibold mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
