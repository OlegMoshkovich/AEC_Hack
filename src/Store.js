import { create } from 'zustand'
const firstNote =
{
  title:'Welcome to Notes',
  date: '17.09.2023',
  content:`We belive the general pattern revealed itself and information attached to content in the form of a note is very useful.
   As an integration environment we believe finding the right tool for the job. It seems Notion, linear or Github are
   a good solution for notes based collaboration. We also believe tha Github is
   the foundation of a good ecosystem, that is why it is connected to the Share by default. However other providers might be more suitable for you.
   Simple connect the solution you prefer.`,
  type:'image',
  src:'https://i.pinimg.com/564x/ac/6d/50/ac6d50ccbde053337dae0390bd44a193.jpg'
}

const useStore = create((set) => ({
  borderRadius: 16,
  themeScheme: 0,
  showComponents: false,
  showComments: false,
  notes:[firstNote],
  circles:[],
  rightDrawer:false,
  leftDrawer: false,
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
