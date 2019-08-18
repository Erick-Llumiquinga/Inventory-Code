import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  proveedorId: number;
  nombre: string;
  fechaFact: string;
  cantidad: number;
  productoId: number;
  total: number;
  proveedores: any[];
  productos: any[];
  iva: number;
  datos: any = [];
  cantidadTotal: number;


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.traerProveedores();
    this.iva = 0.12;
    this.total = 3.00;
    this.proveedorId = 999;   
    this.productoId = 999;  
  }

  traerProveedores = () =>{
    this.http.get<any>(environment.url + '/leer?tabla=proveedores')
    .subscribe(res => {
      this.proveedores = res.datos
    })
  }

  traerProductos  = () =>{
    this.http.get<any>(environment.url + `/leerFiltro?tabla=productos&id=${this.proveedorId}`)
    .subscribe(res => {
      this.productos = res.datos
    })
  } 

  cambiarId = () =>{
    console.log(this.productoId)
  }


  agrgarProducto = () => {
    let data = {
      productoid: this.productoId,
      fechaFact: this.fechaFact,
      cantidadProductos: this.cantidad,
      valorTotal: this.total
    }
    
    this.productos.forEach(cant => {
      if (cant.id == this.productoId) {
        this.total = cant.cantidad - this.cantidad
      }
      else{
        console.log('algo esta mal')
      }
    });

    this.total += this.cantidad * this.productos['precioUnit'];
    this.datos.push(data)
    this.proveedorId = 999;   
    this.productoId = 999;  
    this.proveedorId = 0;
    this.fechaFact = '';
    this.cantidad = 0;

  }

  guardarDatos = () =>{
    this.total = 8


    let data = {
      tabla: 'ventas',
      datos: this.datos
    }
     let cantidaData = {
       tabla: 'productos',
       datos: [{id: this.productoId, cantidad: this.cantidad}]
     }

    this.http.post(environment.url + '/insertar', data)
    .subscribe(res=>{
      Swal.fire({
        type: 'success',
        title: 'Genial!',
        text: 'Los datos se ingresaron coreectamente'
      })
    })

    this.http.post(environment.url + '/actualizar', cantidaData)
    .subscribe(res=>{
      console.log(res)
    })
  }
}
