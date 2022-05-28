export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Un Celular largo con una de als mejores pantallas',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Un buen celular con una de las mejores camaras',
  },
  {
    id: 3,
    name: 'Celular Estandar',
    price: 299,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
