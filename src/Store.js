import { create } from 'zustand'

const useStore = create((set) => ({
  borderRadius: 5,
  themeScheme: 0,
  showComponents: false,
  setBorderRadius: (value) => set((state) => ({ borderRadius: value})),
  setThemeScheme: (value) => set((state) => ({ themeScheme: value})),
  toggleShowComponents: (value) => set((state) => ({ showComponents: !state.showComponents})),
}));

export default useStore;
