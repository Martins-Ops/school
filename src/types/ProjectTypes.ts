export interface TeacherTypes {
id:number;
first_name:string;
last_name:string;
gender:string;
email:string

}

export interface BtnTealTypes{
    onClick: React.MouseEventHandler
}

export interface ClassRoomTypes{
    name:string;
    id:string   
}


export interface studentTypes {
  first_name: string;
  last_name: string;
  id: number;
  email: string;
  classroom: string;
  gender: string
}

export interface studentAddScoreTypes {
  first_name: string;
  last_name: string;
  id: number;
  test_score: number;
  exam_score: number;
  total_score: number
  _id:number
}

export interface BtnPropsTypes {
  value: React.ReactNode;
  loading: boolean;
}


export  interface FormDetails {
    first_name: string;
    last_name: string;
    middle_name: string;
    email: string;
    nationality: string;
    state_of_origin: string;
    gender: string;
    classroom: Number;
    is_teacher: boolean;
    is_student: boolean;
    is_principal: boolean;
  password: string;
  profile_image: File | null;
  }


export interface authState {
  isLoggeedin: boolean;
  token: string;
}