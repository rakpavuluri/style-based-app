import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {

  selectedCompany = {};
  company1 = {
    username: 'A company',
    input: {
      color: '#000',
      type: 1
    },
    radio: {
      color: '#333',
      type: 2
    },
    button: {
      color: '#0f0',
      backgroundColor: '#234',
      hoverColor: '#655',
      type: 2
    }
  }
  company2 = {
    username: 'B company',
    input: {
      color: '#233',
      type: 1
    },
    radio: {
      color: '#aaa',
      type: 2
    },
    button: {
      color: '#f00',
      backgroundColor: '#232',
      hoverColor: '#645',
      type: 2
    }
  }
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['companyName'] === 'a') {
        this.selectedCompany = this.company1;
      } else {
        this.selectedCompany = this.company2;
      }
    })
  }

  ngOnInit() {
  }

}
