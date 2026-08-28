import React, { useEffect, useRef } from 'react';
import { useAppStore } from '../../store/appStore';
import { PERIODS } from '../../data/periods';
import { smoothScrollTo } from '../../utils/scrollToAnchor';

export default function TimelineProgress() {
  const periodProgress = useAppStore((state) => state.periodProgress);
  const activePeriodId = useAppStore((state) => state.activePeriodId);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const mobileFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineFillRef.current) {
      lineFillRef.current.style.transform = `translateX(-50%) scaleY(${periodProgress.percent / 100})`;
    }
    if (mobileFillRef.current) {
      mobileFillRef.current.style.width = `${periodProgress.percent}%`;
    }
  }, [periodProgress]);

  return (
    <>
      <aside className="timeline-side">
        <div className="timeline-side__line" />
        <div
          className="timeline-side__line-fill"
          ref={lineFillRef}
        />
        {PERIODS.map((period) => (
          <button
            key={period.id}
            className={`timeline-dot ${activePeriodId === period.id ? 'is-active' : ''}`}
            onClick={() => smoothScrollTo(period.id)}
          >
            <span className="timeline-label">{period.code}</span>
          </button>
        ))}
      </aside>
      <div className="mobile-progress">
        <div className="mobile-progress__fill" ref={mobileFillRef} />
      </div>
    </>
  );
}
