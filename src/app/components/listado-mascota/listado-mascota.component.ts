import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';

const listMascotas: Mascota[] = [
  { nombre: 'Mike', edad: 5, raza: 'Golden', color: 'Dorado', peso: 44 },
  { nombre: 'Milton', edad: 6, raza: 'Golden', color: 'Dorado', peso: 37 },
  { nombre: 'Bartolo', edad: 3, raza: 'Dogo Argentino', color: 'Blanco', peso: 60 },
  { nombre: 'Aquiles', edad: 5, raza: 'Ovejero Aleman', color: 'Negro', peso: 67 },
  { nombre: 'Homero', edad: 1, raza: 'Labrador', color: 'Negro', peso: 44 },
  { nombre: 'Mark', edad: 3, raza: 'Callejero', color: 'Negro', peso: 25 },
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por página'
  }

}
