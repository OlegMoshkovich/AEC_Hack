import { create } from 'zustand'

const useStore = create((set) => ({
  borderRadius: 20,
  themeScheme: 0,
  showComponents: false,
  showComments: true,
  notes:[],
  setNotes: (value) => set((state) => ({ notes: value})),
  setBorderRadius: (value) => set((state) => ({ borderRadius: value})),
  setThemeScheme: (value) => set((state) => ({ themeScheme: value})),
  toggleShowComponents: (value) => set((state) => ({ showComponents: !state.showComponents})),
  toggleShowComments: (value) => set((state) => ({ showComments: !state.showComments})),
}));

export default useStore;
