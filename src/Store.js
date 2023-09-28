import { create } from 'zustand'
const firstNote =
{
  title:'Welcome to Notes',
  date: '17.09.2023',
  content:`We believe attaching notes to 3D content is a valuable addition to the standard collaboration workflows.
  We believe in using the right tool for the job, and as an integration enviromemnt,
  offer several integrations to enable note-based collaboration.
  When choosing the tools, it's crucial to find the right fit. Notion, Linear,
  and GitHub are solid choices for note-based worlflows. While GitHub is foundational to our ecosystem and linked to Share by default,
  other platforms might better suit your needs. Just connect to your preferred solution. Visit our Wiki to learn more about integrations`,
  type:'image',
  src:'https://user-images.githubusercontent.com/3433606/271329214-bfde5dde-184c-4796-ae7c-fb2b2ab8266c.png'
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
