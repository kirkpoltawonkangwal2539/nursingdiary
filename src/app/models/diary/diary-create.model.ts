export class DiaryCreateModel{
    diaryTitle: string;
    diaryContent: string;
    dateCreate: Date;
    dateWard: Date;
    studentId: string;
    subjectId : number;
    HashTagList: Array<HashTagModel> = new Array<HashTagModel>();
    PictureName: string;
}

export class HashTagModel{
    hashTagName: string; 
}

export class UploadPhotoModel{
    fileName: string; 
    Success:boolean;
}