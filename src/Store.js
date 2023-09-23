import { create } from 'zustand'
const firstNote =
{
  title:'Welcome to Notes',
  date: '17.09.2023',
  content:`We believe that attaching notes to content is valuable.
  When choosing integration tools, it's crucial to find the right fit. Notion, Linear,
  and GitHub are solid choices for note-based collaboration. While GitHub is foundational and linked to Share by default,
  other platforms might better suit your needs. Just connect to your preferred solution.`,
  type:'image',
  src:'https://i.pinimg.com/564x/ac/6d/50/ac6d50ccbde053337dae0390bd44a193.jpg'
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
