import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { MultipleInsertService } from './multiple-insert.service';
import { MultipleInsertModel, MultipleListModel } from '../../../models/admin/insert.model';
import swal from 'sweetalert2';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-multiple-insert',
  templateUrl: './multiple-insert.component.html',
  styleUrls: ['./multiple-insert.component.scss']
})
export class MultipleInsertComponent implements OnInit {
  multipleInsert: FormGroup;
  multiple: MultipleInsertModel = new MultipleInsertModel();
  multipleList: Array<MultipleListModel> = new Array<MultipleListModel>()
  userType: number = 0;
  file: File;
  name: string = "none";
  check: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private multipleInsertService: MultipleInsertService
  ) {
    this.multipleInsert = formBuilder.group({
      type: ["กรุณาเลือกประเภท", [Validators.required, Validators.nullValidator]]
    });
  }

  ngOnInit() {
  }

  incomingfile(event) {
    this.file = event.target.files[0];
    this.name = this.file.name;
  }

  Ok() {
    this.multiple.userType = this.userType;
    if (this.file === undefined) {
      swal({
        position: 'center',
        type: 'warning',
        title: 'เลือกไฟล์ Excel',
        showConfirmButton: false,
        timer: 2000
      })
    } else if (this.multiple.userType == 0) {
      swal({
        position: 'center',
        type: 'warning',
        title: 'กรุณากรอกเลือกประเภทข้อมูล',
        showConfirmButton: false,
        timer: 2000
      })
    }
    else {
      this.multipleInsertService.UploadExcel(this.file)
        .subscribe(
          (res) => {
            this.multipleList = res
            this.multiple.multipleData = this.multipleList;
            this.multipleInsertService.multipleInsert(this.multiple)
              .subscribe(
                (response) => {
                  this.check = response
                  if (this.check == true) {
                    swal({
                      position: 'center',
                      type: 'success',
                      title: 'เพิ่มข้อมูลเรียบร้อย',
                      showConfirmButton: false,
                      timer: 2000
                    }).then(() => {
                      location.reload();
                    })
                  } else {
                    swal({
                      position: 'center',
                      type: 'error',
                      title: 'เกิดข้อผิดพลาด เนื่องจากรหัสประจำตัวซ้ำ',
                      showConfirmButton: false,
                      timer: 2000
                    })
                  }
                },
                (error) => {

                }
              )
          },
          (err) => {

          });
    };
  }

}
