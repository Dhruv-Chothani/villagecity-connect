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
    text: "SIDCO Bharat's Green Card helped my family access government healthcare and education benefits. The process was smooth and the team was very supportive.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    location: "Ranchi, Jharkhand",
    text: "The free health camp in our village was a blessing. My mother received treatment she couldn't afford otherwise. Thank you SIDCO Bharat Foundation!",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</span>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            What People Say About Us
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all lg:p-10">
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="mb-6 text-base italic leading-relaxed text-muted-foreground lg:text-lg">
              "{testimonials[active].text}"
            </p>
            <div>
              <p className="font-display font-semibold text-foreground">{testimonials[active].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[active].location}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-3 w-3 rounded-full transition-all ${
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
