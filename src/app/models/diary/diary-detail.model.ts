import { HashTagModel } from "./diary-create.model";

export class DiaryDetailModel {
    diaryId: number;
    diaryTitle: string;
    diaryContent: string;
    dateCreateToString: string;
    dateWardToString: string;
    dateSend: Date;
    dateWard: Date;
    dateCreate: Date;
    dateUpdate: Date;
    statusId: number;
    studentId: string;
    subjectId: number;
    subjectName: string;
    teacherId: string;
    diaryPictureDetials: DiaryPictureModel = new DiaryPictureModel();
    diaryHashtagDetails: Array<DiaryHashtagDetail> = new Array<DiaryHashtagDetail>();
    newHashTagList: Array<string> = new Array<string>();
    deleteHashTagList:  Array<number> = new Array<number>();
    newPicture:string;
}

export class DiaryHashtagDetail {
    hashTagId: number;
    hashTagName: string;
}

export class DiaryPictureModel {
    pidId: number;
    picName: string;
}


