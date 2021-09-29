export interface User{
    name:string;
    patientImage:string;
    mobile:number;
    role: number;
    role_name: string;
    role_id:string;
    id: string;
    username: string;
    password: string;
    token: string;
    contactNo: string;
    email: string;
    gender: string;
    dob: string;
    bloodgroup: string;
    maritalStatus: string;
    height: string;
    weight: string;
    emergencyContact: string;
    location: string;
    allergies: string;
    currentMedications: string;
    pastMedications: string;
    chronicDiseases: string;
    injuries: string;
    surgeies: string;
    smokingHabits: string;
    alcoholConumption: string;
    activityLevel: string;
    foodPreference: string;
    occupation: string;
    
    // Doctor
    speciality: string;
    experience: string;
    hospitalName: string;
    fee:string;
    address:string;
    
    length:30;
}