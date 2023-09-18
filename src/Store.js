import { create } from 'zustand'

const useStore = create((set) => ({
  borderRadius: 20,
  themeScheme: 0,
  showComponents: false,
  showComments: false,
  notes:[],
  rightDrawer:false,
  leftDrawer: false,
  setNotes: (value) => set(() => ({ notes: value})),
  setBorderRadius: (value) => set(() => ({ borderRadius: value})),
  setThemeScheme: (value) => set(() => ({ themeScheme: value})),
  toggleShowComponents: () => set((state) => ({ showComponents: !state.showComponents})),
  toggleShowComments: () => set((state) => ({ showComments: !state.showComments})),
  toggleRightDrawer: () => set((state) => ({ rightDrawer: !state.rightDrawer})),
  toggleLeftDrawer: () => set((state) => ({ leftDrawer: !state.leftDrawer})),
}));

export default useStore;
