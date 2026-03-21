import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Lucknow, UP",
    text: "The skill training program changed my life. I completed a tailoring course and now run my own business from home, supporting my family independently.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Patna, Bihar",
    text: "SVCDA's Green Card helped my family access government healthcare and education benefits. The process was smooth and the team was very supportive.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    location: "Ranchi, Jharkhand",
    text: "The free health camp in our village was a blessing. My mother received treatment she couldn't afford otherwise. Thank you SVCDA!",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 text-center">
          <span className="mb-2 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</span>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
            What People Say About Us
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl sm:rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-10 shadow-sm transition-all">
            <div className="mb-3 sm:mb-4 flex gap-1">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base italic leading-relaxed text-muted-foreground lg:text-lg">
              "{testimonials[active].text}"
            </p>
            <div>
              <p className="font-display text-sm sm:text-base font-semibold text-foreground">{testimonials[active].name}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{testimonials[active].location}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 sm:mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all ${
                  i === active ? "bg-accent scale-110" : "bg-border hover:bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
