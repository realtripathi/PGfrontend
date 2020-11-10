import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institute } from './institute';
import { Scheme } from './scheme';
import { ScholarshipForm } from './scholarship-form';
import { Status } from "./Status";
import { Nodal } from "./nodal";

@Injectable({
  providedIn: 'root'
})
export class SchemeService {

  constructor(private http:HttpClient) { }

  register(scheme: Scheme): Observable<Status> {
    let url = 'http://localhost:8080/addScheme';
    return this.http.post<Status>(url, scheme);
  }

  showForm(formId: number): Observable<ScholarshipForm>{
    let url = 'http://localhost:8080/fetchScholarshipFormByNodal?formId='+formId;
    return this.http.get<ScholarshipForm>(url);
  }

  showInstitute(instituteId:number): Observable<Institute>{
    let url = '';
    return this.http.get<Institute>(url);
  }

  showNodals() {
    let url = 'http://localhost:8080/viewNodalList';
    return this.http.get<Nodal[]>(url);
  }
}
