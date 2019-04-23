import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { ProduccionService } from 'src/app/services/produccion.service';
import { ActivatedRoute, Router } from '@angular/router'
 
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
 
  constructor(private servicioProducto: ProduccionService, private router: Router, private activedRoute: ActivatedRoute) { }
  editar: boolean = false;

  producto: Producto = {
  cod_producto: 0,
  nom_producto: '',
  cantidad: 0,
  precio: 0,
  cod_m_prima: 1
}

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.servicioProducto.getProducto(params.id).subscribe(
        res => {
          console.log(res)

          this.producto = res;
          this.editar = true
        },
        err => console.error(err)

      )
    }
  }

  Guardar(){
    this.servicioProducto.saveProducto(this.producto).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/produccion/listar'])
      },
      err => console.error(err)
    )
    console.log(this.producto);
  }

  actualizarProducto(){
    console.log(this.producto)
    this.servicioProducto.updateProducto(this.producto.cod_producto, this.producto).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/produccion/listar'])
      },
      err => console.log(err)
    )
  }
}
