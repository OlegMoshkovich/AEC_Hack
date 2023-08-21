import create from 'zustand';

const useStore = create((set) => ({
  borderRadius: 0,
  themeScheme: 0,
  setBorderRadius: (value) => set((state) => ({ borderRadius: value})),
  setThemeScheme: (value) => set((state) => ({ themeScheme: value})),
}));

export default useStore;
