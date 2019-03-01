export class SubjectCreateModel{
    subjectName: string;
    teacherId:string;
    teacherAssistants: Array<TeacherAssistantModel> = new Array<TeacherAssistantModel>();
}

export class TeacherAssistantModel{
    teacherId : string; 
}