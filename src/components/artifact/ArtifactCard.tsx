import React from 'react';
import type { Artifact } from '../../data/types';
import { useAppStore } from '../../store/appStore';
import { getArtImageUrl } from '../../utils/imageUrls';

interface ArtifactCardProps {
  artifact: Artifact;
}

export default function ArtifactCard({ artifact }: ArtifactCardProps) {
  const openArtifactModal = useAppStore((state) => state.openArtifactModal);

  const handleClick = (e: React.MouseEvent) => {
    const originRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    openArtifactModal(artifact, originRect);
  };

  return (
    <button
      className="artifact-card"
      onClick={handleClick}
      type="button"
    >
      <div className="artifact-card__img">
        <span className="artifact-card__period-tag">
          {artifact.periodShort}
        </span>
        <img
          src={getArtImageUrl(artifact.imagePrompt, 'portrait_4_3', artifact.imageUrl)}
          alt={artifact.name}
          loading="lazy"
        />
      </div>
      <h3 className="artifact-card__name">{artifact.name}</h3>
      <p className="artifact-card__meta">
        {artifact.year} · {artifact.region}
      </p>
    </button>
  );
}
