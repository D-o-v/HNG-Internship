export interface LoginProps {
    isIn:boolean;
    setIsIn: React.Dispatch<React.SetStateAction<boolean>>;
  }
export interface Character {
    id: string;
    name: string;
    thumb: string;
  }
  export interface SearchProps {
    setSearchItem: React.Dispatch<React.SetStateAction<string>>;
  }