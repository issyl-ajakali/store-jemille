"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { Star, StarHalf } from "lucide-react";

// Sample testimonials
const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria Santos",
    avatar: "/images/avatars/avatar-1.jpg",
    rating: 5,
    comment: "The authentic Filipino flavors remind me of my grandmother's cooking. The Kare-Kare was exceptional!",
    date: "May 2, 2025"
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    avatar: "/images/avatars/avatar-2.jpg",
    rating: 4.5,
    comment: "Great food and quick delivery. The Adobo was delicious and the portion size was generous.",
    date: "April 28, 2025"
  },
  {
    id: 3,
    name: "Elena Reyes",
    avatar: "/images/avatars/avatar-3.jpg",
    rating: 5,
    comment: "MIILEBITES offers the best Filipino desserts in town! The Halo-Halo and Leche Flan are must-tries.",
    date: "April 25, 2025"
  },
  {
    id: 4,
    name: "Carlos Mendoza",
    avatar: "/images/avatars/avatar-4.jpg",
    rating: 4,
    comment: "Really enjoyed the Sinigang and Pancit. Authentic taste and good value for money.",
    date: "April 18, 2025"
  },
  {
    id: 5,
    name: "Sofia Lim",
    avatar: "/images/avatars/avatar-5.jpg",
    rating: 5,
    comment: "Their Bibingka & Bumbong Combo brings back childhood memories. The Calamansi drinks are refreshing too!",
    date: "April 15, 2025"
  },
  {
    id: 6,
    name: "Miguel Garcia",
    avatar: "/images/avatars/avatar-6.jpg",
    rating: 4.5,
    comment: "I ordered for a family gathering and everyone loved it. The Lechon Kawali was crispy and flavorful.",
    date: "April 10, 2025"
  }
];

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your feedback!", {
      description: "Your review helps us improve our service.",
    });
    setFormData({
      name: "",
      email: "",
      rating: 5,
      comment: ""
    });
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Customer Feedback</h1>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        See what our customers are saying about us and share your own experience.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.id} className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <div className="flex mt-1 mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">{testimonial.comment}</p>
              <p className="mt-2 text-xs text-muted-foreground/70">{testimonial.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Leave a Review Form */}
      <div className="max-w-2xl mx-auto bg-accent/5 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Share Your Experience</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Your Rating
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-8 h-8 ${
                      formData.rating >= star
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    } hover:scale-110 transition-transform`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium mb-1">
              Your Feedback
            </label>
            <Textarea
              id="comment"
              name="comment"
              placeholder="Tell us about your experience..."
              rows={4}
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
}
