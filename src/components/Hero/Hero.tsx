import React from "react";
import "./_hero.scss"; // Ensure SCSS styles are applied

type HeroProps = {
  title?: string;
  description?: string;
  imageSrc?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
};

export function Hero({
  title = "Responsive left-aligned hero with image",
  description = "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit.",
  imageSrc = "/hero-image.png", // Change to actual image path
  primaryBtnText = "Primary",
  primaryBtnLink = "#",
  secondaryBtnText = "Default",
  secondaryBtnLink = "#"
}: HeroProps) {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        {/* Image Section */}
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={imageSrc}
            className="d-block mx-lg-auto img-fluid"
            alt={title}
            width="700"
            height="500"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
          <p className="lead">{description}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href={primaryBtnLink} className="btn btn-primary btn-lg px-4 me-md-2">
              {primaryBtnText}
            </a>
            <a href={secondaryBtnLink} className="btn btn-outline-secondary btn-lg px-4">
              {secondaryBtnText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
