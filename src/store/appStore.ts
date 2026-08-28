import { create } from 'zustand';
import type { Artifact, FilterKey } from '../data/types';

interface AppState {
  activePeriodId: string | null;
  periodProgress: { index: number; total: number; percent: number };
  openArtifact: Artifact | null;
  modalOriginRect: DOMRect | null;
  collectionFilter: FilterKey;
  setActivePeriod: (id: string | null) => void;
  setPeriodProgress: (index: number, total: number, percent: number) => void;
  openArtifactModal: (artifact: Artifact, originRect?: DOMRect | null) => void;
  closeArtifactModal: () => void;
  setCollectionFilter: (key: FilterKey) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activePeriodId: null,
  periodProgress: { index: 0, total: 7, percent: 0 },
  openArtifact: null,
  modalOriginRect: null,
  collectionFilter: 'ALL',
  setActivePeriod: (id) => set({ activePeriodId: id }),
  setPeriodProgress: (index, total, percent) =>
    set({ periodProgress: { index, total, percent } }),
  openArtifactModal: (artifact, originRect = null) =>
    set({ openArtifact: artifact, modalOriginRect: originRect }),
  closeArtifactModal: () => set({ openArtifact: null, modalOriginRect: null }),
  setCollectionFilter: (key) => set({ collectionFilter: key }),
}));
