import { Component, OnInit } from '@angular/core';
import { DiaryCreateModel, HashTagModel, UploadPhotoModel } from '../../../models/diary/diary-create.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { ServiceBuilder } from 'selenium-webdriver/edge';
import { SessionService } from '../../../service/session.service';
import { StudentDiaryCreateService } from './student-diary-create.service';
import { SubjectDetailModel } from '../../../models/subject/subject-detail.model';
import { SujectDetailParaModel } from '../../../models/subject/subject-para.model';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-student-diary-create',
  templateUrl: './student-diary-create.component.html',
  styleUrls: ['./student-diary-create.component.scss']
})
export class StudentDiaryCreateComponent implements OnInit {
  diaryCreateData: DiaryCreateModel = new DiaryCreateModel();
  ServiceType: Array<string> = new Array<string>();
  hashTagList: Array<HashTagModel> = new Array<HashTagModel>();
  diaryDetailPara: SujectDetailParaModel = new SujectDetailParaModel();
  subjectDetail: SubjectDetailModel = new SubjectDetailModel();
  tagValue: string;
  diaryCreateForm: FormGroup;
  hidebutton: any[] = [];
  data: string;
  i: number;
  selectedFile: ImageSnippet;
  file:File;
  img:File;
  picture:UploadPhotoModel = new UploadPhotoModel();
  constructor(
    private sessionService: SessionService,
    private diaryService: StudentDiaryCreateService,
    private formBuilder: FormBuilder
  ) {
    this.diaryCreateForm = formBuilder.group({
      title: [""],
      dateward: [""],
      content: [""],
      tag: [""]

    });
  }

  ngOnInit() {
    this.getSubjectDetail();
    this.diaryCreateData.diaryTitle = "";
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.file = this.selectedFile.file
      this.diaryService.uploadImage(this.selectedFile.file).subscribe(
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


  CreateDiary(): void {
    this.diaryCreateData.HashTagList = this.hashTagList
    this.diaryCreateData.studentId = this.sessionService.getItemFromStorage("userId")
    this.diaryCreateData.subjectId = this.sessionService.getItemFromStorage("subjectId")
    this.diaryCreateData.PictureName = this.picture.fileName;
    console.log(this.diaryCreateData)
    if (this.diaryCreateData.diaryTitle.trim().length > 0) {
      if (this.diaryCreateData.dateWard != undefined) {
        if (this.diaryCreateData.HashTagList.length == 3) {
          this.diaryService.recordDiary(this.diaryCreateData)
            .subscribe(
              response => {
                if (response == true) {
                  swal({
                    position: 'center',
                    type: 'success',
                    title: 'สร้างไดอารี่เรียบร้อย',
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
        }
        else {
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
          title: 'กรุณาระบุวันที่ขึ้นวอร์ด',
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

  getSubjectDetail() {
    this.diaryDetailPara.subjectId = this.sessionService.getItemFromStorage("subjectId")
    this.diaryService.getSubjectDetail(this.diaryDetailPara)
      .subscribe(
        response => {
          this.subjectDetail = response
        },
        error => {
        }
      );
  }

  addtag(productId: number, name: string): void {
    this.data = this.diaryCreateForm.controls['tag'].value;
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
          this.hashTagList.push({ hashTagName: name })
          this.tagValue = "";
        }
        else {
          this.hidebutton[productId] = true;
          this.ServiceType.push(name);
        }
      } else {
        this.diaryCreateForm.controls['tag'].disable();
      }
    }
  }

  removetag(name: string): void {
    console.log(name)
    for (let i = this.ServiceType.length - 1; i >= 0; i--) {
      if (this.ServiceType[i] === name) {
        console.log("ก่อนลบ", this.ServiceType[i])
        this.ServiceType.splice(i, 1);
        console.log("หลังลบ", this.ServiceType.toString());
        this.hashTagList.splice(i, 1)

        // break;       //<-- Uncomment  if only the first term has to be removed
      }
      if (this.ServiceType.length < 3) {
        this.diaryCreateForm.controls['tag'].enable();
      }
    }
  }
}
