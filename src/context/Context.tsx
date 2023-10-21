import { createContext,useState,useContext,Dispatch,SetStateAction } from "react";

// const auxData = {
//   "pomodoro":'',
//   "short break":'',
//   "long break":'',
//   "kumbh-Sans": false,
//   "Space-Mono": false,
//   "Roboto-Slab": false,
//   "orange": false,
//   "light-blue": false,
//  "purple": false,
// }

export type data = {
  "pomodoro": number;
  "short break": number;
  "long break": number;
  "kumbh-Sans": boolean;
  "Space-Mono": boolean;
  "Roboto-Slab": boolean;
  "orange": boolean;
  "light-blue": boolean;
 "purple": boolean;
}  

export type menuProps = string;
  

type user = {
    name: string;
    appellidos: string;
}

type children = {
    children:React.ReactNode
}


// export type contextProp = {
//   auxData:data[],
//   setAuxData:Dispatch<React.SetStateAction<data[]> >,
//   dataForm:data,
//   setMenu:Dispatch<React.SetStateAction<menuProps> >,
//   menu:menuProps,

// }
// export type contextProp = {
//   auxData:data[],
//   setAuxData:(value:data) => void ,
//   dataForm:data,
//   menu:menuProps,
//   setMenu:(value:data) => void

// }

 

const dataForm = {
  "pomodoro": 25,
  "short break": 5,
  "long break": 15,
  "kumbh-Sans": true,
  "Space-Mono": false,
  "Roboto-Slab": false,
  "orange": true,
  "light-blue": false,
  "purple": false,
}
//let menuChange=false;
// export const DataContext = createContext<contextProp> ({
//   auxData:[],
//   setAuxData:():data[] =>[],
//   dataForm,
//   // menu:'',
//   // setMenu:(value) => value

// })


export interface contextProp {
  menu:string,
  setMenu:Dispatch<SetStateAction<string> >,
  setall: (value:string) => void,
  // user:user,
  // setUser:Dispatch<SetStateAction<user> >,

}

// const defaultState = {
//   menu:'',
//   setMenu:(value:menuProps) => {},
//   user:{
//     name:'',
//     appellidos:''
//   },
//   setUser:():string => '' ,
// } as contextProp


export const DataContext = createContext<contextProp>({
  menu:'',
  setMenu:():string => '' ,
  setall:(value:string)=> ''
});

  export const  ContextProvider = ({children}:children)=>{
    // const menu2 = {
    //   'pomodoro':true,
    //   'short':false,
    //   'long':false,
    //  };
    const [auxData,setAuxData] = useState<[] | data[] >([]);
    const[menu,setMenu] = useState('');
    const [user,setUser] = useState<user>({
      name:'',
      appellidos:''
    }) ;

    const setall= (value:string) =>{
       setMenu(value)
    } 
     return (
        <DataContext.Provider value={{menu,setMenu,setall}}>
                {children}
        </DataContext.Provider>
     )
}

export const  useDataContext = () => useContext(DataContext);