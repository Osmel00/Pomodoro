import { create } from "zustand";
const dataForm = {
    "pomodoro": 25,
    "short break": 5,
    "long break": 15,
    "Kumbh-Sans": true,
    "Space-Mono": false,
    "Roboto-Slab": false,
    "orange": true,
    "light-blue": false,
    "purple": false,
  } 

interface Props {
    menu: string
    setMenu(value: string): void
    formular:data
    auxData:Array<data>
    addData(value: data): void
    clickMenu:boolean
    setClickMenu(value: boolean): void
    font:string,
    setFont(value: string): void
    theme:string,
    setTheme(value: string): void
}

export const useDataProvider = create<Props>((set) => {
    return {
        menu: 'pomodoro',
        setMenu:(value: string) => set(state => ({
            
                menu: value,
            
        })),
        formular:dataForm,
        auxData:Array<data>(),
        addData:(obj:data) => set(state =>{
            return {
                
                auxData:[obj]
            }
        }),
        clickMenu:false,
        setClickMenu:(value:boolean) => set(state=>({
            clickMenu:value,
        })),
        font:'Kumbh-Sans',
        setFont:(value:string) => set(state => ({
            font:value,
        })),
        theme:'orange',
        setTheme:(value:string) => set(state => ({
            theme:value,
        })),
    }
});


 
type data = {
    "pomodoro": number;
    "short break": number;
    "long break": number;
    "Kumbh-Sans": boolean;
    "Space-Mono": boolean;
    "Roboto-Slab": boolean;
    "orange": boolean;
    "light-blue": boolean;
   "purple": boolean;
  }  