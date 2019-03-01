export class SubjectDetailModel{
    subjectId: number;
    subjectName: string;
    qrCode: string;
    qrCodePic:string;
    teacherCreateId: string;
    teacherCreateName: string;
    teacherCreateType: string;
    assistantSelector: Array<TeacherAssistantModel> = new Array<TeacherAssistantModel>();
    studenSubjectDetail: Array<StudenSubjectDetailModel> = new Array<StudenSubjectDetailModel>();
}

export class TeacherAssistantModel{
    teacherId: string;
    teacherName: string;
    teacherType: string;
}

export class StudenSubjectDetailModel{
    studentId: string;
    studentFirstName: string;
    studentLastName: string;
    teacherId: string;
}
