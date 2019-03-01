import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { userModel } from '../models/user/user.model';


@Injectable()
export class SessionService {

constructor(
    private localStorageService: LocalStorageService
) { }
setItemToStorage(key: string, val: userModel): void {
    this.localStorageService.set("userId", val.userId);
    this.localStorageService.set("typeId", val.typeId);
    this.localStorageService.set("name",val.firstname + " " + val.lastname)
}

setSubjectToStorage(key: string, subjectId: number): void {
    this.localStorageService.set("subjectId", subjectId);
}

setDiaryToStorage(key: string, diaryId: number): void {
    this.localStorageService.set("diaryId", diaryId);
}

setEditUserStorage(key: string, userId: string): void {
    this.localStorageService.set("edit-userId", userId);
}

setEditTypeStorage(key: string, typeId: number): void {
    this.localStorageService.set("edit-typdId", typeId);
}

getItemFromStorage(key: string): any {
    return this.localStorageService.get<any>(key);
}

clearSession(): void {
    this.localStorageService.clearAll();
    console.log("clear session!");
}

removeItemFromStorage(key: string): void {
    this.localStorageService.remove(key);
}

setToken(expiresTime: number): void {
    this.localStorageService.set("expiresTime", (Date.now() / 1000) + expiresTime);
    console.log("refresh token");
}
}
