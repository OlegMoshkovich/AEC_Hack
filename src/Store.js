import create from 'zustand';

const useStore = create((set) => ({
  borderRadius: 20,
  setBorderRadius: (value) => set((state) => ({ borderRadius: value})),
}));

export default useStore;
