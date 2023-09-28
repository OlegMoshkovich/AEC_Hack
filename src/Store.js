import { create } from 'zustand'
const firstNote =
{
  title:'Welcome to Notes',
  date: '17.09.2023',
  content:`We believe in using the right tool for the job. As an integration enviromemnt, we
  offer several integrations to enable collaboration workflows around 3D content.
  Notion, Linear, GitHub or X seem to be solid choices for note-based worlflows. While GitHub is foundational to our ecosystem and linked to Share by default,
  other platforms might better suit your needs. Just connect to your preferred solution. Visit our Wiki to learn more about integrations`,
  type:'image',
  src:'https://user-images.githubusercontent.com/3433606/271344003-c505b72f-0d39-4ae1-99a4-c276daeb0733.png'
}

const useStore = create((set) => ({
  borderRadius: 6,
  themeScheme: 0,
  showComponents: false,
  showComments: false,
  notes:[firstNote],
  circles:[],
  rightDrawer:false,
  leftDrawer: false,
  isNotesOpen: true,
  isPropertiesOpen: true,
  isNavigationOpen: true,
  isTimelineOpen: true,
  setNotes: (value) => set(() => ({ notes: value})),
  setCircles: (value) => set(() => ({ circles: value})),
  setBorderRadius: (value) => set(() => ({ borderRadius: value})),
  setThemeScheme: (value) => set(() => ({ themeScheme: value})),
  toggleShowComponents: () => set((state) => ({ showComponents: !state.showComponents})),
  toggleShowComments: () => set((state) => ({ showComments: !state.showComments})),
  toggleRightDrawer: () => set((state) => ({ rightDrawer: !state.rightDrawer})),
  toggleLeftDrawer: () => set((state) => ({ leftDrawer: !state.leftDrawer})),
}));

export default useStore;
