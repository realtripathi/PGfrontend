import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nodal } from '../nodal';
import { MinistryService } from '../ministry.service';

@Component({
  selector: 'app-ministry-view-nodal',
  templateUrl: './ministry-view-nodal.component.html',
  styleUrls: ['./ministry-view-nodal.component.css']
})
export class MinistryViewNodalComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private ministryService: MinistryService) { }

  public unapprovedNodals: Nodal[];

  ministryId: any;

  ngOnInit(): void {
    if(sessionStorage.getItem('userType')=="ministry" && sessionStorage.getItem('ministryId')!=null){
    this.ministryId = sessionStorage.getItem('ministryId');
    this.ministryService.showNodals().subscribe(data => this.unapprovedNodals = data);
    }
    else{
      sessionStorage.clear();
      this.route.navigate(['ministryLogin']);
    }
  }

  viewNodalDetails(unapprovedNodal){
    this.route.navigate(['nodalDetails',unapprovedNodal.nodalUid],{relativeTo: this.router});
  }

}
