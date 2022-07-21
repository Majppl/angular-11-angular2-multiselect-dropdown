import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  objStateName: any[];
  constructor() {}

  setData(): void {
    this.objStateName = [
      [
        { id: 35, statename: 'Andaman and Nicobar Islands', statecode: 'AN' },
        { id: 37, statename: 'Andhra Pradesh', statecode: 'AD' },
        { id: 12, statename: 'Arunachal Pradesh', statecode: 'AR' },
        { id: 18, statename: 'Assam', statecode: 'AS' },
        { id: 10, statename: 'Bihar', statecode: 'BR' },
        { id: 4, statename: 'Chandigarh', statecode: 'CH' },
        { id: 22, statename: 'Chattisgarh', statecode: 'CG' },
        {
          id: 26,
          statename: 'Dadra & Nagar Haveli and Daman & Diu',
          statecode: 'DNHDD',
        },
        { id: 7, statename: 'Delhi', statecode: 'DL' },
        { id: 30, statename: 'Goa', statecode: 'GA' },
        { id: 24, statename: 'Gujarat', statecode: 'GJ' },
        { id: 6, statename: 'Haryana', statecode: 'HR' },
        { id: 2, statename: 'Himachal Pradesh', statecode: 'HP' },
        { id: 1, statename: 'Jammu and Kashmir', statecode: 'JK' },
        { id: 20, statename: 'Jharkhand', statecode: 'JH' },
        { id: 29, statename: 'Karnataka', statecode: 'KA' },
        { id: 32, statename: 'Kerala', statecode: 'KL' },
        { id: 23, statename: 'Madhya Pradesh', statecode: 'MP' },
        { id: 27, statename: 'Maharashtra', statecode: 'MH' },
        { id: 14, statename: 'Manipur', statecode: 'MN' },
        { id: 17, statename: 'Meghalaya', statecode: 'ML' },
        { id: 15, statename: 'Mizoram', statecode: 'MZ' },
        { id: 13, statename: 'Nagaland', statecode: 'NL' },
        { id: 21, statename: 'Odisha', statecode: 'OD' },
        { id: 34, statename: 'Pondicherry', statecode: 'PY' },
        { id: 3, statename: 'Punjab', statecode: 'PB' },
        { id: 8, statename: 'Rajasthan', statecode: 'RJ' },
        { id: 33, statename: 'Tamil Nadu', statecode: 'TN' },
        { id: 36, statename: 'Telangana', statecode: 'TS' },
        { id: 16, statename: 'Tripura', statecode: 'TR' },
        { id: 9, statename: 'Uttar Pradesh', statecode: 'UP' },
        { id: 5, statename: 'Uttarakhand', statecode: 'UK' },
        { id: 19, statename: 'West Bengal', statecode: 'WB' },
      ],
    ];
  }
}
