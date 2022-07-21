import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-home-demo',
  templateUrl: './home-demo.component.html',
  styleUrls: ['./home-demo.component.scss'],
})
export class HomeDemoComponent implements OnInit {
  public name: String = 'DuyTan';
  public abcd: String = 'ABCD_X';
  public ages: number = 26;
  public demoText: String = 'Nhập tên XYZ';
  public arrFruit: String[] = ['dasdasda', 'dasdad', 'aaaaaa']; //let x: Array<string> =
  public arrFruit2 = [
    { ten: 'Táo 1', gia: 11, haGia: true },
    { ten: 'Táo 2', gia: 0, haGia: false },
    { ten: 'Táo 3', gia: -13, haGia: false },
    { ten: 'Táo 4', gia: 14, haGia: true },
  ];

  public districts: Array<string> = ['a', 'b'];
  public vietnamDatas = [
    {
      city: 'Chọn T.phố',
      district: [],
    },
    {
      city: 'Vĩnh Long',
      district: ['Tp.Vĩnh Long', 'Huyện Mang Thít'],
    },
    {
      city: 'Đồng Tháp',
      district: ['Tp.Cao Lãnh', 'Huyện Sa Đéc'],
    },
    {
      city: 'Trà Vinh',
      district: ['Tp.Trà Vinh', 'Huyện Cầu Ngang', 'dsadasda'],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.arrFruit);
  }

  public resetDemoText(x: String): void {
    this.demoText = '';
    this['abcd'] = '';
  }

  public changeCity(e: any): void {
    const city = e.target.value;
    console.log('event: ', city);
    if (!city) {
      return;
    }

    // Cach 1
    const search = this.vietnamDatas.filter((data) => data.city === city);
    console.log('search: ', search);
    if (search) {
      this.districts = search[0].district;
    }

    // // Cach 2
    // this.districts =
    //   this.vietnamDatas.find((data) => data.city === city)?.district || [];
  }
}
