import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/session.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentDiaryDetailService } from './student-diary-detail.service';
import { DiaryDetailParaModel } from '../../../models/diary/diary-Para.model';
import { DiaryDetailModel, DiaryHashtagDetail } from '../../../models/diary/diary-detail.model';
import { CommentModel } from '../../../models/diary/diary-comment.model';
import { HashTagModel, DiaryCreateModel, UploadPhotoModel } from '../../../models/diary/diary-create.model';
import swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-student-diary-detail',
  templateUrl: './student-diary-detail.component.html',
  styleUrls: ['./student-diary-detail.component.scss']
})
export class StudentDiaryDetailComponent implements OnInit {
  diaryDetailForm: FormGroup;
  diaryPara: DiaryDetailParaModel = new DiaryDetailParaModel();
  diaryDetail: DiaryDetailModel = new DiaryDetailModel();
  diaryUpdate: DiaryDetailModel = new DiaryDetailModel();
  successDiaryPara: DiaryDetailParaModel = new DiaryDetailParaModel();
  comment: Array<CommentModel> = new Array<CommentModel>();
  tag: Array<DiaryHashtagDetail> = new Array<DiaryHashtagDetail>();
  matchHashTag: Array<DiaryHashtagDetail> = new Array<DiaryHashtagDetail>();
  showtag: Array<string> = new Array<string>();
  ServiceType: Array<string> = new Array<string>();
  data: string;
  tagValue: string;
  hashTagList: Array<string> = new Array<string>();
  hidebutton: any[] = [];
  dateShow: Date;
  dateSendingToServer: string;
  f2: string = "2019-02-01"
  selectedFile: ImageSnippet;
  file:File;
  img:File;
  picture:UploadPhotoModel = new UploadPhotoModel();
  constructor(
    private sessionService: SessionService,
    private studentDiaryDetailService: StudentDiaryDetailService,
    private formBuilder: FormBuilder
  ) {
    this.diaryDetailForm = formBuilder.group({
      title: [""],
      dateward: [""],
      content: [""],
      tag: [""]
    });
  }

  ngOnInit() {
    this.diaryPara.diaryId = this.sessionService.getItemFromStorage("diaryId")
    this.getDiaryDetail();
    this.getComment();
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.file = this.selectedFile.file
      this.studentDiaryDetailService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
      this.picture = res

       console.log("res",res)
       console.log("pic",this.picture.fileName)
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  }

  getDiaryDetail() {
    this.studentDiaryDetailService.getDiaryDetail(this.diaryPara).subscribe(
      response => {
        this.diaryDetail = response
        this.tag = this.diaryDetail.diaryHashtagDetails
        this.dateSendingToServer = new DatePipe('en-US').transform(this.diaryDetail.dateWard, 'yyyy-MM-dd')
        console.log(this.diaryDetail)
        this.getkeyfromtagjson()
      },
      error => {
      }
    );
  }

  getComment() {
    this.studentDiaryDetailService.getCommentDetail(this.diaryPara).subscribe(
      response => {
        this.comment = response
        console.log("Comment", this.comment)
      },
      error => {
      }
    );
  }

