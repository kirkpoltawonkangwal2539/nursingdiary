import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DiaryDetailParaModel } from '../../../models/diary/diary-Para.model';
import { DiaryDetailModel, DiaryHashtagDetail } from '../../../models/diary/diary-detail.model';
import { CommentModel } from '../../../models/diary/diary-comment.model';
import { SessionService } from '../../../service/session.service';
import { TeacherDiaryDetailService } from './teacher-diary-detail.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-teacher-diary-detail',
  templateUrl: './teacher-diary-detail.component.html',
  styleUrls: ['./teacher-diary-detail.component.scss']
})
export class TeacherDiaryDetailComponent implements OnInit {

  diaryDetailForm: FormGroup;
  commentForm: FormGroup;
  diaryPara: DiaryDetailParaModel = new DiaryDetailParaModel();
  diaryDetail: DiaryDetailModel = new DiaryDetailModel();
  comment: Array<CommentModel> = new Array<CommentModel>();
  tag: Array<DiaryHashtagDetail> = new Array<DiaryHashtagDetail>();
  showtag: Array<string> = new Array<string>();
  commentCreate: CommentModel = new CommentModel();

  constructor(
    private sessionService: SessionService,
    private teacherDiaryDetailService: TeacherDiaryDetailService,
    private formBuilder: FormBuilder
  ) {
    this.diaryDetailForm = formBuilder.group({
      title: [""],
      dateward: [""],
      content: [""],
      tag: [""]
    });

    this.commentForm = formBuilder.group({
      commentContent: [""]
    });
  }

  ngOnInit() {
    this.diaryPara.diaryId = this.sessionService.getItemFromStorage("diaryId")
    this.getDiaryDetail();
    this.getComment();
    this.commentCreate.commentContent = "";
  }
  getDiaryDetail() {
    this.teacherDiaryDetailService.getDiaryDetail(this.diaryPara).subscribe(
      response => {
        this.diaryDetail = response
        this.tag = this.diaryDetail.diaryHashtagDetails
        this.getkeyfromtagjson()
      },
      error => {
      }
    );
  }

  getComment() {
    this.teacherDiaryDetailService.getCommentDetail(this.diaryPara).subscribe(
      response => {
        this.comment = response
      },
      error => {
      }
    );
  }

  createComment() {
    this.commentCreate.diaryId = this.diaryDetail.diaryId
    this.commentCreate.teacherId = this.diaryDetail.teacherId
    this.commentCreate.commentContent = this.commentCreate.commentContent.trim();
    if (this.commentCreate.commentContent == "") {
      swal({
        position: 'center',
        type: 'warning',
        title: 'กรุณามีเนื้อหา',
      })
    }
    else {
      this.teacherDiaryDetailService.createComment(this.commentCreate).subscribe(
        response => {
          this.getComment()
          this.commentCreate.commentContent = ""
        },
        error => {
        }
      );
    }
  }

  getkeyfromtagjson(): void {
    for (const i in this.tag) {
      this.showtag[i] = this.tag[i].hashTagName;
    }
  }
}
