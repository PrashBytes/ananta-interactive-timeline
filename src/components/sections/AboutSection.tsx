import React from 'react';
import { SOURCES } from '../../data/traditions';

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <h3 className="about__title">ABOUT THIS JOURNEY</h3>
            <p className="about__body">
              This interactive timeline is a curated voyage through five thousand years of Indian art — from the Indus Valley's lost-wax bronzes, through the painted caves of Ajanta, the temple bronze of the Cholas, the Mughal atelier's miniature painting, the regional folk and tribal traditions, the colonial transition, and into the modern and contemporary period.
            </p>
            <p className="about__body">
              Each period is anchored by a hero artifact and supported by secondary works. Every card in the collection opens a dedicated modal with historical context, material description, and artistic significance. The timeline, navigational markers, and progress indicators are fully responsive, and all animations respect the operating system's reduced-motion preference.
            </p>
          </div>

          <div className="sources">
            <h4 className="sources__title">SOURCES / REFERENCES</h4>
            <ul className="sources-list">
              {SOURCES.map((source, idx) => (
                <li key={idx}>
                  {source.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.label}
                    </a>
                  ) : (
                    source.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
