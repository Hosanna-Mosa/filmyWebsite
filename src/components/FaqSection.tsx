import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    question: "Is FilmyApp free to download?",
    answer:
      "Yes. FilmyConnect is free on both the App Store and Google Play. Create your profile, browse casting calls, and connect with crew without paying anything up front.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Any iPhone or iPad running a recent version of iOS, and Android phones and tablets from Android 8 upwards. The app is built for on-set use, so it works on mobile data as well as Wi-Fi.",
  },
  {
    question: "Who is the app for?",
    answer:
      "Directors, producers, actors, technicians, and every department in between. Whether you are hiring a crew or looking for your next role, the network is built around real film work.",
  },
  {
    question: "How do you keep profiles genuine?",
    answer:
      "Profiles can be verified with an optional government ID check, posts are moderated, and reporting tools are built in. Read our Child Safety and Privacy policies for the full picture.",
  },
  {
    question: "Can I delete my account and data?",
    answer:
      "Yes. You can request deletion from inside the app at any time, and our Account Deletion Policy page explains exactly what is removed and how long it takes.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="border-t border-border py-20 sm:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-10 text-center">
            <p className="text-label mb-4">Questions</p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Everything You Asked
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left font-heading text-base text-foreground hover:text-primary hover:no-underline sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