  updateDiary() {
    
    let newDate = new Date(this.dateSendingToServer);
    this.diaryUpdate.dateCreate = this.diaryDetail.dateCreate;
    this.diaryUpdate.dateCreateToString = this.diaryDetail.dateCreateToString;
    this.diaryUpdate.dateSend = this.diaryDetail.dateSend;
    this.diaryUpdate.dateUpdate = this.diaryDetail.dateUpdate;
    this.diaryUpdate.dateWard = newDate;
    this.diaryUpdate.dateWardToString = this.diaryDetail.dateWardToString;
    this.diaryUpdate.diaryContent = this.diaryDetail.diaryContent;
    this.diaryUpdate.diaryHashtagDetails = this.diaryDetail.diaryHashtagDetails;
    this.diaryUpdate.diaryId = this.diaryDetail.diaryId;
    this.diaryUpdate.diaryPictureDetials = this.diaryDetail.diaryPictureDetials;
    this.diaryUpdate.diaryTitle = this.diaryDetail.diaryTitle;
    this.diaryUpdate.statusId = this.diaryDetail.statusId;
    this.diaryUpdate.studentId = this.diaryDetail.studentId;
    this.diaryUpdate.subjectId = this.diaryDetail.subjectId;
    this.diaryUpdate.subjectName = this.diaryDetail.subjectName;
    this.diaryUpdate.teacherId = this.diaryDetail.teacherId;
    this.diaryUpdate.newHashTagList = this.hashTagList;
    this.diaryUpdate.newPicture = this.picture.fileName
    console.log(this.diaryUpdate)
    if (this.diaryUpdate.diaryTitle.trim().length > 0) {
      if (this.ServiceType.length == 3) {
        this.studentDiaryDetailService.UpdateDiary(this.diaryUpdate)
          .subscribe(
            response => {
              if (response == true) {
                swal({
                  position: 'center',
                  type: 'success',
                  title: 'แก้ไขไดอารี่เรียบร้อยแล้ว',
                  showConfirmButton: false,
                  timer: 1000
                }).then(() => {
                  location.reload();
                })
              } else {
                swal({
                  position: 'center',
                  type: 'warning',
                  title: 'เกิดข้อผิดพลาด',
                  showConfirmButton: false,
                  timer: 1000
                }).then(() => {
                  location.reload();
                })
              }
            },
            error => {
            }
          );
      } else {
        swal({
          position: 'center',
          type: 'warning',
          title: 'ต้องมีคำสำคัญให้ครบ 3 คำ',
          showConfirmButton: false,
          timer: 1000
        })
      }
    }
    else {
      swal({
        position: 'center',
        type: 'warning',
        title: 'กรุณาใส่หัวข้อไดอารี่',
        showConfirmButton: false,
        timer: 1000
      })
    }
  }

  getkeyfromtagjson(): void {
    for (const i in this.tag) {
      this.showtag[i] = this.tag[i].hashTagName;
      this.ServiceType.push(this.tag[i].hashTagName)
    }
  }

  successDiary() {

    swal({
      title: 'ต้องการส่งไดอารี่',
      text: 'กรุณาตรวจสอบให้แน่นอน',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
      cancelButtonText: "ยกเลิก"
    }).then((result) => {
      if (result.value == true) {
        this.successDiaryPara.diaryId = this.diaryDetail.diaryId
        this.studentDiaryDetailService.SuccessDiary(this.successDiaryPara).subscribe(
          response => {
            swal({
              position: 'center',
              type: 'success',
              title: 'ไดอารี่ส่งเรียบร้อยแล้ว',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              location.reload();
            })
          })
      }
      else {
        console.log("ผิดพลาด")
      }
    })
  }

  addtag(productId: number, name: string): void {
    this.data = this.diaryDetailForm.controls['tag'].value;
    if (this.data == undefined || this.data.toString().trim().length == 0) {
      swal({
        position: 'center',
        type: 'warning',
        title: 'กรุณาระบุคำสำคัญ',
        showConfirmButton: false,
        timer: 1000
      })
    } else {
      if (this.ServiceType.length != 3) {
        if (productId === 0) {
          this.ServiceType.push(name);
          this.hashTagList.push(name)
          this.tagValue = "";
          console.log("hashTagList", this.hashTagList)
        }
        else {
          this.hidebutton[productId] = true;
          this.ServiceType.push(name);
        }
      } else {
        this.diaryDetailForm.controls['tag'].disable();
      }
    }
  }

  removetag(name: string): void {
    for (let i = this.ServiceType.length - 1; i >= 0; i--) {
      if (this.ServiceType[i] === name) {
        this.ServiceType.splice(i, 1)

        if (this.hashTagList.length != 0) {
          let index: number = this.hashTagList.indexOf(name);
          if (index !== -1) {
            this.hashTagList.splice(index, 1);
          }
        }
        console.log(this.hashTagList)
        if (this.diaryUpdate.deleteHashTagList.length != 3) {
          let match = this.diaryDetail.diaryHashtagDetails.find(w => w.hashTagName == name)
          if (match != undefined) {
            this.diaryUpdate.deleteHashTagList.push(match.hashTagId)
          }
        }
      }
      if (this.ServiceType.length < 3) {
        this.diaryDetailForm.controls['tag'].enable();
      }
    }
  }
}
