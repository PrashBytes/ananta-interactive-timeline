import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { smoothScrollTo } from '../../utils/scrollToAnchor';

export default function ClosingSection() {
  return (
    <section className="closing" id="closing">
      <div className="closing__inner">
        <p className="closing__eyebrow">THE JOURNEY CONTINUES</p>
        <h1 className="closing__title">
          THE STORY CONTINUES<span className="dot">.</span>
        </h1>
        <p className="closing__text">
          Indian art has never been a single story. It is thousands of traditions, places, techniques and voices evolving across time.
        </p>
        <div className="closing__ctas">
          <button
            className="btn-primary"
            onClick={() => smoothScrollTo('collection')}
          >
            EXPLORE THE COLLECTION
            <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
          <button
            className="btn-secondary"
            onClick={() => alert('Explore by Region — Interactive Art Map (Assignment 2)')}
          >
            EXPLORE INDIAN ART BY REGION
            <ChevronRight style={{ width: 16, height: 16 }} />
          </button>
        </div>
      </div>
    </section>
  );
}
